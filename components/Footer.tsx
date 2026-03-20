import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-text-bright font-medium">{profile.name}</span>
          . Built with Next.js & Tailwind CSS.
        </div>
        <div className="flex items-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
