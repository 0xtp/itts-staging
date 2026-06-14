import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-magenta ring-1 ring-white/15">
                <span className="font-display text-sm font-black text-white">IT</span>
              </span>
              <span className="font-display text-lg font-bold">ITTS</span>
            </div>
            <p className="mt-6 max-w-md text-balance text-lg text-muted-foreground">
              Engineering technology that accelerates business growth — from custom platforms to AI, cloud and Web3.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Company"
              links={[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/features", label: "Features" },
                { to: "/contact", label: "Contact" },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { to: "/services", label: "Custom Software" },
                { to: "/services", label: "AI Solutions" },
                { to: "/services", label: "Cloud & DevOps" },
                { to: "/services", label: "Blockchain" },
              ]}
            />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="text-foreground/90">hello@itts.com</li>
                <li className="text-foreground/90">+1 (555) 010-2025</li>
                <li className="text-muted-foreground">Mon–Fri · 24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} I Trust Techno Solutions. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: "/" | "/about" | "/features" | "/services" | "/contact"; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-foreground/85 hover:text-foreground transition">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
