function scEmbedUrl(trackUrl: string): string {
  const encoded = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23c084fc&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
}

export function SoundCloudEmbed({ href }: { href: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-violet-500/20 bg-black/40">
      <iframe
        title="SoundCloud player"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={scEmbedUrl(href)}
        className="block w-full"
      />
    </div>
  );
}
