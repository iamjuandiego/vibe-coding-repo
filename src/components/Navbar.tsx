import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  showBackHome?: boolean;
}

const sectionLinks = ["about", "projects", "experience", "contact"] as const;

export default function Navbar({ showBackHome = false }: NavbarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
              {sectionLinks.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hidden text-xs uppercase tracking-wide text-white/70 transition hover:text-accent md:block"
                >
                  {id}
                </a>
              ))}
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-accent hover:text-accent md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <span className="relative block h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 block h-0.5 w-full bg-current transition ${
                      menuOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[6px] block h-0.5 w-full bg-current transition ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[12px] block h-0.5 w-full bg-current transition ${
                      menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </>
          )}
        </nav>
      </div>

      {!showBackHome && menuOpen ? (
        <div className="border-t border-white/10 bg-obsidian/95 px-6 py-4 backdrop-blur-2xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1">
            {sectionLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl px-3 py-3 text-sm uppercase tracking-wide text-white/80 transition hover:bg-white/5 hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {id}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
