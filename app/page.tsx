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
  Stethoscope,
  Sparkles,
  Smile,
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
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
        alt="Dr. Swatantra's Dental Care, Moradabad"
        fill
        priority
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-40">
        <div className="max-w-2xl rise-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-[3px] bg-iodine" />
            <span className="text-iodine text-[13px] font-medium">Civil Lines, Moradabad</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-paper leading-[1.05] mb-6">
            Dental care built on 35 years of clinical experience
          </h1>
          <p className="text-paper/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Dr. Swatantra Agarwal, MDS — Periodontics, and Principal at
            Kothiwal Dental College, has treated Moradabad patients for
            over three decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              <Calendar className="w-4 h-4" />
              Book appointment
            </Link>
            <a href="https://wa.me/919761717179" target="_blank" rel="noopener noreferrer" className="btn-outline border-paper/40 text-paper hover:bg-paper hover:text-ink hover:border-paper">
              WhatsApp us
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
    { icon: Star, value: "4.8", label: "Google rating, 113 reviews" },
    { icon: Award, value: "35+", label: "Years of clinical practice" },
    { icon: Users, value: "Thousands", label: "Of patients treated in Moradabad" },
    { icon: Clock, value: "3", label: "Treatment specialities under one roof" },
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
    { icon: Stethoscope, title: "Root canal treatment", desc: "Pain relief and tooth preservation using modern, minimally invasive endodontic technique.", tag: "Most requested", href: "/services/general", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80" },
    { icon: Sparkles, title: "Teeth whitening", desc: "Safe, dentist-supervised whitening for a noticeably brighter smile in a single visit.", tag: "In-clinic", href: "/services/cosmetic", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=700&q=80" },
    { icon: Smile, title: "Braces & aligners", desc: "Orthodontic correction for crowding, gaps and bite issues — for both teens and adults.", tag: "Orthodontics", href: "/services/ortho-implants", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80" },
    { icon: Zap, title: "Dental implants", desc: "Permanent, natural-looking replacement for missing teeth, placed with surgical precision.", tag: "Permanent", href: "/services/ortho-implants", img: "https://images.unsplash.com/photo-1571772805064-207c8435df79?auto=format&fit=crop&w=700&q=80" },
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
          <Link href="/services/general" className="text-sm text-iodine font-medium flex items-center gap-1.5 hover:gap-3 transition-all flex-shrink-0">
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

function DoctorSection() {
  const highlights = [
    "35+ years of clinical dental practice",
    "MDS — Periodontics",
    "Principal, Kothiwal Dental College & Research Centre",
    "Specialist in gum (periodontal) care",
    "Root canal, implants & prosthodontics",
  ];
  return (
    <section className="section-pad bg-paper-dim">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionMark label="Your dentist" />
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14 max-w-lg">
          Three decades of chairside experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl">
          <div className="relative h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80"
              alt="Dr. Swatantra Agarwal"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-iodine text-paper px-5 py-3">
              <div className="font-display text-2xl leading-none">35+</div>
              <div className="text-xs mt-1">Years experience</div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl font-medium text-ink">Dr. Swatantra Agarwal</h3>
            <p className="text-iodine text-sm mt-1 mb-0.5">Founder & chief dentist</p>
            <p className="text-muted text-sm mb-6">MDS — Periodontics</p>
            <p className="text-ink/70 text-sm leading-relaxed mb-6">
              Dr. Agarwal has practised dentistry in Moradabad for over 35
              years and currently serves as Principal at Kothiwal Dental
              College & Research Centre. His clinic combines a lifetime of
              chairside experience with modern equipment across general,
              cosmetic and surgical dentistry.
            </p>
            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink/70">
                  <CheckCircle2 className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline">Read more about Dr. Agarwal</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsStrip() {
  const reviews = [
    { text: "Staff are attentive and the doctor's service consistently gets high marks from patients.", source: "Google review" },
    { text: "Patients highlight the clean, hygienic setup and the doctor's clear, expert explanations.", source: "Google review" },
    { text: "Reviewers describe Dr. Agarwal as gentle, patient, and attentive to gum-care concerns.", source: "Google review" },
  ];
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionMark label="Patient reviews" />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">What patients tell us after</h2>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-iodine text-iodine" />))}
            <span className="ml-1 text-sm text-muted">4.8 / 5 · 113 Google reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-paper-dim border border-line p-7">
              <Quote className="w-6 h-6 text-iodine/40 mb-4" />
              <p className="text-ink/80 leading-relaxed mb-6 font-display text-lg">{r.text}</p>
              <span className="text-xs text-muted">{r.source}</span>
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
    { q: "Where is Dr. Swatantra's Dental Care located?", a: "We're at Gate No. 1, Opposite Reserve Police Line, Shanker Vihar Colony, Civil Lines, Moradabad — 244001, near Titus School." },
    { q: "What are your clinic hours?", a: "We're open Monday to Saturday, 10:00 AM – 2:00 PM and again 5:00 PM – 8:00 PM. We're closed on Sundays. Call ahead to confirm your slot." },
    { q: "How experienced is Dr. Swatantra Agarwal?", a: "Dr. Agarwal holds an MDS in Periodontics and has over 35 years of clinical dental practice. He also serves as Principal at Kothiwal Dental College & Research Centre, Moradabad." },
    { q: "Do you treat gum disease and periodontal problems?", a: "Yes — periodontics is Dr. Agarwal's area of specialisation, alongside general, cosmetic and surgical dentistry." },
    { q: "Is root canal treatment painful?", a: "Modern root canal treatment is performed under local anaesthesia and is generally no more uncomfortable than a routine filling. Most patients return to normal activity the same day." },
    { q: "Do you offer dental implants?", a: "Yes, we provide dental implants as a permanent replacement for missing teeth. Book a consultation so Dr. Agarwal can assess your suitability." },
  ];
  return (
    <section className="section-pad bg-paper-dim">
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
          <p className="text-sm text-muted">Have more questions? <a href="tel:+919761717179" className="text-iodine hover:underline font-medium">Call us at +91 97617 17179</a></p>
        </div>
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ full_name: "", phone: "", service_interested: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const services = ["General Checkup", "Root Canal Treatment", "Teeth Whitening", "Braces / Aligners", "Dental Implants", "Crowns & Bridges", "Gum Treatment", "Tooth Extraction", "Other / General Consultation"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.phone) { setError("Please fill in your name and phone number."); return; }
    setError("");
    const message = `Hi, I'd like to book an appointment at Dr. Swatantra's Dental Care.\n\nName: ${form.full_name}\nPhone: ${form.phone}\nService: ${form.service_interested || "Not specified"}\nMessage: ${form.message || "-"}`;
    window.open(`https://wa.me/919761717179?text=${encodeURIComponent(message)}`, "_blank");
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
            <p className="text-paper/50 text-sm leading-relaxed mb-8">Fill out the form to send us your details on WhatsApp — we'll confirm your slot directly there.</p>
            <a href="tel:+919761717179" className="flex items-center gap-4 group mb-8">
              <div className="w-11 h-11 border border-iodine/40 flex items-center justify-center text-iodine group-hover:bg-iodine group-hover:text-paper transition-colors"><Phone className="w-4 h-4" /></div>
              <div><div className="text-[12px] text-paper/40">Call us</div><div className="text-paper font-medium">+91 97617 17179</div></div>
            </a>
            <div className="border border-paper/10 p-5">
              <div className="text-[13px] text-iodine mb-3">Clinic hours</div>
              <div className="space-y-1.5 text-sm text-paper/60">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-paper/80">10 AM–2 PM & 5 PM–8 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-paper/80">Closed</span></div>
              </div>
            </div>
          </div>
          <div className="bg-paper p-8 md:p-10">
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-iodine mx-auto mb-4" />
                <h3 className="font-display text-2xl font-medium mb-2">Request sent</h3>
                <p className="text-muted text-sm">Check WhatsApp to complete sending your message — we'll reply to confirm your appointment.</p>
                <button onClick={() => setSuccess(false)} className="mt-6 text-iodine text-sm underline">Book another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div><label className="field-label">Full name *</label><input type="text" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Your full name" className="field-input" /></div>
                <div><label className="field-label">Phone number *</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="field-input" /></div>
                <div><label className="field-label">Service interested in</label><select value={form.service_interested} onChange={(e) => setForm({ ...form, service_interested: e.target.value })} className="field-input bg-paper appearance-none"><option value="">Select a service</option>{services.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><label className="field-label">Message (optional)</label><textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific concerns or questions..." className="field-input resize-none" /></div>
                {error && <p className="text-red-600 text-xs">{error}</p>}
                <button type="submit" className="w-full btn-primary">Send via WhatsApp</button>
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
      <DoctorSection />
      <ReviewsStrip />
      <FAQSection />
      <AppointmentForm />
    </>
  );
}
