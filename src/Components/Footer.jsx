import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const serviceLinks = [
  { label: "Email Marketing", to: "/" },
  { label: "Campaigns", to: "/" },
  { label: "Branding", to: "/" },
];

const furnitureLinks = [
  { label: "Beds", to: "/" },
  { label: "Chair", to: "/" },
  { label: "All", to: "/" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

const linkClass =
  "text-gray-600 transition-colors duration-200 hover:text-primary";

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="mb-4 text-base font-semibold text-primary">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="section-container px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Logo and description */}
          <div className="sm:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight text-gray-900"
            >
              Panto
            </Link>
            <p className="mt-4 max-w-md leading-relaxed text-gray-600">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>

            {/* Social icons */}
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-900 hover:text-white"
                  >
                    <Icon className="text-base" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Furniture */}
          <FooterColumn title="Furniture">
            <ul className="space-y-3">
              {furnitureLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Follow us */}
          <FooterColumn title="Follow Us">
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} flex items-center gap-3`}
                  >
                    <Icon className="text-sm" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Panto. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;