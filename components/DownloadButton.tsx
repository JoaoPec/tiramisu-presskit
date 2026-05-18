export function DownloadButton({
  href,
  filename,
  label,
  variant = "violet",
}: {
  href: string;
  filename: string;
  label: string;
  variant?: "violet" | "zinc";
}) {
  const styles =
    variant === "violet"
      ? "border-violet-500/30 text-violet-200 hover:border-violet-400/60 hover:bg-violet-500/10"
      : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50";

  return (
    <a
      href={href}
      download={filename}
      className={`inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-medium transition ${styles}`}
    >
      {label}
    </a>
  );
}
