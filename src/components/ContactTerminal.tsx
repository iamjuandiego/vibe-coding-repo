import { FormEvent, useState } from "react";
import { socialLinks } from "../data/social";
import { useTerminalCommands } from "../hooks/useTerminalCommands";

export default function ContactTerminal(): JSX.Element {
  const { history, run, reset } = useTerminalCommands();
  const [value, setValue] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    run(value);
    setValue("");
  };

  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact</h2>
      <div className="glass mt-8 rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <p className="min-w-0 truncate text-xs uppercase tracking-wide text-accent">iamjuandiego terminal</p>
          <button
            onClick={reset}
            className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition hover:border-accent hover:text-accent"
          >
            reset
          </button>
        </div>
        <div className="max-h-56 overflow-auto break-words rounded-lg bg-black/40 p-3 text-sm">
          {history.map((item, idx) => (
            <div key={`${item.command}-${idx}`} className="mb-3">
              <p className="text-accent">$ {item.command}</p>
              <p className="text-white/80">{item.output}</p>
            </div>
          ))}
        </div>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Type: contact, email, linkedin, instagram, book"
            className="w-full min-w-0 rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          />
          <button className="shrink-0 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-black sm:self-auto">
            Run
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-4 text-sm sm:gap-5">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-white/75 hover:text-accent">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
