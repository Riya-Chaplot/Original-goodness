import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail } from "lucide-react";

import zenCake from "@/assets/images/cake-zen-honey-vanilla.png";
import lockedInCake from "@/assets/images/cake-locked-in-pistachio-elaichi.png";
import chargedCake from "@/assets/images/cake-charged-dark-chocolate.png";
import cakeWithBenefitsRight from "@/assets/images/cake-with-benefits-right.png";

const products = [
  {
    id: "01",
    name: "ZEN MODE",
    flavor: "Honey Vanilla",
    ingredients: "Ashwagandha + Saffron",
    line: "Soft bite. Quiet mind.",
    desc: "Find your calm, without slowing down.",
    accent: "--og-honey",
    image: zenCake,
  },
  {
    id: "02",
    name: "LOCKED IN",
    flavor: "Pistachio Elaichi",
    ingredients: "Spirulina + Moringa",
    line: "Sharp mind. No crash.",
    desc: "Focus that doesn’t fade.",
    accent: "--og-pistachio",
    image: lockedInCake,
  },
  {
    id: "03",
    name: "CHARGED",
    flavor: "Dark Chocolate Truffle",
    ingredients: "Shilajeet",
    line: "Energy that lasts. Not spikes.",
    desc: "Deep, sustained energy built for long days.",
    accent: "--og-cocoa",
    image: chargedCake,
  },
] as const;

