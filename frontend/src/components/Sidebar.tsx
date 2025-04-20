import { Aperture, Award, Github, Instagram, Linkedin, Mail, Globe, ScrollText } from 'lucide-react'
import { COLORS } from '../constants'

interface LinkProps {
  href: string
  children: React.ReactNode
  icon: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ icon, href, children }) => {
  return (
    <div className="transition-all duration-200 hover:translate-x-1">
      <div className="mb-2 border border-gray-200 dark:border-gray-700 p-3 rounded-lg hover:shadow-md">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {icon}
          <span className="text-sm font-medium hidden md:inline">{children}</span>
        </a>
      </div>
    </div>
  )
}

const Sidebar = () => {
  const iconClass = 'text-blue-600 dark:text-blue-400 mr-3'

  const links = {
    contact: [
      {
        icon: <Mail size={20} className={iconClass} />,
        href: 'mailto:taqitahmid@gmail.com',
        text: 'Email Me',
      },
      {
        icon: <Globe size={20} className={iconClass} />,
        href: 'https://portfolio.tahmidcloud.com/',
        text: 'My Website',
      },
    ],
    connect: [
      {
        icon: <Linkedin size={20} className={iconClass} />,
        href: 'https://www.linkedin.com/in/taqi-tahmid/',
        text: 'LinkedIn',
      },
      {
        icon: <Github size={20} className={iconClass} />,
        href: 'https://github.com/theTaqiTahmid',
        text: 'GitHub',
      },
    ],
    follow: [
      {
        icon: <Aperture size={20} className={iconClass} />,
        href: 'https://500px.com/p/taqi1203050?view=photos',
        text: 'My Photography',
      },
      {
        icon: <Instagram size={20} className={iconClass} />,
        href: 'https://www.instagram.com/tahmidtaqi/',
        text: 'Instagram',
      },
    ],
    publications: [
      {
        icon: <Award size={20} className={iconClass} />,
        href: 'https://www.credly.com/badges/abb049aa-d811-4954-a460-8c7351ceba3e/public_url',
        text: 'CKA Certification',
      },
      {
        icon: <ScrollText size={20} className={iconClass} />,
        href: 'https://scholar.google.fi/citations?user=w3BoP0AAAAAJ&hl=en',
        text: 'Google Scholar',
      },
    ],
  }

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className={`mt-6 mb-4 text-lg font-semibold ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
      {children}
    </h2>
  )

  return (
    <div
      className={`p-6 max-w-xs mx-auto ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} rounded-xl shadow-sm`}
    >
      <SectionTitle>Contact</SectionTitle>
      {links.contact.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Connect</SectionTitle>
      {links.connect.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Follow</SectionTitle>
      {links.follow.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Achievements</SectionTitle>
      {links.publications.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
