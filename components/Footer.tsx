import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="#hero" className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-lg">vHackBotz</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Innovative tech solutions for businesses of all sizes. We're dedicated to transforming ideas into reality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Works", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "AI Solutions", "Cloud Services"].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Innovation Street, Tech Valley, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">info@vhackbotz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} vHackBotz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}