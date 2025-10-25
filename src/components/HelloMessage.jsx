export default function HelloMessage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent" />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          You made it here — nice!
        </p>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Hello, world!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          This minimal starter shows how to compose clean, reusable components. Edit the text, change the colors, or add your own flair — you're in control.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Explore Tailwind
          </a>
          <a
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Learn Vite
          </a>
        </div>
      </div>
    </section>
  );
}
