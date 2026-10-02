import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-obsidian px-4 pt-28 text-white sm:px-6">
      <Navbar showBackHome />
      <div className="mx-auto max-w-3xl py-16 sm:py-24">
        <p className="text-xs uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-5 max-w-xl text-white/70">
          This route is not available. Use the navigation to return to the portfolio home page.
        </p>
        <Link to="/" className="mt-8 inline-block rounded-full border border-white/20 px-5 py-2 text-sm hover:border-accent hover:text-accent">
          Back to Home
        </Link>
      </div>
      <Footer withHomeLink />
    </main>
  );
}
