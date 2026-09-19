import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub, FaDiscord, FaRedditAlien } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-slate-600 bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row-reverse sm:items-center sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-cyan-400 sm:text-3xl">MovieExplorer</h2>
            <p className="text-xs tracking-[0.25em] text-slate-400 sm:text-sm">Search | Explore | View</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaXTwitter />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaGithub />
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaDiscord />
            </a>

            <a
              href="https://reddit.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-105" >
              <FaRedditAlien />
            </a>
          </div>
        </div>
      </div>
      <p className="text-md text-slate-400 text-center py-5 tracking-wider">
        © 2026 <span className="font-semibold text-slate-200">MovieExplorer</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;