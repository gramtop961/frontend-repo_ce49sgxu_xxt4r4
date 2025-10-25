import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">Hello World</h1>
            <p className="text-xs text-gray-500">A tiny starter built with React + Tailwind</p>
          </div>
        </div>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          Learn React →
        </a>
      </div>
    </header>
  );
}
