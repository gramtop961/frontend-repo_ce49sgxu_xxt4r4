import { Rocket, Zap, Palette } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast",
    desc: "Instant dev server, hot reloads, and a tiny footprint.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Modern",
    desc: "ES modules, JSX, and a mature component architecture.",
    color: "from-amber-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Beautiful",
    desc: "Ship polished UIs quickly with Tailwind utilities.",
    color: "from-cyan-500 to-emerald-500",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc, color }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow`}> 
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
