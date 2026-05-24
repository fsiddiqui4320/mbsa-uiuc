"use client";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-16 lg:py-20 px-6 lg:px-12 border-t border-[rgba(255,255,255,0.07)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-[15px] tracking-[-0.01em] mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#programs"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  Mosaic
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-[15px] tracking-[-0.01em] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  LinkTree
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold text-[15px] tracking-[-0.01em] mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#board"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  Our Board
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Brand */}
          <div>
            <img src="/logo-nav.png" alt="MBSA" className="h-10 w-auto mb-4" />
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/uiucmbsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                  @uiucmbsa
                </a>
              </li>
              <li>
                <a
                  href="mailto:mbsa@illinois.edu"
                  className="text-[#d5dbe6] text-sm hover:text-white transition-colors"
                >
                  mbsa@illinois.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.07)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#d5dbe6] text-sm">
            Muslim Business Students Association at University of Illinois
            Urbana-Champaign
          </p>
          <p className="text-[#d5dbe6] text-sm opacity-60">
            &copy; {new Date().getFullYear()} MBSA @ UIUC
          </p>
        </div>
      </div>
    </footer>
  );
}
