function getEmbedUrl(url: string): string {
  if (url.includes('youtube.com/watch')) return `https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}`
  if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`
  if (url.includes('vimeo.com/')) return `https://player.vimeo.com/video/${url.split('vimeo.com/')[1].split('?')[0]}`
  if (url.includes('loom.com/share/')) return `https://www.loom.com/embed/${url.split('loom.com/share/')[1].split('?')[0]}`
  return url
}

interface Props { title?: string; url: string; caption?: string }

export function VideoBlock({ title, url, caption }: Props) {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
      {title && <h2 className="text-section-title font-serif text-foreground mb-8 text-center text-balance">{title}</h2>}
      <div className="aspect-video rounded-2xl overflow-hidden border border-border">
        <iframe src={getEmbedUrl(url)} className="w-full h-full" allowFullScreen title={title || 'Video'} />
      </div>
      {caption && <p className="text-sm text-muted-foreground text-center mt-4 font-sans">{caption}</p>}
      </div>
    </section>
  )
}
