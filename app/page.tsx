import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const replaces = [
  {
    name: "Sales & CRM",
    category: "Sales team",
    replacesLabel: "Replaces HubSpot, Salesforce",
    description: "AI-scored leads, pipeline automation, and proposal generation — native, not bolted on.",
    color: "#ff7a59",
    bg: "#1a0f0a",
    border: "#3d1a0f",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#ff7a59" opacity="0.15" />
        <path d="M20 10C14.477 10 10 14.477 10 20s4.477 10 10 10 10-4.477 10-10S25.523 10 20 10zm0 16a6 6 0 110-12 6 6 0 010 12z" fill="#ff7a59" />
      </svg>
    ),
  },
  {
    name: "Quoting & CPQ",
    category: "Sales team",
    replacesLabel: "Replaces Quoter, PandaDoc",
    description: "Accurate quotes generated in seconds with AI pricing rules and bundling logic.",
    color: "#3b82f6",
    bg: "#0a0e1a",
    border: "#1e2d4f",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#3b82f6" opacity="0.15" />
        <rect x="12" y="11" width="16" height="18" rx="2" stroke="#3b82f6" strokeWidth="2" />
        <path d="M15 16h10M15 20h10M15 24h6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Service & PSA",
    category: "Service team",
    replacesLabel: "Replaces HaloPSA, ConnectWise",
    description: "Tickets, projects, and time tracking with AI triage that routes work before a human touches it.",
    color: "#a855f7",
    bg: "#120a1a",
    border: "#2d1a4f",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#a855f7" opacity="0.15" />
        <path d="M14 20l4 4 8-8" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Procurement",
    category: "Procurement team",
    replacesLabel: "Replaces manual POs & spreadsheets",
    description: "AI-driven supplier reordering, purchase order automation, and invoice matching.",
    color: "#f97316",
    bg: "#1a0f08",
    border: "#3d2410",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f97316" opacity="0.15" />
        <path d="M14 12h2a2 2 0 002 2h4a2 2 0 002-2h2a2 2 0 012 2v14a2 2 0 01-2 2H14a2 2 0 01-2-2V14a2 2 0 012-2z" stroke="#f97316" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "Warehouse & Fulfilment",
    category: "Warehouse team",
    replacesLabel: "Replaces Linnworks, Cin7",
    description: "Real-time inventory, orders, and fulfilment across every channel, in one view.",
    color: "#14b8a6",
    bg: "#0a1412",
    border: "#1a3d3a",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#14b8a6" opacity="0.15" />
        <rect x="11" y="14" width="18" height="12" rx="2" stroke="#14b8a6" strokeWidth="2" />
        <path d="M11 18h18" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M17 22h6" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Finance & Payments",
    category: "Finance team",
    replacesLabel: "Replaces Stripe + accounting sprawl",
    description: "Automated billing, reconciliation, and finance reporting — no exports, no double entry.",
    color: "#6366f1",
    bg: "#0c0a1a",
    border: "#221a4f",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#6366f1" opacity="0.15" />
        <path d="M19 14c-2.5.5-4 2-3.5 4 .5 2 3 2.5 4 3.5 1.5 1 1 3-1.5 3.5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12v2M20 26v2" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Storefront",
    category: "Sales team",
    replacesLabel: "Replaces Shopify, WooCommerce",
    description: "A branded B2B and B2C storefront wired directly into pricing, stock, and orders.",
    color: "#22c55e",
    bg: "#0a1410",
    border: "#1a3d22",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#22c55e" opacity="0.15" />
        <path d="M25 14s-.5-1.5-2-1.5c-1 0-2 .5-2 .5s-.5-2-2.5-2c-2.5 0-3.5 3-3.5 3L14 28h12l-1-14z" stroke="#22c55e" strokeWidth="1.5" />
        <circle cx="17" cy="29" r="1.5" fill="#22c55e" />
        <circle cx="23" cy="29" r="1.5" fill="#22c55e" />
      </svg>
    ),
  },
  {
    name: "Reporting & Insights",
    category: "Every team",
    replacesLabel: "Replaces Power BI, Tableau",
    description: "AI dashboards surface revenue, utilisation, and margin the moment they change.",
    color: "#f59e0b",
    bg: "#141008",
    border: "#3d2d0a",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f59e0b" opacity="0.15" />
        <rect x="12" y="22" width="4" height="6" rx="1" fill="#f59e0b" />
        <rect x="18" y="17" width="4" height="11" rx="1" fill="#f59e0b" opacity="0.7" />
        <rect x="24" y="12" width="4" height="16" rx="1" fill="#f59e0b" opacity="0.5" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "One Unified Data Layer",
    description:
      "There's nothing to sync because there's only one system. Every record — lead, quote, ticket, order, invoice — lives in one place, for every team.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3H7a3 3 0 01-3-3V7zM4 15a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3H7a3 3 0 01-3-3v-2z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Automation",
    description:
      "A quote turns into a job automatically. A ticket triages and routes itself. Stock reorders before you run out. AI runs the handoffs your team used to chase.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Reporting",
    description:
      "Built-in AI dashboards surfacing revenue, utilisation, and margin at a glance. Know which clients are most profitable before your morning standup.",
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "One Login. Every Team.",
    description:
      "Sales, service, procurement, warehouse, and finance all work from the same platform — no per-team logins, no per-team subscriptions to reconcile.",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "Procurement Made Easy",
    description:
      "AI watches stock levels and supplier lead times, then raises purchase orders and reconciles invoices before your warehouse team has to ask.",
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Client Self-Service",
    description:
      "Give clients a branded portal to view quotes, raise tickets, track orders, and pay invoices — reducing support volume and improving satisfaction.",
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Migrate your data",
    description:
      "Import contacts, tickets, inventory, and invoices from your old stack in one guided setup — no double entry.",
  },
  {
    number: "02",
    title: "Turn on your teams",
    description:
      "Switch on the workspaces your sales, service, procurement, warehouse, and finance teams each need, with AI automations pre-wired.",
  },
  {
    number: "03",
    title: "Retire your old stack",
    description:
      "Go live, onboard your team and clients, and cancel the point-solution subscriptions you no longer need.",
  },
];

