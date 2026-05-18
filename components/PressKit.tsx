import Image from "next/image";
import Link from "next/link";
import {
  bio,
  houseArtists,
  houseSets,
  links,
  psyArtists,
  psySets,
} from "@/lib/presskit-data";
import { SetCard } from "./SetCard";

export function PressKit() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[50vh] w-[50vw] rounded-full bg-fuchsia-600/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vw] rounded-full bg-amber-500/5 blur-[90px]" />
      </div>

      <header className="border-b border-zinc-800/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
            Press kit · DJ
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Tiramisu</h1>
          <p className="max-w-2xl text-xl font-medium text-zinc-200 sm:text-2xl">
            {bio.tagline}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400">{bio.body}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-zinc-300">
              {bio.genres}
            </span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-zinc-400">
              📍 {links.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={links.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              SoundCloud
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400"
            >
              {links.instagramHandle}
            </a>
            <a
              href="#contato"
              className="rounded-full border border-violet-500/40 px-5 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400"
            >
              Contato
            </a>
          </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xs justify-center lg:max-w-sm">
            <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl" aria-hidden />
            <Image
              src={links.photo}
              alt="Tiramisu — DJ"
              width={420}
              height={560}
              priority
              unoptimized
              key={links.photoVersion}
              className="relative h-auto w-full max-h-[min(70vh,520px)] object-contain drop-shadow-[0_20px_50px_rgba(139,92,246,0.35)]"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <section id="prog-psy" className="scroll-mt-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                Foco principal
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Prog Dark · Fullon · Psytrance
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-500">
                Viagens noturnas, progressão contínua e transe na pista — do dark groove
                ao fullon.
              </p>
            </div>
            <Link
              href="#house"
              className="w-fit rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200"
            >
              House ↓
            </Link>
          </div>

          <ul className="flex flex-wrap gap-2 pb-8">
            {psyArtists.map((a) => (
              <li
                key={a}
                className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200/90"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-10">
            {psySets.map((set) => (
              <SetCard key={set.id} set={set} variant="psy" />
            ))}
          </div>
        </section>

        <section
          id="house"
          className="mt-24 scroll-mt-8 border-t border-zinc-800/80 pt-16"
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/90">
              Warm up
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
              House · Groove
            </h2>
            <p className="mt-2 max-w-lg text-sm text-zinc-500">
              Abertura leve — tech house e bass house para aquecer sem pressa.
            </p>
          </div>

          <ul className="mb-8 flex flex-wrap gap-2">
            {houseArtists.map((a) => (
              <li
                key={a}
                className="rounded-md bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200/80"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="max-w-2xl">
            {houseSets.map((set) => (
              <SetCard key={set.id} set={set} variant="house" />
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="mt-24 scroll-mt-8 border-t border-zinc-800/80 pt-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Booking
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Contato
          </h2>
          <p className="mt-2 max-w-lg text-sm text-zinc-500">
            Sets, festas e parcerias — fala comigo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={links.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              WhatsApp · {links.whatsapp}
            </a>
            <a
              href={links.emailHref}
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-400"
            >
              {links.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-zinc-500 sm:px-6">
          <p className="text-lg font-semibold text-zinc-300">Tiramisu</p>
          <p>
            {bio.genres} · {links.location}
          </p>
          <div className="flex gap-4">
            <a
              href={links.soundcloud}
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>
            <a
              href={links.instagram}
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={links.whatsappHref}
              className="text-emerald-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href={links.emailHref} className="text-zinc-400 hover:underline">
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
