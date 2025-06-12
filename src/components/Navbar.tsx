"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { route, routeDropdown } from "@/data/routeData";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <div className="bg-blue-400 text-sm">
      <nav className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-1 font-semibold">
          <img src="logo-arquividrios.png" alt="logo" className="h-15" />
          <span>Arquividriossas</span>
        </div>

        {/* Hamburger menu (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="#" className="text-white">
              Inicio
            </Link>
          </li>

          {routeDropdown.map((item) => (
            <li
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-white">
                {item.title}
                {openDropdown === item.title ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {openDropdown === item.title && (
                <div className="absolute top-5 left-0 w-[640px] bg-white text-black shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4 z-50">
                  {item.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.items.map((subItem, index) => (
                        <Link
                          key={index}
                          href={section.route[index].href}
                          className="block text-sm py-1 text-black hover:text-blue-400 transition"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {item.footer && (
                    <div className="col-span-2 pt-4 text-gray-500 text-sm border-t">
                      <p className="mt-2">
                        <strong>¿Quieres usar nuestros servicios?</strong>
                      </p>
                      <p>{item.footer}</p>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}

          {route.map((item) => (
            <li key={item.title}>
              <Link className="text-white" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg z-40 md:hidden px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">Inicio</Link>
              </li>

              {routeDropdown.map((item) => (
                <li key={item.title}>
                  <button
                    className="flex items-center justify-between w-full font-medium"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    {openDropdown === item.title ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {openDropdown === item.title && (
                    <div className="mt-2 pl-4 border-l border-gray-300 flex flex-col gap-3">
                      {item.sections.map((section, idx) => (
                        <div key={idx}>
                          {section.items.map((subItem, index) => (
                            <Link
                              key={index}
                              href={section.route[index].href}
                              className="block text-sm py-1"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {item.footer && (
                        <p className="text-gray-500 text-sm mt-2 border-t pt-2">
                          <strong>¿Comenzando ahora?</strong> {item.footer}
                        </p>
                      )}
                    </div>
                  )}
                </li>
              ))}

              {route.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
              <Link
                href="https://wa.me/+573245833514"
                rel="noopener noreferrer"
                target="_blank"
                className="text-black"
              >
                Cotizar
              </Link>
            </ul>
          </div>
        )}

        {/* Acciones */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/+573245833514"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-white text-sky-400 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-50 transition"
          >
            Cotizar
          </Link>
        </div>
      </nav>
    </div>
  );
}
