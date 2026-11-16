import React from "react";
import { ArrowRight } from "lucide-react";

export function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F2EEE4]/95 backdrop-blur-sm border-t border-[#3B2A20]/10 px-4 py-3">
      <a
        href="#find-us"
        className="flex items-center justify-center gap-2 w-full bg-[#24507A] hover:bg-[#1B3A57] text-[#F2EEE4] font-sans text-sm font-medium py-3 rounded-sm transition-colors"
      >
        <span>Come on in</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export default MobileStickyCta;
