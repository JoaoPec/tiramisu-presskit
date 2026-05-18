import Image from "next/image";
import Link from "next/link";
import type { SetItem } from "@/lib/presskit-data";
import { SoundCloudEmbed } from "./SoundCloudEmbed";
import { YouTubeEmbed, youtubeIdFromUrl } from "./YouTubeEmbed";

type Variant = "house" | "psy";

export function SetCard({ set, variant }: { set: SetItem; variant: Variant }) {
  const isPsy = variant === "psy";
  const accent = isPsy
    ? "border-violet-500/30 hover:border-violet-400/50"
    : "border-amber-500/25 hover:border-amber-400/40";
  const badge = isPsy
    ? "bg-violet-500/15 text-violet-200"
    : "bg-amber-500/15 text-amber-200";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-zinc-950/80 backdrop-blur-sm transition-colors ${accent} ${isPsy ? "lg:flex-row" : ""}`}
    >
      <div className={`relative ${isPsy ? "lg:w-2/5" : ""} aspect-square w-full shrink-0 sm:aspect-[4/3]`}>
        {set.cover ? (
          <Image
            src={set.cover}
            alt={`Capa: ${set.title}`}
            fill
            className="object-cover"
            sizes={isPsy ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 768px) 100vw, 50vw"}
          />
        ) : (
          <div
            className={`flex h-full w-full items-end p-6 ${
              isPsy
                ? "bg-gradient-to-br from-violet-950 via-fuchsia-950 to-black"
                : "bg-gradient-to-br from-amber-950 to-zinc-950"
            }`}
          >
            <span className="text-4xl font-bold tracking-tight text-white/90">{set.title}</span>
          </div>
        )}
        {set.bpm && (
          <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${badge}`}>
            {set.bpm}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col gap-4 p-5 sm:p-6 ${isPsy ? "lg:justify-center" : ""}`}>
        <div>
          {set.subtitle && (
            <p className={`text-xs font-semibold uppercase tracking-widest ${isPsy ? "text-violet-400" : "text-amber-400"}`}>
              {set.subtitle}
            </p>
          )}
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{set.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{set.description}</p>
        </div>

        <div className="mt-auto space-y-3">
          {set.embed === "soundcloud" && <SoundCloudEmbed href={set.href} />}
          {set.embed === "youtube" && (
            <YouTubeEmbed videoId={youtubeIdFromUrl(set.href)} start={set.youtubeStart} />
          )}
          <Link
            href={set.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex text-sm font-medium underline-offset-4 hover:underline ${isPsy ? "text-violet-300" : "text-amber-300"}`}
          >
            Abrir set →
          </Link>
        </div>
      </div>
    </article>
  );
}
