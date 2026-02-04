// components/footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand / CTA */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white">
              Let’s build something meaningful
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Have an idea or a project in mind? I’m always open to discussing
              new opportunities and collaborations.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="hover:text-white">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DIV. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-5">
            <Link
              href="https://www.facebook.com/isoboye.vincent"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 hover:text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/isoboye_vincent/"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/isoboye-dan-obu-04a892360/"
              aria-label="X"
            >
              <Linkedin className="h-5 w-5 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
