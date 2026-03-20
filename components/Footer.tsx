import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="text-[10px] text-text-dim">
          <span className="text-primary-dim">&gt;</span> {new Date().getFullYear()} {profile.name} // All systems nominal
        </div>
        <div className="flex gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-text-dim hover:text-primary transition-colors"
            >
              [{social.name}]
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
