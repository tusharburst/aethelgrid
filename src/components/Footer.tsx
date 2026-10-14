import { Twitter, Instagram } from 'lucide-react';
import DiscordLogo from '../icons/DiscordLogo'; // Menggunakan kembali ikon Discord

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/aethelgrid' },
    { icon: Instagram, href: 'https://www.instagram.com/aethelgrid/' },
  ];

  const linkSections = [
    {
      title: 'Products',
      links: [
        { name: 'Bot Hosting', href: '/discord' },
        { name: 'Minecraft Servers', href: '/minecraft' },
        { name: 'VPS Hosting', href: '/vps' },
        { name: 'Pricing', href: '/#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Features', href: '/#services' },
        { name: 'Contact & Support', href: '/support' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/support' },
        { name: 'Support Center', href: '/support' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Status Page', href: '/status' },
      ],
    },
  ];

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* PERBAIKAN: Mengatur grid untuk mobile, tablet, dan desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* === Kolom 1: Logo, Deskripsi, dan Sosial Media === */}
          {/* Di tablet (md), kolom ini akan mengambil lebar penuh (2 kolom) */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="/" className="mb-4 inline-block" aria-label="AethelGrid home">
              <img src="/aethelgrid-logo.svg" alt="AethelGrid logo" className="h-10 w-auto" />
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Hosting for bots, Minecraft servers, and VPS workloads. Built for people who like to build.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://discord.gg/EcNgZyJM9j" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <DiscordLogo className="w-6 h-6" />
              </a>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* === Kolom Link Navigasi === */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === Garis Pemisah dan Copyright === */}
        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AethelGrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
