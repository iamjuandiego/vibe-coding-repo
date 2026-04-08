import { Link } from "react-router-dom";

interface NavbarProps {
  showBackHome?: boolean;
}

export default function Navbar({ showBackHome = false }: NavbarProps): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold tracking-[0.1em] text-white">
          iamjuandiego
        </Link>
        <nav className="flex items-center gap-3">
          {showBackHome ? (
            <Link
              to="/"
              className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition hover:border-accent hover:text-accent"
            >
              Back to Home
            </Link>
          ) : (
            <>
              {["about", "projects", "experience", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hidden text-xs uppercase tracking-wide text-white/70 transition hover:text-accent md:block"
                >
                  {id}
                </a>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
