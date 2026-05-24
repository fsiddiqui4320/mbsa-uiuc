"use client";

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-6 lg:px-12 border-t border-[rgba(255,255,255,0.07)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top section: Social icons + columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
          {/* Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Instagram */}
            <a
              href="https://instagram.com/uiucmbsa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle w-10 h-10 hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15 7.3c-4.25 0-7.7 3.45-7.7 7.7s3.45 7.7 7.7 7.7 7.7-3.45 7.7-7.7S19.25 7.3 15 7.3zm0 12.7c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm9.8-13c0 .597-.483 1.08-1.08 1.08s-1.08-.483-1.08-1.08.483-1.08 1.08-1.08 1.08.483 1.08 1.08zM8.79.107C7.19.182 6.1.437 5.15.81A6.73 6.73 0 0 0 .77 5.204C.402 6.159.15 7.252.08 8.847.01 10.444-.006 10.957 0 15.03c.01 4.074.028 4.584.105 6.184.077 1.596.33 2.686.704 3.639a6.73 6.73 0 0 0 4.334 4.335c.954.368 2.045.62 3.642.69 1.597.07 2.111.088 6.183.078 4.072-.008 4.585-.026 6.184-.104 1.6-.075 2.684-.331 3.638-.706a6.73 6.73 0 0 0 4.335-4.334c.369-.954.62-2.045.689-3.64.07-1.6.088-2.113.079-6.185-.01-4.073-.027-4.584-.103-6.184-.075-1.6-.33-2.685-.705-3.639a6.73 6.73 0 0 0-4.334-4.335C23.843.404 22.753.152 21.155.084 19.559.013 19.045-.006 14.972.002 10.898.012 10.388.028 8.788.107z"
                  fill="white"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle w-10 h-10 hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 30 30" fill="none">
                <path
                  d="M25.56 25.56h-4.44v-6.96c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.67v7.09h-4.44v-14.32h4.27v1.95h.06c.59-1.12 2.04-2.31 4.21-2.31 4.5 0 5.33 2.96 5.33 6.82v7.86zM6.67 9.29A2.58 2.58 0 1 1 6.67 4.13a2.58 2.58 0 0 1 0 5.16zM8.9 25.56H4.44v-14.32H8.9v14.32zM27.78 0H2.21C.99 0 0 .97 0 2.16v25.68C0 29.03.99 30 2.21 30h25.57C29 30 30 29.03 30 27.84V2.16C30 .97 29 0 27.78 0z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1 w-full text-center md:text-left">
            {/* Programs */}
            <div>
              <h4 className="footer-heading text-white mb-4">Programs</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#programs" className="footer-link">
                    Mosaic
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="footer-heading text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="footer-link">
                    LinkTree
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="footer-heading text-white mb-4">Community</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#cta" className="footer-link">
                    Join MBSA
                  </a>
                </li>
                <li>
                  <a href="#board" className="footer-link">
                    Our Board
                  </a>
                </li>
                <li>
                  <a href="mailto:mbsa@illinois.edu" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <hr className="section-divider mb-8" />

        {/* Tagline */}
        <div className="text-center">
          <p className="text-[#d5dbe6] text-[14px] leading-[1.3em] tracking-[-0.04em]">
            Muslim Business Students Association — University of Illinois
            Urbana-Champaign &nbsp;|&nbsp; mbsa@illinois.edu
          </p>
        </div>
      </div>
    </footer>
  );
}
