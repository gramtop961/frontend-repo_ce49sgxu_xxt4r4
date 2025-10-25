export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-black/10 bg-white/70">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-gray-500">
        <p>
          © {year} Hello World Starter · Built with React, Vite, and Tailwind
        </p>
      </div>
    </footer>
  );
}
