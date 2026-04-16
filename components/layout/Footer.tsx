import Link from "next/link";
import GoldDivider from "../ui/GoldDivider";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] relative pt-20 text-ash text-[13px] font-body flex flex-col overflow-hidden">
      {/* Subtle gold noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23C9A44C'/%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <GoldDivider width="100%" className="absolute top-0 opacity-20" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full flex-grow flex flex-col justify-center py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <div className="w-[3px] h-[30px] bg-gold mr-4" />
              <span className="font-display text-[28px] tracking-[0.55em] text-gold">
                THEKA
              </span>
            </Link>
            <p className="max-w-[240px] leading-relaxed">
              Where every pour tells a story of craft, heritage and ambition.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {["Insta", "X", "YT", "In"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  <span className="font-label text-[9px] uppercase tracking-wider">
                    {social}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label uppercase text-[11px] text-pure tracking-[0.2em] mb-2">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Our Story", href: "/about" },
                { name: "The Collection", href: "/products" },
                { name: "Experiences", href: "/events" },
                { name: "Store Locator", href: "/store-locator" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit group relative inline-flex"
                >
                  <span className="transition-colors group-hover:text-gold">
                    {link.name}
                  </span>
                  <span className="absolute left-0 bottom-0 h-[1px] bg-gold w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label uppercase text-[11px] text-pure tracking-[0.2em] mb-2">
              Portfolio
            </h4>
            <div className="flex flex-col gap-3">
              {[
                {
                  name: "Single Malt Whiskey",
                  href: "/products?category=whiskey",
                },
                {
                  name: "Pure Crystal Vodka",
                  href: "/products?category=vodka",
                },
                { name: "Estate Wines", href: "/products?category=wine" },
                { name: "Reserve Rum", href: "/products?category=rum" },
                { name: "Botanical Gin", href: "/products?category=gin" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit group relative inline-flex"
                >
                  <span className="transition-colors group-hover:text-gold">
                    {link.name}
                  </span>
                  <span className="absolute left-0 bottom-0 h-[1px] bg-gold w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label uppercase text-[11px] text-pure tracking-[0.2em] mb-2">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <p>
                THEKA Global Headquarters
                <br />
                Avenue des Champs-Élysées
                <br />
                75008 Paris, France
              </p>
              <br />
              <p className="hover:text-gold cursor-pointer transition-colors duration-300">
                concierge@thekaspirit.com
              </p>
              <p className="hover:text-gold cursor-pointer transition-colors duration-300">
                +33 1 23 45 67 89
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-border-dim/50 py-6 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full flex flex-col md:flex-row items-center justify-between gap-4 font-label text-[10px] uppercase tracking-wider text-ash/70 hover:*:text-ash transition-colors">
          <p>© 2025 THEKA. All rights reserved.</p>
          <p className="text-gold/80 mt-[-2px]">
            Drink Responsibly. Must be 21+.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-gold transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
