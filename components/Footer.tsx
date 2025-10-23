export function Footer() {
  return (
    <footer className="border-t border-brand-muted/40 bg-brand-light py-10 text-sm text-text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-gutter md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-brand-primary">Muscle & Strength Pyramids</p>
        <p>© {new Date().getFullYear()} Muscle & Strength Pyramids. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-brand-secondary">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-brand-secondary">
            Terms
          </a>
          <a href="#" className="transition hover:text-brand-secondary">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
