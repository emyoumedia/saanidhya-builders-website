interface Props {
  tag?:         string
  title:        string
  description?: string
  count?:       number
}

export default function BlogHeader({ tag, title, description, count }: Props) {
  return (
    <div className="text-center mb-12">
      {tag && (
        <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase
          tracking-widest mb-4 px-4 py-1.5 rounded-full border border-orange/20 bg-orange/5">
          {tag}
        </span>
      )}
      <h1 className="font-playfair font-bold text-navy mb-4"
        style={{ fontSize:'clamp(2rem,5vw,3rem)' }}>
        {title}
      </h1>
      {description && (
        <p className="font-montserrat text-lg max-w-2xl mx-auto" style={{ color:'rgba(11,15,59,.62)' }}>
          {description}
        </p>
      )}
      {count !== undefined && (
        <p className="font-montserrat text-sm mt-3" style={{ color:'rgba(11,15,59,.4)' }}>
          {count} {count === 1 ? 'article' : 'articles'}
        </p>
      )}
    </div>
  )
}
