import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Ticket,
  PlayCircle,
  Award,
  Globe,
} from "lucide-react";

const EventFeatureSection: React.FC = () => {
  const TICKET_URL =
    "https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en";

  // --- Countdown Logic ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("February 21, 2026 19:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT CONTENT: EDITORIAL STORY */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-widest">
                <Award size={14} /> 6th Annual Edition
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-[0.85] uppercase">
                Industry Power.
                <br />
                <span className="text-red-600">Canadian</span> Talent.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-2xl">
              <p>
                The Canadian Game Awards (CGA) celebrate Canada’s video game
                industry,
                <span className="text-neutral-900 font-semibold">
                  {" "}
                  one of the largest and most influential in the world.
                </span>
                The awards highlight the studios and creators who have cemented
                Canada’s role as a global leader in interactive entertainment.
              </p>
              <p>
                Designed by the industry, for the industry, the CGA also invites
                fans to take part in celebrating the creativity, talent, and
                impact of Canadian game development.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-neutral-100">
              <div className="flex gap-4">
                <Globe className="text-red-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-neutral-900 uppercase text-sm tracking-tight">
                    World Leader
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Highlighting global innovation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="text-red-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-neutral-900 uppercase text-sm tracking-tight">
                    Community Driven
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Voted by fans and peers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: ACTION CARD WITH COUNTDOWN */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 rounded-[2rem] p-2 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-10 text-white space-y-8">
                {/* Countdown Timer Header */}
                <div className="text-center space-y-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 font-black">
                    Countdown to Ceremony
                  </p>
                  <div className="flex justify-between items-center max-w-[280px] mx-auto">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hrs", value: timeLeft.hours },
                      { label: "Min", value: timeLeft.minutes },
                      { label: "Sec", value: timeLeft.seconds },
                    ].map((unit, i) => (
                      <div
                        key={unit.label}
                        className="flex flex-col items-center"
                      >
                        <span className="text-3xl font-black tabular-nums tracking-tighter">
                          {unit.value.toString().padStart(2, "0")}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-widest">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Recap Video Teaser */}
                <div className="relative group/video cursor-pointer overflow-hidden rounded-2xl aspect-video border border-white/5 bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
                    alt="CGA 2025"
                    className="object-cover w-full h-full opacity-40 group-hover/video:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <PlayCircle
                      className="text-white group-hover/video:text-red-600 transition-colors"
                      size={48}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Event Recap Video
                    </span>
                  </div>
                </div>

                {/* Logistics */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4 text-sm">
                    <Calendar className="text-red-500 shrink-0" size={18} />
                    <span className="font-medium">
                      February 21, 2026 — Join us at TIFF Lightbox
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <MapPin className="text-red-500 shrink-0" size={18} />
                    <span className="text-neutral-400">
                      350 King St West, Toronto, ON
                    </span>
                  </div>
                </div>

                {/* Primary Button */}
                <div className="pt-2">
                  <a
                    href={TICKET_URL}
                    className="flex flex-col items-center group/btn"
                  >
                    <div className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 group-hover/btn:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                      <Ticket
                        size={20}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                      <span className="uppercase tracking-widest">
                        Buy CGA Tickets
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500 mt-4 uppercase tracking-[0.2em] font-medium">
                      Tickets required for the evening awards ceremony
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFeatureSection;
