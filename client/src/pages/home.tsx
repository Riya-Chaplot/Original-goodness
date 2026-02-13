import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail } from "lucide-react";

import zenCake from "@/assets/images/cake-zen-honey-vanilla.png";
import lockedInCake from "@/assets/images/cake-locked-in-pistachio-elaichi.png";
import chargedCake from "@/assets/images/cake-charged-dark-chocolate.png";

const products = [
  {
    id: "01",
    name: "ZEN MODE",
    flavor: "Honey Vanilla",
    ingredients: "Ashwagandha + Saffron",
    line: "Soft bite. Quiet mind.",
    desc: "Made to take the edge off — without taking you off your game.",
    accent: "--og-honey",
    image: zenCake,
  },
  {
    id: "02",
    name: "LOCKED IN",
    flavor: "Pistachio Elaichi",
    ingredients: "Spirulina + Moringa",
    line: "Sharp mind. No crash.",
    desc: "Clean cognitive fuel disguised as dessert.",
    accent: "--og-pistachio",
    image: lockedInCake,
  },
  {
    id: "03",
    name: "CHARGED",
    flavor: "Dark Chocolate Truffle",
    ingredients: "Mineral adaptogens",
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
        >
          Join the first drop <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="og-noise relative" data-testid="section-hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(0,0,0,.08), transparent 55%), radial-gradient(700px 400px at 90% 30%, rgba(0,0,0,.06), transparent 50%)",
        }}
      />

      <div className="og-container relative grid min-h-[92vh] items-center gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="og-kicker text-muted-foreground" data-testid="text-hero-kicker">
            Premium functional indulgence
          </div>

          <h1
            className="og-display mt-4 text-[44px] font-black leading-[0.94] tracking-[-0.07em] sm:text-[72px]"
            data-testid="text-hero-headline"
          >
            NOT YOUR BASIC CAKE.
          </h1>

          <p className="mt-5 max-w-xl text-lg font-semibold text-foreground sm:text-xl" data-testid="text-hero-subheading">
            Indulgent on the outside. Intelligent on the inside.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-testid="hero-cta">
            <a
              href="#early-access"
              className="og-button-primary"
              data-testid="button-join-early-access"
            >
              Join Early Access <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" data-testid="hero-pills">
            <span className="og-pill" data-testid="pill-no-refined-flour">
              No refined flour
            </span>
            <span className="og-pill" data-testid="pill-no-artificial-flavors">
              No artificial flavors
            </span>
            <span className="og-pill" data-testid="pill-no-additives">
              No unnecessary additives
            </span>
          </div>
        </div>

        <div className="lg:col-span-6" data-testid="hero-products">
          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="og-card og-hover-raise rounded-[28px] p-4 sm:col-span-2"
              data-testid="card-hero-product-01"
            >
              <div className="flex items-center justify-between">
                <div className="og-kicker text-muted-foreground" data-testid="text-hero-product-01-id">
                  01
                </div>
                <div className="text-xs font-semibold" data-testid="text-hero-product-01-state">
                  Zen
                </div>
              </div>

              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <div
                    className="og-display text-2xl font-black tracking-[-0.06em]"
                    data-testid="text-hero-product-01-name"
                  >
                    ZEN MODE
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="text-hero-product-01-flavor">
                    Honey Vanilla
                  </div>
                </div>

                <span
                  className="inline-flex h-9 items-center rounded-full px-3 text-xs font-semibold"
                  style={{
                    background: "rgba(0,0,0,.08)",
                  }}
                  data-testid="badge-hero-product-01-ingredients"
                >
                  Ashwagandha + Saffron
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-12">
                <div className="sm:col-span-5">
                  <p className="text-sm text-muted-foreground" data-testid="text-hero-product-01-line">
                    Soft bite. Quiet mind.
                  </p>
                </div>
                <div className="sm:col-span-7">
                  <img
                    src={zenCake}
                    alt="Honey vanilla cake"
                    className="og-product-img h-44 w-full object-cover"
                    data-testid="img-hero-product-01"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="og-card og-hover-raise rounded-[28px] p-4"
              data-testid="card-hero-product-02"
            >
              <div className="flex items-center justify-between">
                <div className="og-kicker text-muted-foreground" data-testid="text-hero-product-02-id">
                  02
                </div>
                <div className="text-xs font-semibold" data-testid="text-hero-product-02-state">
                  Focus
                </div>
              </div>

              <div className="mt-2">
                <div
                  className="og-display text-2xl font-black tracking-[-0.06em]"
                  data-testid="text-hero-product-02-name"
                >
                  LOCKED IN
                </div>
                <div className="text-sm text-muted-foreground" data-testid="text-hero-product-02-flavor">
                  Pistachio Elaichi
                </div>
              </div>

              <img
                src={lockedInCake}
                alt="Pistachio elaichi cake"
                className="og-product-img mt-4 h-40 w-full object-cover"
                data-testid="img-hero-product-02"
                loading="eager"
              />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,.55)" }}
                  data-testid="badge-hero-product-02-ingredients"
                >
                  Spirulina + Moringa
                </span>
                <span className="text-xs text-muted-foreground" data-testid="text-hero-product-02-line">
                  Sharp mind. No crash.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="og-card og-hover-raise rounded-[28px] p-4"
              data-testid="card-hero-product-03"
            >
              <div className="flex items-center justify-between">
                <div className="og-kicker text-muted-foreground" data-testid="text-hero-product-03-id">
                  03
                </div>
                <div className="text-xs font-semibold" data-testid="text-hero-product-03-state">
                  Charge
                </div>
              </div>

              <div className="mt-2">
                <div
                  className="og-display text-2xl font-black tracking-[-0.06em]"
                  data-testid="text-hero-product-03-name"
                >
                  CHARGED
                </div>
                <div className="text-sm text-muted-foreground" data-testid="text-hero-product-03-flavor">
                  Dark Chocolate Truffle
                </div>
              </div>

              <img
                src={chargedCake}
                alt="Dark chocolate truffle cake"
                className="og-product-img mt-4 h-40 w-full object-cover"
                data-testid="img-hero-product-03"
                loading="eager"
              />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,.55)" }}
                  data-testid="badge-hero-product-03-ingredients"
                >
                  Mineral adaptogens
                </span>
                <span className="text-xs text-muted-foreground" data-testid="text-hero-product-03-line">
                  Energy that lasts.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
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
                  className="og-display mt-2 text-3xl font-black tracking-[-0.06em]"
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

            <div className="mt-4">
              <img
                src={p.image}
                alt={`${p.flavor} cake`}
                className="og-product-img h-44 w-full object-cover"
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

            <div className="mt-5 flex items-center justify-between">
              <a
                href="#early-access"
                className="text-sm font-semibold underline underline-offset-4 opacity-90 transition group-hover:opacity-100"
                data-testid={`link-product-cta-${p.id}`}
              >
                Get priority access
              </a>

              <span
                className="inline-flex h-9 items-center rounded-full px-3 text-xs font-semibold"
                style={{
                  background: `hsl(var(${p.accent}) / .15)`,
                  color: "hsl(var(--foreground))",
                }}
                data-testid={`badge-product-accent-${p.id}`}
              >
                Mood-led
              </span>
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
    <section id="why-us" className="og-container py-20" data-testid="section-why-us">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <div className="og-kicker text-muted-foreground" data-testid="text-why-us-kicker">
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
          <p className="max-w-xl text-muted-foreground" data-testid="text-why-us-subtext">
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
            <div className="og-display text-2xl font-black tracking-[-0.05em]" data-testid={`text-why-us-item-title-${it.title.replace(/\s+/g, "-").toLowerCase()}`}>
              {it.title}
            </div>
            <p className="mt-2 text-sm text-muted-foreground" data-testid={`text-why-us-item-desc-${it.title.replace(/\s+/g, "-").toLowerCase()}`}>
              {it.desc}
            </p>
          </div>
        ))}
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
                Email
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
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 …"
                className="h-12 w-full rounded-2xl border bg-white/60 px-4 text-sm outline-none transition focus:ring-2"
                style={{ borderColor: "hsl(var(--border))" }}
                data-testid="input-phone"
              />

              <button type="submit" className="og-button-primary mt-3" data-testid="button-get-priority-access">
                Get Priority Access <ArrowRight className="h-4 w-4" />
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
          <a href="#" className="hover:opacity-70" data-testid="link-instagram">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="mailto:hello@originalgoodness.co" className="hover:opacity-70" data-testid="link-email">
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
