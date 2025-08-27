import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Home, Calculator, Phone, Mail, MapPin, Menu, X, ShieldCheck, PiggyBank, Landmark, Handshake, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Helper: currency formatter
const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number.isFinite(n) ? n : 0);

export default function DBMortgageSite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="">
        <Hero />
        <WhoWeAre />
        <Services />
        <MortgageCalculator />
        <Contact />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 grid place-items-center shadow-sm">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span>DB Mortgage & Financial Services</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#who" className="hover:text-blue-600 transition-colors">Who We Are</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors">Mortgage Calculator</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#links" className="hover:text-blue-600 transition-colors">Links</a>
            <Button asChild className="rounded-full">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-in fade-in duration-150">
            <div className="grid gap-2 text-sm font-medium">
              <a onClick={() => setMobileOpen(false)} href="#who" className="py-2">Who We Are</a>
              <a onClick={() => setMobileOpen(false)} href="#services" className="py-2">Services</a>
              <a onClick={() => setMobileOpen(false)} href="#calculator" className="py-2">Mortgage Calculator</a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="py-2">Contact</a>
              <a onClick={() => setMobileOpen(false)} href="#links" className="py-2">Links</a>
              <Button asChild className="mt-2"><a href="#contact">Get Started</a></Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="absolute -top-32 left-1/2 -translate-x-1/2 blur-3xl opacity-40" width="1200" height="600" viewBox="0 0 1200 600" aria-hidden>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
          <ellipse cx="600" cy="200" rx="500" ry="200" fill="url(#g)" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Your Trusted Partner in Homeownership & Financial Security
            </motion.h1>
            <p className="mt-5 text-slate-700 text-lg">
              Tailored mortgages, wealth planning, and insurance guidance—under one roof. We help you buy your dream home and secure your financial future.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full"><a href="#contact">Talk to an Expert</a></Button>
              <Button asChild variant="outline" className="rounded-full"><a href="#services">Explore Services</a></Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Licensed LO & Insurance (NJ)</div>
              <div className="flex items-center gap-2"><Handshake className="h-4 w-4"/> Client-first, transparent guidance</div>
            </div>
          </div>
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5"/> Quick Monthly Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <InlineCalculator />
              <p className="mt-3 text-xs text-slate-500">For a full breakdown including taxes/insurance, see the calculator section below.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who" className="py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              DB Mortgage & Financial Services is led by <strong>Dimple Bhojawala</strong>—born and raised in India and a graduate with a Bachelor’s in Business Management from Kean University. Dimple is a licensed <strong>Loan Officer</strong> and holds a <strong>Life & Health Insurance</strong> license in New Jersey. She’s passionate about helping people achieve their personal and emotional goals—owning a dream home and safeguarding their finances for retirement.
            </p>
            <p className="mt-3 text-slate-700">
              We combine empathy with expertise, guiding you through complex decisions with clarity and care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Tag icon={<ShieldCheck className="h-4 w-4"/>}>Compliance & Clarity</Tag>
              <Tag icon={<PiggyBank className="h-4 w-4"/>}>Wealth & Retirement Focus</Tag>
              <Tag icon={<Landmark className="h-4 w-4"/>}>End-to-End Support</Tag>
            </div>
          </div>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white">
            <CardHeader>
              <CardTitle>At a Glance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 grid gap-3">
              <div className="flex items-start gap-3"><Home className="h-4 w-4 mt-0.5"/><span>Licensed Loan Officer & Life/Health Insurance (NJ)</span></div>
              <div className="flex items-start gap-3"><Handshake className="h-4 w-4 mt-0.5"/><span>Personalized, client-first guidance</span></div>
              <div className="flex items-start gap-3"><PiggyBank className="h-4 w-4 mt-0.5"/><span>Mortgage + Financial planning under one roof</span></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const serviceItems = [
    {
      title: "Mortgage Services",
      items: [
        "Home Purchase Loans (Conventional, FHA, VA, USDA)",
        "Refinancing: Rate-and-term, Cash-out, Streamlined",
        "Specialized Programs: Jumbo, ARMs, First-time Buyer",
      ],
      icon: <Home className="h-5 w-5"/>,
    },
    {
      title: "Financial Services",
      items: [
        "Wealth & Retirement Planning",
        "Life & Health Insurance Guidance",
        "Credit & Debt Management Support",
      ],
      icon: <PiggyBank className="h-5 w-5"/>,
    },
    {
      title: "Business & Commercial",
      items: [
        "Small Business Loans & Lines",
        "Commercial Real Estate Financing",
        "Cash Flow & Treasury Guidance",
      ],
      icon: <Landmark className="h-5 w-5"/>,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Services We Provide</h2>
          <p className="mt-3 text-slate-700">Holistic guidance from pre-approval to retirement—tailored to your goals.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((s, i) => (
            <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="text-blue-600">{s.icon}</span>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  {s.items.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InlineCalculator() {
  const [amount, setAmount] = useState(400000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const { monthly } = useMemo(() => computeMortgage(amount, rate, years), [amount, rate, years]);

  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="amt">Amount</Label>
          <Input id="amt" type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="rate">Rate %</Label>
          <Input id="rate" type="number" step="0.01" value={rate} onChange={(e)=>setRate(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="yrs">Years</Label>
          <Input id="yrs" type="number" value={years} onChange={(e)=>setYears(Number(e.target.value))} />
        </div>
      </div>
      <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
        Estimated Monthly Payment: <strong>{fmt(monthly)}</strong>
      </div>
      <Button asChild variant="outline" className="w-fit rounded-full"><a href="#calculator">Open Full Calculator <ChevronRight className="h-4 w-4 ml-1"/></a></Button>
    </div>
  );
}

function MortgageCalculator() {
  const [amount, setAmount] = useState(450000);
  const [down, setDown] = useState(10); // %
  const [rate, setRate] = useState(6.25); // % APR
  const [years, setYears] = useState(30);
  const [taxes, setTaxes] = useState(5200); // annual
  const [insurance, setInsurance] = useState(1400); // annual
  const [hoa, setHoa] = useState(0); // monthly

  const principal = useMemo(() => amount * (1 - down/100), [amount, down]);
  const { monthly: piti, principalInterest } = useMemo(() => {
    const base = computeMortgage(principal, rate, years);
    const escrowMonthly = (taxes + insurance) / 12 + hoa;
    return { monthly: base.monthly + escrowMonthly, principalInterest: base.monthly };
  }, [principal, rate, years, taxes, insurance, hoa]);

  return (
    <section id="calculator" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Mortgage Calculator</h2>
            <p className="mt-3 text-slate-700">Estimate monthly payments with principal & interest (P&I), plus taxes, insurance, and HOA. This is an estimate—not a commitment to lend.</p>

            <div className="mt-6 grid gap-4">
              <Field label="Home Price" value={amount} onChange={setAmount} prefix="$" />
              <Field label="Down Payment (%)" value={down} onChange={setDown} suffix="%" />
              <Field label="Interest Rate (APR %)" value={rate} onChange={setRate} suffix="%" step={0.01} />
              <Field label="Loan Term (Years)" value={years} onChange={setYears} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field label="Annual Taxes" value={taxes} onChange={setTaxes} prefix="$" />
                <Field label="Annual Insurance" value={insurance} onChange={setInsurance} prefix="$" />
                <Field label="Monthly HOA" value={hoa} onChange={setHoa} prefix="$" />
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5"/> Results</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <Row label="Home Price" value={fmt(amount)} />
              <Row label="Down Payment" value={`${down}% (${fmt(amount * down/100)})`} />
              <Row label="Loan Amount" value={fmt(principal)} />
              <div className="h-px bg-slate-200 my-2"/>
              <Row label="P&I (Principal & Interest)" value={fmt(principalInterest)} />
              <Row label="Taxes + Insurance + HOA" value={fmt((taxes + insurance)/12 + hoa)} />
              <Row label={<span className="font-semibold">Estimated Monthly Payment</span>} value={<span className="font-semibold">{fmt(piti)}</span>} />
              <div className="pt-2 text-xs text-slate-500">Your rate and final payment may vary based on credit profile, loan type, and market conditions.</div>
              <div className="pt-2">
                <Button asChild className="w-full rounded-full"><a href="#contact">Get Pre-Qualified</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, prefix, suffix, step }) {
  return (
    <div>
      <Label className="text-slate-700">{label}</Label>
      <div className="mt-1 flex items-center rounded-xl border border-slate-200 bg-white px-3">
        {prefix && <span className="text-slate-500 mr-1">{prefix}</span>}
        <input
          type="number"
          value={value}
          step={step ?? 1}
          onChange={(e)=> onChange(Number(e.target.value))}
          className="w-full py-2 outline-none bg-transparent"
        />
        {suffix && <span className="text-slate-500 ml-1">{suffix}</span>}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600">{label}</span>
      <span className="text-slate-900">{value}</span>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("DB Mortgage & Financial Services — Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    return `mailto:info@example.com?subject=${subject}&body=${body}`;
  }, [name, email, phone, message]);

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-3 text-slate-700">Ready to start? Send us a message and we’ll reach out with next steps.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 123-4567</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@example.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> New Jersey, USA</div>
            </div>
          </div>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <FieldText label="Full Name" value={name} onChange={setName} placeholder="Your name" />
                <FieldText label="Email" value={email} onChange={setEmail} placeholder="you@example.com" type="email" />
                <FieldText label="Phone" value={phone} onChange={setPhone} placeholder="(xxx) xxx-xxxx" />
                <div>
                  <Label>Message</Label>
                  <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 outline-none" placeholder="How can we help?" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-full"><a href={mailtoHref}>Send Email</a></Button>
                  <Button asChild variant="outline" className="rounded-full"><a href="#">Schedule a Consultation</a></Button>
                </div>
                <p className="text-xs text-slate-500">By contacting us, you consent to be reached by phone, SMS, or email. This is not a commitment to lend.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FieldText({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 outline-none" />
    </div>
  );
}

function QuickLinks() {
  const links = [
    { label: "Apply Online", href: "#", desc: "Start your application in minutes." },
    { label: "Schedule a Consultation", href: "#", desc: "Book a 1:1 with an expert." },
    { label: "Resources", href: "#", desc: "Guides, FAQs, and tools." },
  ];
  return (
    <section id="links" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="group rounded-2xl border border-slate-200 p-5 hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{l.label}</div>
                  <div className="text-sm text-slate-600">{l.desc}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500"/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} DB Mortgage & Financial Services. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Disclosures</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Utilities ---
function Tag({ children, icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
      {icon} {children}
    </div>
  );
}

function computeMortgage(amount, rate, years) {
  const n = Math.max(1, Math.round(years * 12));
  const r = Math.max(0, rate) / 100 / 12; // monthly rate
  if (r === 0) {
    const monthly = amount / n;
    return { monthly: isFinite(monthly) ? monthly : 0 };
  }
  const pow = Math.pow(1 + r, n);
  const monthly = (amount * r * pow) / (pow - 1);
  return { monthly: isFinite(monthly) ? monthly : 0 };
}
