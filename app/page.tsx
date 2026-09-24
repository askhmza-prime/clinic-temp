"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Sparkles,
  Droplets,
  Scissors,
  Zap,
  Phone,
  Calendar,
  ChevronDown,
  Quote,
} from "lucide-react";

function SectionMark({ label }: { label: string }) {
  return (
    <div className="section-mark">
      <span className="tick" />
      <span className="label">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
        alt="AURA Skin & Hair Clinic Moradabad"
        fill
        priority
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-40">
        <div className="max-w-2xl rise-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-[3px] bg-iodine" />
            <span className="text-iodine text-[13px] font-medium">Moradabad's dermatology clinic</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-paper leading-[1.05] mb-6">
            Advanced skin and hair treatments, backed by a real diagnosis
          </h1>
          <p className="text-paper/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Dermatology care led by Dr. Ashwin Charaniya, MD — over 10 years
            treating skin, hair and aesthetic concerns for Moradabad patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              <Calendar className="w-4 h-4" />
              Book appointment
            </Link>
            <a href="https://wa.me/919924933999" target="_blank" rel="noopener noreferrer" className="btn-outline border-paper/40 text-paper hover:bg-paper hover:text-ink hover:border-paper">
              WhatsApp consultation
            </a>
          </div>
        </div>
      </div>

      <VitalsStrip />
    </section>
  );
}

