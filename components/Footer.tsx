import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
