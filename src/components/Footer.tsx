export function Footer() {
  return (
    <footer className="bg-[#1B3A57] text-[#F2EEE4] pt-16 pb-24 md:pb-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-3 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24507A] border border-[#F2EEE4]/15 text-[#F2EEE4]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 9H16V15C16 18.3137 13.3137 21 10 21C6.68629 21 4 18.3137 4 15V9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 10.5H17.5C19.1569 10.5 20.5 11.8431 20.5 13.5C20.5 15.1569 19.1569 16.5 17.5 16.5H16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 5.5C7.5 4.5 8.5 3.8 8.5 2.8M12 5.5C12 4.5 13 3.8 13 2.8"
                    stroke="#C9A97A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="font-serif text-xl tracking-tight text-[#F2EEE4]">
                Blue &amp; Brown
              </span>
            </a>

            <p className="text-sm text-[#F2EEE4]/75 max-w-xs leading-relaxed">
              A small corner café on Linden Street. Good coffee, warm bakes, and
              room for one more.
            </p>
          </div>

          {/* 3 Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A97A] mb-4">
                TAKE A LOOK
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F2EEE4]/80">
                <li>
                  <a
                    href="#menu"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    The menu
                  </a>
                </li>
                <li>
                  <a
                    href="#story"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Our little story
                  </a>
                </li>
                <li>
                  <a
                    href="#rituals"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    The good stuff
                  </a>
                </li>
                <li>
                  <a
                    href="#find-us"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Gift cards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A97A] mb-4">
                FIND THE DOOR
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F2EEE4]/80">
                <li>
                  <a
                    href="#find-us"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    214 Linden Street
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=214+Linden+Street+Portland+OR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Directions
                  </a>
                </li>
                <li>
                  <a
                    href="#find-us"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Hours
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@blueandbrown.cafe?subject=Private%20gatherings"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Private gatherings
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A97A] mb-4">
                KEEP IN TOUCH
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F2EEE4]/80">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#newsletter"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@blueandbrown.cafe"
                    className="hover:text-[#F2EEE4] transition-colors break-all"
                  >
                    hello@blueandbrown.cafe
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@blueandbrown.cafe?subject=Work%20with%20us"
                    className="hover:text-[#F2EEE4] transition-colors"
                  >
                    Work with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F2EEE4]/12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#F2EEE4]/60">
          <p>© 2026 Blue &amp; Brown Neighborhood Café</p>
          <p className="italic font-serif text-[#F2EEE4]/70">
            Poured with care, never in a hurry.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
