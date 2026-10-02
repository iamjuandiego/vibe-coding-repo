import { Link } from "react-router-dom";
import { socialLinks } from "../data/social";

interface FooterProps {
  withHomeLink?: boolean;
}

export default function Footer({ withHomeLink = false }: FooterProps): JSX.Element {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-white/90">iamjuandiego</p>
          <p className="text-xs text-white/55">
            2020 - 2026 © iamjuandiego v2.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {withHomeLink && (
            <Link to="/" className="text-sm text-accent transition hover:text-accentSoft">
              Back to Home
            </Link>
          )}
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 transition hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