function VitalsStrip() {
  const stats = [
    { icon: Star, value: "4.9", label: "Google rating, 120+ reviews" },
    { icon: Award, value: "10+", label: "Years of dermatology practice" },
    { icon: Users, value: "5,000+", label: "Patients treated in Moradabad" },
    { icon: Clock, value: "20+", label: "Skin, hair & aesthetic protocols" },
  ];
  return (
    <div className="relative z-10 border-t border-paper/15 bg-ink/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 py-5 px-1 md:px-6 ${i > 0 ? "border-l border-paper/15" : ""}`}
            >
              <s.icon className="w-4 h-4 text-iodine flex-shrink-0" />
              <div>
                <div className="font-display text-2xl text-paper leading-none">{s.value}</div>
                <div className="text-[12px] text-paper/50 leading-snug mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedTreatments() {
  const treatments = [
    { icon: Droplets, title: "HydraFacial", desc: "Deep cleansing, exfoliation and hydration in one session for radiant, even skin.", tag: "Most popular", href: "/services/skin", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80" },
    { icon: Sparkles, title: "Acne treatment", desc: "Medical-grade protocols to clear active acne, reduce scarring, and prevent recurrence.", tag: "Highly effective", href: "/services/skin", img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80" },
    { icon: Scissors, title: "PRP hair therapy", desc: "Platelet-rich plasma therapy that uses your own blood to stimulate hair regrowth.", tag: "Advanced", href: "/services/hair", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=700&q=80" },
    { icon: Zap, title: "Laser hair removal", desc: "Diode laser technology calibrated for Indian skin — permanent, low-discomfort reduction.", tag: "Permanent", href: "/services/aesthetics", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80" },
  ];
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionMark label="Treatment menu" />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink max-w-lg">
              Where to start, based on what patients ask for most
            </h2>
          </div>
          <Link href="/services/skin" className="text-sm text-iodine font-medium flex items-center gap-1.5 hover:gap-3 transition-all flex-shrink-0">
            View all treatments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
          {treatments.map((t) => (
            <Link key={t.title} href={t.href} className="group flex bg-paper hover:bg-paper-dim transition-colors">
              <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
                <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-1.5">
                  <t.icon className="w-4 h-4 text-iodine" />
                  <span className="text-xs text-iodine">{t.tag}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{t.desc}</p>
                <div className="mt-auto flex items-center gap-1.5 text-ink text-sm font-medium group-hover:gap-3 group-hover:text-iodine transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsSection() {
  const doctors = [
    { name: "Dr. Ashwin Charaniya", qual: "MBBS, MD — Dermatology, Venereology & Leprosy", role: "Founder & chief dermatologist", exp: "10+ Years", highlights: ["Advanced laser & aesthetic procedures", "Medical dermatology specialist", "Certified PRP & GFC therapist", "Aesthetic medicine expert"], img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" },
    { name: "Dr. Harshita Sharma", qual: "MBBS, MD — Dermatology", role: "Consultant dermatologist", exp: "5+ Years", highlights: ["Skin allergy & eczema management", "Cosmetic dermatology", "Hair & scalp disorders", "Pigmentation treatments"], img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80" },
  ];
  return (
    <section className="section-pad bg-paper-dim">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionMark label="Expert care" />
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14 max-w-lg">
          The two dermatologists you'll actually see
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-paper border border-line overflow-hidden card-lift">
              <div className="relative h-72">
                <Image src={doc.img} alt={doc.name} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="bg-iodine text-paper text-xs px-3 py-1.5 inline-block">{doc.exp} experience</div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-medium text-ink">{doc.name}</h3>
                <p className="text-iodine text-sm mt-1 mb-0.5">{doc.role}</p>
                <p className="text-muted text-xs mb-5">{doc.qual}</p>
                <ul className="space-y-2">
                  {doc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <CheckCircle2 className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/about" className="btn-outline">Meet the full team</Link>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterPreview() {
  const cases = [
    { label: "Acne treatment", before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" },
    { label: "Pigmentation", before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80" },
    { label: "Hair restoration", before: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=400&q=80" },
  ];
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <SectionMark label="Documented results" />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">Recent cases from the clinic</h2>
          </div>
          <Link href="/gallery" className="text-sm text-iodine font-medium flex items-center gap-1.5 hover:gap-3 transition-all">
            View full gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.label} className="group overflow-hidden border border-line card-lift">
              <div className="grid grid-cols-2">
                <div className="relative h-56 overflow-hidden">
                  <Image src={c.before} alt={`Before ${c.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-ink/80 text-paper text-center text-xs py-1.5">Before</div>
                </div>
                <div className="relative h-56 overflow-hidden">
                  <Image src={c.after} alt={`After ${c.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-iodine text-paper text-center text-xs py-1.5">After</div>
                </div>
              </div>
              <div className="px-5 py-3 bg-paper-dim border-t border-line">
                <p className="text-sm font-medium text-ink">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsStrip() {
  const reviews = [
    { name: "Priya S.", text: "Dr. Ashwin is absolutely brilliant. My acne scars have reduced so much after just 3 sessions.", rating: 5 },
    { name: "Rahul M.", text: "Best dermatologist in Moradabad. The PRP therapy gave me visible results within 2 months.", rating: 5 },
    { name: "Anjali K.", text: "The clinic is so clean and well run. Dr. Harshita was very caring and thorough.", rating: 5 },
  ];
  return (
    <section className="section-pad bg-paper-dim">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionMark label="Patient reviews" />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">What patients tell us after</h2>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-iodine text-iodine" />))}
            <span className="ml-1 text-sm text-muted">4.9 / 5 · 120+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-paper border border-line p-7">
              <Quote className="w-6 h-6 text-iodine/40 mb-4" />
              <p className="text-ink/80 leading-relaxed mb-6 font-display text-lg">{r.text}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-iodine/15 flex items-center justify-center text-iodine font-medium text-sm">{r.name[0]}</div>
                <span className="text-sm font-medium text-ink">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "How much does a HydraFacial cost in Moradabad?", a: "HydraFacial at AURA Skin & Hair Clinic starts from ₹2,500 per session. The exact price depends on your skin concern and the protocol chosen. Contact us at +91 99249 33999 for a personalised quote." },
    { q: "Is Dr. Ashwin Charaniya available for Sunday consultations?", a: "Dr. Ashwin is available Monday to Saturday from 10 AM to 7 PM. Sunday appointments are available on special request. Call or WhatsApp us to schedule." },
    { q: "Which is the best clinic for hair loss treatment near Civil Lines Moradabad?", a: "AURA Skin & Hair Clinic at Gandhi Nagar, Prince Road is one of the top-rated clinics for PRP and GFC hair therapy in Moradabad. Rated 4.9 stars by 120+ patients." },
    { q: "How many PRP sessions are needed for hair regrowth?", a: "Typically 3 to 4 sessions spaced 4 weeks apart are recommended, followed by maintenance every 6 months. Results are visible from the 2nd session onwards." },
    { q: "Is laser hair removal safe for Indian skin?", a: "Yes. At AURA we use advanced laser systems calibrated for Indian skin tones. All procedures are performed by qualified MD dermatologists." },
    { q: "What is the difference between PRP and GFC therapy?", a: "GFC contains 5-10x higher growth factor concentration than standard PRP, leading to faster and more pronounced hair regrowth results with fewer sessions." },
  ];
  return (
    <section className="section-pad">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionMark label="Common questions" />
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">Questions patients ask us</h2>
        <p className="text-muted text-sm mb-12">Answers we give most often, in Moradabad and by phone.</p>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-line last:border-b">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4">
                <span className="font-medium text-ink text-[15px] leading-snug">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-iodine flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="pb-5 text-sm text-muted leading-relaxed pr-8">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-sm text-muted">Have more questions? <a href="tel:+919924933999" className="text-iodine hover:underline font-medium">Call us at +91 99249 33999</a></p>
        </div>
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ full_name: "", phone: "", service_interested: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const services = ["HydraFacial", "Acne Treatment", "Chemical Peel", "Pigmentation Treatment", "PRP Hair Therapy", "GFC Therapy", "Hair Loss Treatment", "Dandruff Management", "Laser Hair Removal", "Botox", "Dermal Fillers", "Microdermabrasion", "Other / General Consultation"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.phone) { setError("Please fill in your name and phone number."); return; }
    setError("");
    const message = `Hi, I'd like to book an appointment at AURA Skin & Hair Clinic.\n\nName: ${form.full_name}\nPhone: ${form.phone}\nService: ${form.service_interested || "Not specified"}\nMessage: ${form.message || "-"}`;
    window.open(`https://wa.me/919924933999?text=${encodeURIComponent(message)}`, "_blank");
    setSuccess(true);
    setForm({ full_name: "", phone: "", service_interested: "", message: "" });
  };
  return (
    <section className="section-pad bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-7 h-[3px] bg-iodine" />
              <span className="text-iodine text-[13px] font-medium">Book a visit</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-paper mb-6">Request an appointment</h2>
            <p className="text-paper/50 text-sm leading-relaxed mb-8">Fill out the form and our team will call you back within a few hours to confirm your appointment.</p>
            <a href="tel:+919924933999" className="flex items-center gap-4 group mb-8">
              <div className="w-11 h-11 border border-iodine/40 flex items-center justify-center text-iodine group-hover:bg-iodine group-hover:text-paper transition-colors"><Phone className="w-4 h-4" /></div>
              <div><div className="text-[12px] text-paper/40">Call us</div><div className="text-paper font-medium">+91 99249 33999</div></div>
            </a>
            <div className="border border-paper/10 p-5">
              <div className="text-[13px] text-iodine mb-3">Clinic hours</div>
              <div className="space-y-1.5 text-sm text-paper/60">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-paper/80">10:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-paper/80">By appointment</span></div>
              </div>
            </div>
          </div>
          <div className="bg-paper p-8 md:p-10">
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-iodine mx-auto mb-4" />
                <h3 className="font-display text-2xl font-medium mb-2">Request received</h3>
                <p className="text-muted text-sm">Thank you. Our team will call you within a few hours.</p>
                <button onClick={() => setSuccess(false)} className="mt-6 text-iodine text-sm underline">Book another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div><label className="field-label">Full name *</label><input type="text" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Your full name" className="field-input" /></div>
                <div><label className="field-label">Phone number *</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="field-input" /></div>
                <div><label className="field-label">Service interested in</label><select value={form.service_interested} onChange={(e) => setForm({ ...form, service_interested: e.target.value })} className="field-input bg-paper appearance-none"><option value="">Select a service</option>{services.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><label className="field-label">Message (optional)</label><textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific concerns or questions..." className="field-input resize-none" /></div>
                {error && <p className="text-red-600 text-xs">{error}</p>}
                <button type="submit" className="w-full btn-primary">Request appointment</button>
                <p className="text-[12px] text-muted text-center">Your information is private and secure.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTreatments />
      <DoctorsSection />
      <BeforeAfterPreview />
      <ReviewsStrip />
      <FAQSection />
      <AppointmentForm />
    </>
  );
}
