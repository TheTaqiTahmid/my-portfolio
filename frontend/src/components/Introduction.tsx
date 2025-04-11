import { Linkedin, Github, Award } from 'lucide-react'
import { COLORS } from '../constants'
import { Tooltip } from './Tooltip'

const Introduction = () => {
  const BoldStyle = 'text-blue-900 dark:text-blue-300 font-semibold'

  const socialLinks = [
    {
      icon: <Linkedin size={32} />,
      href: 'https://www.linkedin.com/in/taqi-tahmid/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={32} />,
      href: 'https://github.com/TheTaqiTahmid',
      label: 'GitHub',
    },
    {
      icon: <Award size={32} />,
      href: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/3da54db2-f994-4148-a0ca-705ae1d748cd-mohammad-taqi-tahmid-094cf8b4-0db8-4a9f-b787-b4efbb2a90fe-certificate.pdf',
      label: 'CKA Certificate',
    },
  ]

  return (
    <div className="text-center p-4 max-w-4xl mx-auto">
      <h1
        className={`text-5xl py-2 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} font-medium font-mono tracking-wide`}
      >
        Taqi Tahmid
      </h1>

      <h2 className={`text-2xl py-2 font-burtons ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
        Test Automation and DevOps Engineer
      </h2>

      <div
        className={`text-md py-5 ${COLORS.TEXT} ${COLORS.DARK_TEXT} leading-8 md:text-xl space-y-4`}
      >
        <p>
          I am a <span className={BoldStyle}>DevOps</span> and{' '}
          <span className={BoldStyle}>Test Automation</span> engineer with a{' '}
          <span className={BoldStyle}>certified Kubernetes Administrator (CKA)</span> certification,
          specializing in managing Kubernetes clusters and cloud infrastructure. Currently working
          at Ericsson in Finland as a DevOps Engineer.
        </p>

        <p>
          I bring four years of industry experience in designing CI/CD pipelines and test automation
          for diverse applications and architectures. I hold a Bachelor's degree from Khulna
          University of Engineering & Technology (KUET) and a Master's degree from Tampere
          University. My expertise spans across the entire DevOps lifecycle, from cluster management
          and infrastructure automation to implementing robust testing frameworks.
        </p>
      </div>

      <div className="flex justify-center gap-8 py-3">
        {socialLinks.map((link, index) => (
          <div key={index} className="group relative">
            <Tooltip label={link.label} position="top">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}  hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-200`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Introduction
