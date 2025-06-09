import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.webp';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Service', path: '/service' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="LeadKart.ai" className="h-8" />
        </Link>

        {/* desktop links */}
        <ul className="hidden gap-8 font-medium lg:flex">
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-700'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/download"
          className="hidden rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg lg:inline-block"
        >
          DOWNLOAD APP
        </Link>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="grid place-content-center rounded-md p-2 lg:hidden"
        >
          {open ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            /* hamburger icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="space-y-2 bg-white px-6 pb-6 lg:hidden">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium transition hover:bg-primary/10 ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          <Link
            to="/download"
            onClick={() => setOpen(false)}
            className="block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow transition hover:shadow-lg"
          >
            DOWNLOAD APP
          </Link>
        </div>
      )}
    </header>
  );
}
