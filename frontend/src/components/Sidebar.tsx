import { COLORS, SOCIALLINKS } from '../constants'
import { Tooltip } from './Tooltip'

interface LinkProps {
  href: string
  children: React.ReactNode
  icon: React.ReactNode
  label: string
}

const Link: React.FC<LinkProps> = ({ icon, href, children, label }) => {
  return (
    <div className="transition-all duration-200 hover:translate-x-1">
      <div className="m-2 border border-gray-200 dark:border-gray-700 p-2 md:p-3 rounded-lg hover:shadow-md">
        <Tooltip label={label} position="top" additionalClass="md:hidden">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {icon}
            <span className="text-sm font-medium hidden md:inline">{children}</span>
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

const Sidebar = () => {
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2
      className={`mt-4 mb-4 text-lg font-semibold ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} hidden md:block`}
    >
      {children}
    </h2>
  )

  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-1 p-2 md:p-6 max-w-xs mx-auto ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} rounded-xl shadow-sm`}
    >
      <SectionTitle>Contact</SectionTitle>
      {SOCIALLINKS.contact.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href} label={link.text}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Connect</SectionTitle>
      {SOCIALLINKS.connect.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href} label={link.text}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Follow</SectionTitle>
      {SOCIALLINKS.follow.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href} label={link.text}>
          {link.text}
        </Link>
      ))}

      <SectionTitle>Achievements</SectionTitle>
      {SOCIALLINKS.publications.map((link, index) => (
        <Link key={index} icon={link.icon} href={link.href} label={link.text}>
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
