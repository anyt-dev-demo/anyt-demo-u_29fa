import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 sm:px-8">
        <div className="flex items-center gap-4">
          <Image
            className="hidden dark:block"
            src="/images/logo/logo-dark.svg"
            alt="Mission Control"
            width={200}
            height={40}
            priority
          />
          <Image
            className="block dark:hidden"
            src="/images/logo/logo.svg"
            alt="Mission Control"
            width={200}
            height={40}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Mission Control for AI-Assisted Software Development
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            The first task management system built for coding agents and human
            developers. Track tasks, attempts, and progress across human and AI
            team members.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://anyt.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-8 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started with Anyt
          </a>
        </div>
      </main>
    </div>
  );
}
