import { COLORS, PROJECTS } from '../constants'
import { Tooltip } from '../components/Tooltip'

const Projects = () => {
  const BoldStyle = 'text-blue-900 dark:text-blue-300 font-semibold'

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1
        className={`text-4xl text-center py-2 mb-8 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} font-medium font-mono tracking-wide`}
      >
        Projects
      </h1>

      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className={`text-2xl mb-2 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
              {project.title}
            </h2>

            <p className={`mb-4 ${COLORS.TEXT} ${COLORS.DARK_TEXT} leading-7`}>
              {project.description}
            </p>

            <div className="mb-4">
              <span className={BoldStyle}>Technologies: </span>
              <span className={`${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>
                {project.technologies.join(', ')}
              </span>
            </div>

            <div className="flex gap-4">
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex} className="group relative">
                  <Tooltip label={link.label} position="top">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-200`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
