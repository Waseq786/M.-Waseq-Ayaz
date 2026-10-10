export default function Footer() {
  return (
    <footer className="bg-ink py-8 border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-parchment/40">
        <p>© {new Date().getFullYear()} Muhammad Waseq Ayaz. All rights reserved.</p>
        <p>Rawalpindi, Pakistan</p>
      </div>
    </footer>
  );
}
