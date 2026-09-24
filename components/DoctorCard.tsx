import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface DoctorCardProps {
  name: string;
  qualification: string;
  role: string;
  experience: string;
  highlights: string[];
  imageSrc: string;
}

export default function DoctorCard({
  name,
  qualification,
  role,
  experience,
  highlights,
  imageSrc,
}: DoctorCardProps) {
  return (
    <div className="bg-paper border border-line overflow-hidden card-lift">
      <div className="relative h-72">
        <Image src={imageSrc} alt={name} fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5">
          <div className="bg-iodine text-paper text-xs px-3 py-1.5 inline-block">
            {experience} experience
          </div>
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-display text-2xl font-medium text-ink">{name}</h3>
        <p className="text-iodine text-sm mt-1 mb-0.5">{role}</p>
        <p className="text-muted text-xs mb-5">{qualification}</p>

        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
              <CheckCircle2 className="w-4 h-4 text-iodine flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