const stats = [
  { value: "7+", label: "Point solutions replaced" },
  { value: "60%", label: "Reduction in manual data entry" },
  { value: "3×", label: "Faster quote-to-cash cycle" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            AI-powered · Built for IT Resellers &amp; MSPs
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            One platform.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Every team.
            </span>{" "}
            Zero point solutions.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A5 Sync is the all-in-one AI-powered business management platform for
            IT resellers, MSPs, and service providers. Sales, service, procurement,
            warehouse, and finance run on one system — so you can retire the CRM,
            CPQ, PSA, and reporting tools you're stitching together today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-xl bg-blue-500 hover:bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors shadow-lg shadow-blue-500/20"
            >
              Book a Free Demo
            </a>
            <a
              href="#platform"
              className="w-full sm:w-auto rounded-xl border border-[#1e2d45] hover:border-blue-500/50 px-8 py-4 text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              See the platform
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-20 max-w-5xl px-4">
          <div className="rounded-2xl border border-[#1e2d45] bg-[#0d1425] p-6 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 text-xs text-slate-500">A5 Sync Dashboard</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Open Tickets", value: "47", change: "-12%", up: false },
                { label: "Pipeline Value", value: "£284k", change: "+18%", up: true },
                { label: "Orders Pending", value: "23", change: "+5%", up: true },
                { label: "MRR", value: "£42k", change: "+7%", up: true },
              ].map((card) => (
                <div key={card.label} className="rounded-xl bg-[#0a0e1a] border border-[#1e2d45] p-4">
                  <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                  <p className="text-xl font-bold text-white">{card.value}</p>
                  <p className={`text-xs mt-1 ${card.up ? "text-emerald-400" : "text-red-400"}`}>
                    {card.change} vs last month
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 rounded-xl bg-[#0a0e1a] border border-[#1e2d45] p-4">
                <p className="text-xs text-slate-500 mb-3">Revenue Overview</p>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 50, 80, 55, 90, 72, 85, 60, 95, 70, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-blue-500/30 hover:bg-blue-500/50 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-[#0a0e1a] border border-[#1e2d45] p-4">
                <p className="text-xs text-slate-500 mb-3">Teams Live</p>
                <div className="space-y-2">
                  {["Sales", "Service", "Procurement", "Warehouse", "Finance"].map((name) => (
                    <div key={name} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-300">{name}</span>
                      <span className="ml-auto text-xs text-emerald-400">Live</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-[#1e2d45]">
        <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform / what it replaces */}
      <section id="platform" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
              The Platform
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your entire tech stack.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                One AI platform.
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A5 Sync doesn&apos;t connect to the point solutions IT resellers and
              MSPs cobble together — it replaces them, natively, for every team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {replaces.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: item.bg,
                  borderColor: item.border,
                }}
              >
                <div className="mb-4">{item.icon}</div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: item.color }}
                >
                  {item.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{item.replacesLabel}</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#0a0e1a]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Features
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Everything every team needs
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From first contact to recurring revenue — sales, service, procurement,
              warehouse, and finance, all streamlined by AI.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#1e2d45] bg-[#0d1425] p-8 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a0e1a] border border-[#1e2d45] flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Up and running in days, not months
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1e2d45] to-transparent" />
                )}
                <div className="text-5xl font-black text-[#1e2d45] mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Pricing teaser */}
      <section id="pricing" className="py-24 px-6 bg-[#0a0e1a]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#1e2d45] bg-gradient-to-br from-blue-600/10 to-cyan-600/5 p-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
              Pricing available on request
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to retire your tool stack?
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
              Book a 30-minute demo and see exactly how A5 Sync replaces your CRM,
              CPQ, PSA, and reporting tools with one AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-xl bg-blue-500 hover:bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors shadow-lg shadow-blue-500/20"
              >
                Book a Demo
              </a>
              <a
                href="mailto:hello@a5sync.com"
                className="w-full sm:w-auto rounded-xl border border-[#1e2d45] hover:border-blue-500/50 px-8 py-4 text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-slate-400 mb-10">
            Tell us about your business and we'll put together a tailored demo.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2d45] py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white text-sm">
              A5
            </div>
            <span className="text-lg font-bold text-white">A5 Sync</span>
          </div>
          <p className="text-sm text-slate-500 text-center">
            The All-in-One AI Business Management Platform for IT Resellers &amp; MSPs
          </p>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} A5 Sync. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
