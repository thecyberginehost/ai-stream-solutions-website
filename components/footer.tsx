import Link from "next/link"

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "All Services", href: "/services" },
        { label: "Local Business", href: "/services/local" },
        { label: "Enterprise", href: "/services/enterprise" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "How It Works", href: "/process" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Location Banner */}
        <div className="text-center mb-10 pb-8 border-b border-slate-700">
          <p className="text-slate-300 text-lg">
            Serving <span className="text-white font-semibold">Wayne, Passaic County, and North Jersey</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">AI Stream Solutions</h3>
            <p className="text-slate-400 text-sm mb-4">
              Managed Automation Service Provider (MASP™) bringing enterprise-grade automation to local businesses.
            </p>
            <p className="text-slate-400 text-sm">
              Based in Wayne, NJ
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} AI Stream Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
