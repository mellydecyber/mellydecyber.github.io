import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="px-5 py-8">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-text-bright font-medium">{profile.name}</span>
          . Design And Built With Love. ❤️
        </div>
        <div className="flex items-center justify-center gap-4">
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