function BrandMark() {
  return (
    <div className="flex items-center gap-3" data-testid="brand-mark">
      <div
        className="grid h-10 w-10 place-items-center rounded-2xl border"
        style={{
          background: "rgba(255,255,255,.55)",
          borderColor: "hsl(var(--border))",
          boxShadow: "0 18px 60px -45px hsl(var(--foreground) / .45)",
        }}
        data-testid="logo-mark"
      >
        <span className="og-display text-[15px] font-black tracking-[-0.08em]">
          OG
        </span>
      </div>
      <div className="leading-tight" data-testid="brand-name">
        <div className="og-display text-sm font-semibold">OG</div>
        <div className="text-xs text-muted-foreground">
          <span className="font-bold">O</span>riginal <span className="font-bold">G</span>oodness
        </div>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur" data-testid="nav">
      <div className="og-container flex h-16 items-center justify-between">
        <BrandMark />

        <div className="hidden items-center gap-7 text-sm sm:flex" data-testid="nav-links">
          <a href="#supercakes" className="hover:opacity-70" data-testid="link-supercakes">
            Supercakes
          </a>
          <a href="#why-us" className="hover:opacity-70" data-testid="link-why-us">
            Why us
          </a>
          <a href="#early-access" className="hover:opacity-70" data-testid="link-early-access">
            Early access
          </a>
        </div>

        <a
          href="#early-access"
          className="og-button-primary"
          data-testid="button-join-first-drop"
          style={{color: "white",padding:"12px 12px"}}
        >
          Join the first drop 
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="og-noise relative overflow-hidden bg-[#fff2e2]"
      data-testid="section-hero"
      style={{background: "rgb(127, 39, 255)"}}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(255, 180, 120, .45), transparent 55%), radial-gradient(700px 400px at 90% 30%, rgba(170, 255, 200, .38), transparent 50%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/35 via-lime-300/35 to-emerald-400/35 blur-3xl"
        animate={{ y: [0, 22, 0], rotate: [0, 6, -4, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-8 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/28 via-orange-300/28 to-amber-400/28 blur-3xl"
        animate={{ y: [0, -18, 0], rotate: [0, -5, 3, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="og-container relative min-h-[92vh] py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-left lg:col-span-7 lg:mx-0"
          >
          <div className="og-kicker text-muted-foreground" data-testid="text-hero-kicker" style={{color:"rgb(255,255,0)"}}>
            Premium functional indulgence
          </div>

          <h1
            className="og-display mt-4 text-[44px] font-black leading-[0.9] tracking-[-0.1em] text-foreground sm:text-[76px] md:text-[96px]"
            data-testid="text-hero-headline"
            style={{color:"rgb(255,255,0)"}}
          >
            NOT YOUR BASIC CAKE.
          </h1>

          <p
            className="mt-6 mx-auto max-w-2xl text-balance text-lg font-semibold text-foreground/90 sm:text-2xl"
            data-testid="text-hero-subheading"
          >
            For people who don&apos;t do basic.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" data-testid="hero-cta">
            <a
              href="#early-access"
              className="og-button-primary"
              data-testid="button-join-early-access"
              style={{color: "white",padding:"12px 12px"}}
              
            >
              Join Early Access 
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3" data-testid="hero-pills">
            <span className="og-pill text-sm sm:text-base" data-testid="pill-no-refined-flour">
              No refined flour 🥖🚫
            </span>
            <span className="og-pill text-sm sm:text-base" data-testid="pill-no-artificial-flavors">
              No artificial flavors 🎨🚫
            </span>
            <span className="og-pill text-sm sm:text-base" data-testid="pill-no-additives">
              No unnecessary additives 🧪🚫
            </span>
            <span className="og-pill text-sm sm:text-base" data-testid="pill-no-eggs">
              No eggs 🥚🚫
            </span>
            <span className="og-pill text-sm sm:text-base" data-testid="pill-no-sugar">
              No sugar 🍬🚫
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2" data-testid="hero-quirky-graphics">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="og-card relative overflow-hidden rounded-3xl p-6 sm:p-8 text-left min-h-[220px]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400/45 to-orange-300/45 blur-3xl" />
              <div className="og-kicker text-[11px] sm:text-xs uppercase tracking-[0.28em] text-foreground/80">
                OUTSIDE
              </div>
              <div className="mt-3 og-display text-xl sm:text-2xl md:text-3xl font-black tracking-[-0.08em]">
                LOOKS LIKE A
                <br className="hidden sm:block" /> CHEAT DAY. 🎉🍰
              </div>
              <p className="mt-4 text-sm sm:text-base font-semibold text-foreground/90">
                Big frosting, loud layers, zero shy vibes. Cakes that look like a full-blown
                celebration even when it&apos;s just a Tuesday.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="og-card relative overflow-hidden rounded-3xl p-6 sm:p-8 text-left min-h-[220px]"
            >
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-400/45 to-lime-300/45 blur-3xl" />
              <div className="og-kicker text-[11px] sm:text-xs uppercase tracking-[0.28em] text-foreground/80">
                INSIDE
              </div>
              <div className="mt-3 og-display text-xl sm:text-2xl md:text-3xl font-black tracking-[-0.08em]">
                HERB-POWERED
                <br className="hidden sm:block" /> FUNCTIONAL FUEL. 🌿⚡️
              </div>
              <p className="mt-4 text-sm sm:text-base font-semibold text-foreground/90">
                Ashwagandha for calm focus, shilajeet for deep, steady energy, spirulina and
                moringa for clean, green support — stacked into every slice so dessert actually
                does something for you.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground/75">
                <span className="rounded-full bg-background/70 px-3 py-1">ASHWAGANDHA</span>
                <span className="rounded-full bg-background/70 px-3 py-1">SHILAJEET</span>
                <span className="rounded-full bg-background/70 px-3 py-1">SPIRULINA</span>
                <span className="rounded-full bg-background/70 px-3 py-1">MORINGA</span>
              </div>
            </motion.div>
          </div>
          </motion.div>

          {/* empty right grid column reserved for hero image on large screens */}
          <div className="hidden lg:col-span-5 lg:block" />
        </div>
      </div>

      {/* Mobile hero image below text */}
      <div className="mt-6 px-6 pb-10 lg:hidden">
        <img
          src={cakeWithBenefitsRight}
          alt="Cake with benefits hero visual"
          className="mx-auto w-full max-w-md rounded-[32px] object-contain"
          loading="eager"
        />
      </div>

      {/* Fixed right-side hero image on large screens */}
      <div className="pointer-events-none absolute inset-y-16 right-0 hidden min-w-[280px] lg:flex lg:w-[32%] lg:items-center lg:justify-end">
        <img
          src={cakeWithBenefitsRight}
          alt="Cake with benefits hero visual"
          className="max-h-full w-auto object-contain"
          loading="eager"
          style={{border:"aqua",borderStyle:"dashed",borderRadius:"44px"}}
        />
      </div>
    </section>
  );
}

function Supercakes() {
  return (
    <section id="supercakes" className="og-container py-20" data-testid="section-supercakes">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="og-kicker text-muted-foreground" data-testid="text-supercakes-kicker">
            Category
          </div>
          <h2 className="og-display mt-3 text-4xl font-black tracking-[-0.06em] sm:text-6xl" data-testid="text-supercakes-title">
            SUPERCAKES
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground" data-testid="text-supercakes-subtext">
            Three moods. Three flavors. Zero basics.
          </p>
        </div>
      </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3" data-testid="grid-products">
        {products.map((p) => (
          <article
            key={p.id}
            className="og-card og-hover-raise group rounded-[32px] p-5"
            data-testid={`card-product-${p.id}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="og-kicker text-muted-foreground" data-testid={`text-product-id-${p.id}`}>
                  {p.id}
                </div>
                <div
                  className="og-display mt-2 text-3xl font-black tracking-[-0.06em] whitespace-nowrap"
                  data-testid={`text-product-name-${p.id}`}
                >
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-product-flavor-${p.id}`}>
                  {p.flavor}
                </div>
              </div>

              <span
                className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  background: "rgba(255,255,255,.55)",
                  borderColor: "hsl(var(--border))",
                }}
                data-testid={`badge-product-ingredients-${p.id}`}
              >
                {p.ingredients}
              </span>
            </div>

          <div className="mt-4 overflow-hidden rounded-3xl">
            <img
              src={p.image}
              alt={`${p.flavor} cake`}
              className="og-product-img block h-auto w-full"
              data-testid={`img-product-${p.id}`}
              loading="lazy"
            />
          </div>

            <div className="mt-4" data-testid={`block-product-copy-${p.id}`}>
              <div className="text-sm font-semibold" data-testid={`text-product-line-${p.id}`}>
                {p.line}
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid={`text-product-desc-${p.id}`}>
                {p.desc}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold" data-testid={`text-product-price-${p.id}`}>
                ₹50
              </span>

              <a
                href="#early-access"
                className="text-sm font-semibold underline underline-offset-4 opacity-90 transition group-hover:opacity-100"
                data-testid={`link-product-cta-${p.id}`}
              >
                Get priority access
              </a>
{/* 
              <span
                className="inline-flex h-9 items-center rounded-full px-3 text-xs font-semibold"
                style={{
                  background: `hsl(var(${p.accent}) / .15)`,
                  color: "hsl(var(--foreground))",
                }}
                data-testid={`badge-product-accent-${p.id}`}
              >
                Mood-led
              </span> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { title: "Functional ingredients", desc: "Adaptogens & botanicals, not buzzwords." },
    { title: "Craveable flavors", desc: "Dessert-first taste. Smart-second build." },
    { title: "No jittery energy", desc: "Sustained lift — without spikes." },
    { title: "No compromise", desc: "No refined flour. No artificial flavors." },
  ] as const;

  return (
    <section
      id="why-us"
      className="py-20"
      data-testid="section-why-us"
      style={{ backgroundColor: "rgb(127, 39, 255)" }}
    >
      <div className="og-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <div
              className="og-kicker text-muted-foreground"
              data-testid="text-why-us-kicker"
              style={{ color: "rgb(255, 255, 0)" }}
            >
              Why us
            </div>
            <h2
              className="og-display mt-3 text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl"
              data-testid="text-why-us-title"
            >
              Your snacks should
              <br />
              keep up with your life.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p
              className="max-w-xl text-muted-foreground"
              data-testid="text-why-us-subtext"
              style={{ color: "rgb(255, 255, 0)" }}
            >
              No refined flour. No artificial flavors. No unnecessary additives. Just intelligent
              indulgence.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2" data-testid="grid-why-us">
          {items.map((it) => (
            <div
              key={it.title}
              className="og-card rounded-[28px] p-6"
              data-testid={`card-why-us-${it.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div
                className="og-display text-2xl font-black tracking-[-0.05em]"
                data-testid={`text-why-us-item-title-${it.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {it.title}
              </div>
              <p
                className="mt-2 text-sm text-muted-foreground"
                data-testid={`text-why-us-item-desc-${it.title.replace(/\s+/g, "-").toLowerCase()}`}
                style={{ color: "rgb(255, 255, 0)" }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section id="early-access" className="og-container py-20" data-testid="section-early-access">
      <div className="og-card og-glow og-noise rounded-[36px] p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="og-kicker text-muted-foreground" data-testid="text-early-access-kicker">
              Early access
            </div>
            <h2
              className="og-display mt-3 text-4xl font-black tracking-[-0.06em] sm:text-6xl"
              data-testid="text-early-access-title"
            >
              First batch
              <span className="og-serif italic"> won’t</span> last.
            </h2>
            <p className="mt-3 text-muted-foreground" data-testid="text-early-access-subtext">
              Join the list for priority access.
            </p>
          </div>

          <form
            className="lg:col-span-6"
            onSubmit={(e) => e.preventDefault()}
            data-testid="form-early-access"
          >
            <div className="grid gap-3">
              <label className="text-sm font-semibold" htmlFor="email" data-testid="label-email">
                Email (optional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@domain.com"
                className="h-12 w-full rounded-2xl border bg-white/60 px-4 text-sm outline-none transition focus:ring-2"
                style={{ borderColor: "hsl(var(--border))", boxShadow: "0 12px 40px -35px hsl(var(--foreground) / .55)" }}
                data-testid="input-email"
              />

              <label className="mt-2 text-sm font-semibold" htmlFor="phone" data-testid="label-phone">
                Phone 
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 …"
                className="h-12 w-full rounded-2xl border bg-white/60 px-4 text-sm outline-none transition focus:ring-2"
                style={{ borderColor: "hsl(var(--border))" }}
                data-testid="input-phone"
              />

              <button type="submit" className="og-button-primary mt-3" data-testid="button-get-priority-access" style={{color: "white",padding:"12px 12px"}}>
                Get Priority Access
              </button>

              <p className="text-xs text-muted-foreground" data-testid="text-form-disclaimer">
                No spam. Just drop alerts.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t" data-testid="footer">
      <div className="og-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div data-testid="footer-brand">
          <div className="og-display text-sm font-semibold">OG</div>
          <div className="text-xs text-muted-foreground">
            <span className="font-bold">O</span>riginal <span className="font-bold">G</span>oodness
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm" data-testid="footer-links">
          {/* <a href="#" className="hover:opacity-70" data-testid="link-instagram">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a> */}
          <a href="mailto:riyachaplot787@gmail.com" className="hover:opacity-70" data-testid="link-email">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-xs text-muted-foreground" data-testid="text-copyright">
          © {new Date().getFullYear()} OG — Original Goodness
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div data-testid="page-home">
      <TopNav />
      <Hero />
      <Supercakes />
      <WhyUs />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
