export function YouTubeEmbed({ videoId, start }: { videoId: string; start?: number }) {
  const params = start ? `?start=${start}` : "";
  return (
    <div className="aspect-video overflow-hidden rounded-xl border border-amber-500/20 bg-black/40">
      <iframe
        title="YouTube player"
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}${params}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function youtubeIdFromUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return u.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}
