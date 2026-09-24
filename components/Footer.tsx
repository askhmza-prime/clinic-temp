import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="border-b border-paper/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-display text-2xl font-medium">AURA</div>
              <div className="text-sm text-paper/50">Skin & Hair Clinic</div>
            </div>
            <p className="text-sm text-paper/50 leading-relaxed mb-5">
              Dermatology care in Moradabad, built on evidence and a
              thorough chart for every patient.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-paper/20 flex items-center justify-center text-paper/50 hover:border-iodine hover:text-iodine transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-iodine mb-4">Quick links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About us", href: "/about" },
                { label: "Skin treatments", href: "/services/skin" },
                { label: "Hair treatments", href: "/services/hair" },
                { label: "Advanced aesthetics", href: "/services/aesthetics" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-paper/50 hover:text-iodine transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-medium text-iodine mb-4">Popular treatments</h4>
            <ul className="space-y-2.5">
              {[
                "HydraFacial",
                "PRP hair therapy",
                "Acne treatment",
                "Laser hair removal",
                "Chemical peels",
                "Botox & fillers",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-paper/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-iodine mb-4">Visit us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-paper/60">
                <MapPin className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
                <span>
                  A-69 Gandhi Nagar, Prince Road,
                  <br />
                  Moradabad, Uttar Pradesh
                </span>
              </li>
              <li className="flex gap-3 text-sm text-paper/60">
                <Phone className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
                <a href="tel:+919924933999" className="hover:text-iodine transition-colors">
                  +91 99249 33999
                </a>
              </li>
              <li className="flex gap-3 text-sm text-paper/60">
                <Clock className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon – Sat: 10:00 AM – 7:00 PM</div>
                  <div>Sunday: By appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-paper/30">
          © {new Date().getFullYear()} AURA Skin & Hair Clinic. All rights reserved.
        </p>
        <p className="text-xs text-paper/20">Moradabad, Uttar Pradesh</p>
      </div>
    </footer>
  );
}
