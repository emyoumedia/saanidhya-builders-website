'use client'
import { useState } from 'react'
import { Link2, Check } from 'lucide-react'
import { FaFacebook, FaLinkedin , FaTwitter} from "react-icons/fa";
interface Props { title: string; url: string }

export default function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent

  function copyLink() {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const links = [
    { label:'Twitter',  Icon: FaTwitter,  href:`https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}` },
    { label:'Facebook', Icon: FaFacebook, href:`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label:'LinkedIn', Icon: FaLinkedin, href:`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
  ]

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="font-montserrat text-sm font-semibold text-navy/60">Share:</span>
      {links.map(({ label, Icon, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-navy/10 font-montserrat
            text-sm text-navy/60 hover:border-orange/40 hover:text-orange transition-all"
          aria-label={`Share on ${label}`}>
          <Icon size={14} /> {label}
        </a>
      ))}
      <button onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-navy/10 font-montserrat
          text-sm text-navy/60 hover:border-orange/40 hover:text-orange transition-all"
        aria-label="Copy link">
        {copied ? <><Check size={14} /> Copied!</> : <><Link2 size={14} /> Copy Link</>}
      </button>
    </div>
  )
}
