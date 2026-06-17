'use client'

import React from 'react';
import { Brain, GraduationCap, Users } from 'lucide-react';

interface AxeAccordionProps {
  axe: number;
  iconType: 'brain' | 'graduation' | 'users';
  title: string;
  items: string[];
}

export function AxeAccordion({ axe, iconType, title, items }: AxeAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const iconMap = {
    brain: <Brain className="h-6 w-6 text-[#2F0461] shrink-0" />,
    graduation: <GraduationCap className="h-6 w-6 text-[#2F0461] shrink-0" />,
    users: <Users className="h-6 w-6 text-[#2F0461] shrink-0" />,
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white transition-all duration-300" style={{
      boxShadow: isOpen ? "0 20px 40px rgba(47, 4, 97, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.05)"
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-[#fafafa] transition-colors"
      >
        <div className="flex items-center gap-6 text-left flex-1">
          {iconMap[iconType]}
          <div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#999] font-medium mb-2">
              Axe 0{axe}
            </div>
            <h3 className="text-xl md:text-2xl font-light text-black">
              {title}
            </h3>
          </div>
        </div>
        <div className={`ml-4 text-2xl text-[#2F0461] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-[#f0f0f0] px-8 md:px-10 py-8 bg-gradient-to-b from-[#fafafa] to-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {items.slice(0, Math.ceil(items.length / 2)).map((item: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#2F0461] mt-2 shrink-0" />
                  <p className="text-base text-[#666] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {items.slice(Math.ceil(items.length / 2)).map((item: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#2F0461] mt-2 shrink-0" />
                  <p className="text-base text-[#666] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
