'use client'

/**
 * Pure client-side markdown renderer.
 * Handles: headings, bold, italic, inline code, links, tables,
 *          blockquotes, ordered/unordered lists, fenced code, <hr>, paragraphs.
 *
 * NOTE: `source` here is already the body string returned by gray-matter —
 *       frontmatter has already been stripped by the server. Do NOT strip again.
 */

import React from 'react'

interface Props { source: string }

// ── Inline: bold, italic, code, links ────────────────────────────────────
function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let rest = text
  let key  = 0

  while (rest.length > 0) {
    // [text](url)
    const link = rest.match(/^\[([^\]]+)\]\(([^)]+)\)/)
    if (link) {
      const external = link[2].startsWith('http')
      nodes.push(
        <a key={key++} href={link[2]}
          className="text-orange underline underline-offset-2 hover:text-purple transition-colors"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}>
          {link[1]}
        </a>
      )
      rest = rest.slice(link[0].length); continue
    }
    // **bold**
    const bold = rest.match(/^\*\*(.+?)\*\*/)
    if (bold) {
      nodes.push(<strong key={key++} className="font-semibold text-navy">{bold[1]}</strong>)
      rest = rest.slice(bold[0].length); continue
    }
    // *italic* (not **)
    const italic = rest.match(/^\*(?!\*)(.+?)\*(?!\*)/)
    if (italic) {
      nodes.push(<em key={key++} className="italic">{italic[1]}</em>)
      rest = rest.slice(italic[0].length); continue
    }
    // `code`
    const code = rest.match(/^`([^`]+)`/)
    if (code) {
      nodes.push(
        <code key={key++}
          className="font-mono text-sm bg-navy/8 px-1.5 py-0.5 rounded text-navy">
          {code[1]}
        </code>
      )
      rest = rest.slice(code[0].length); continue
    }
    nodes.push(rest[0])
    rest = rest.slice(1)
  }
  return nodes
}

// ── Block parser ──────────────────────────────────────────────────────────
function parseBlocks(markdown: string): React.ReactNode[] {
  // gray-matter already stripped frontmatter — use content as-is
  const lines    = markdown.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i   = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // blank
    if (line.trim() === '') { i++; continue }

    // ── Heading: # ## ### ####
    const hm = line.match(/^(#{1,4})\s+(.+)/)
    if (hm) {
      const level = hm[1].length
      const id    = hm[2].toLowerCase().replace(/[^a-z0-9]+/g, '-')
      const Tag   = `h${level}` as 'h1'|'h2'|'h3'|'h4'
      const cls: Record<number,string> = {
        1: 'font-playfair font-bold text-navy mt-10 mb-4 text-3xl md:text-4xl',
        2: 'font-playfair font-bold text-navy mt-8 mb-3 text-2xl border-b border-navy/10 pb-2',
        3: 'font-playfair font-semibold text-navy mt-6 mb-2 text-xl',
        4: 'font-playfair font-semibold text-navy mt-5 mb-2 text-lg',
      }
      elements.push(
        <Tag key={key++} id={id} className={cls[level]}>
          {parseInline(hm[2])}
        </Tag>
      )
      i++; continue
    }

    // ── Horizontal rule: three or more dashes on their own line
    // Must be ONLY dashes (and optional spaces) — not mixed with other chars
    if (/^-{3,}\s*$/.test(line) && line.trim().replace(/-/g,'') === '') {
      elements.push(<hr key={key++} className="border-navy/10 my-8" />)
      i++; continue
    }

    // ── Blockquote
    if (line.startsWith('>')) {
      const bqLines: string[] = []
      while (i < lines.length && lines[i].startsWith('>')) {
        bqLines.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      elements.push(
        <blockquote key={key++}
          className="border-l-4 border-orange pl-5 py-2 my-6 bg-orange/5 rounded-r-xl italic
            font-montserrat text-base" style={{ color:'rgba(11,15,59,.78)' }}>
          {bqLines.map((l, bi) => (
            <p key={bi} className="leading-relaxed">{parseInline(l)}</p>
          ))}
        </blockquote>
      )
      continue
    }

    // ── Unordered list
    if (/^[-*+]\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-*+]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*+]\s/, ''))
        i++
      }
      elements.push(
        <ul key={key++}
          className="font-montserrat text-base list-disc list-outside mb-4 space-y-1.5 pl-5"
          style={{ color:'rgba(11,15,59,.78)' }}>
          {items.map((item, li) => (
            <li key={li} className="leading-relaxed">{parseInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    // ── Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={key++}
          className="font-montserrat text-base list-decimal list-outside mb-4 space-y-1.5 pl-5"
          style={{ color:'rgba(11,15,59,.78)' }}>
          {items.map((item, li) => (
            <li key={li} className="leading-relaxed">{parseInline(item)}</li>
          ))}
        </ol>
      )
      continue
    }

    // ── Fenced code block
    if (line.startsWith('```')) {
      i++
      const codeLines: string[] = []
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // closing ```
      elements.push(
        <pre key={key++}
          className="bg-navy text-cream rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono leading-relaxed">
          <code>{codeLines.join('\n')}</code>
        </pre>
      )
      continue
    }

    // ── Table (line contains |)
    if (line.includes('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i])
        i++
      }
      const parseRow = (row: string) =>
        row.split('|').map((c) => c.trim()).filter(Boolean)

      const [headerRow, , ...dataRows] = tableLines
      if (headerRow) {
        const headers = parseRow(headerRow)
        const rows    = dataRows
          .filter((r) => !/^[\s|:-]+$/.test(r))
          .map(parseRow)

        elements.push(
          <div key={key++}
            className="overflow-x-auto mb-6 rounded-xl border border-navy/10 shadow-sm">
            <table className="w-full text-sm font-montserrat">
              <thead className="gradient-bg text-white">
                <tr>
                  {headers.map((h, hi) => (
                    <th key={hi}
                      className="px-4 py-3 text-left font-semibold text-white whitespace-nowrap">
                      {parseInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 border-t border-navy/6"
                        style={{ color:'rgba(11,15,59,.72)' }}>
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // ── Paragraph (everything else)
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^#{1,4}\s/) &&
      !lines[i].startsWith('>') &&
      !lines[i].startsWith('```') &&
      !/^[-*+]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].includes('|') &&
      !/^-{3,}\s*$/.test(lines[i])
    ) {
      paraLines.push(lines[i])
      i++
    }

    if (paraLines.length > 0) {
      elements.push(
        <p key={key++}
          className="font-montserrat text-base leading-relaxed mb-4"
          style={{ color:'rgba(11,15,59,.78)' }}>
          {parseInline(paraLines.join(' '))}
        </p>
      )
    }
  }

  return elements
}

export default function MdxRenderer({ source }: Props) {
  if (!source) return null
  return <div className="max-w-none">{parseBlocks(source)}</div>
}
