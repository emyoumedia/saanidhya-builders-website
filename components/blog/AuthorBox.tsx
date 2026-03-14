import Image from "next/image";

interface Props { author: string; date: string; readingTime: string }

export default function AuthorBox({ author, date, readingTime }: Props) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-cream border border-navy/5">
      {/* Circular logo version for author avatar */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange/30 flex-shrink-0 bg-navy">
        <Image
          src="/logo/logo.png"
          alt="Saanidhya Builders"
          width={56}
          height={56}
          className="w-full h-full object-contain p-1"
          loading="lazy"
        />
      </div>
      <div>
        <p className="font-playfair font-bold text-navy text-base">{author}</p>
        <p className="font-montserrat text-sm" style={{ color: 'rgba(11,15,59,.55)' }}>
          Expert construction team · {date} · {readingTime}
        </p>
      </div>
    </div>
  )
}
