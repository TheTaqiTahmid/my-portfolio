import { Building2, Calendar, GraduationCap, MapPin, Microscope, Wrench } from 'lucide-react'
import { COLORS, EXPERIENCE, EDUCATION } from '../constants'

const Experience = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2
        className={`text-3xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} py-4 font-medium font-burtons text-center`}
      >
        Experience
      </h2>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className={`border-l-4 ${COLORS.BORDER} ${COLORS.DARK_BORDER} pl-4 space-y-2`}
          >
            <div className="flex items-center gap-2">
              <Building2 className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`} size={24} />
              <h3 className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} text-xl font-semibold`}>
                {exp.title}
              </h3>
            </div>

            <div
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}
            >
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} space-y-1`}>
              {exp.responsibilities.map((resp, idx) => (
                <p key={idx} className="flex text-wrap items-start">
                  <span className="mr-2 mt-1 ml-4">*</span>
                  <span className="text-left">{resp}</span>
                </p>
              ))}
            </div>
            <div className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} space-y-1 flex items-start`}>
              <div className="flex text-wrap items-center gap-2">
                <Wrench size={20} />
                <span>{exp.tools}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2
        className={`text-3xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} mt-6 py-4 font-medium font-burtons text-center`}
      >
        Education
      </h2>

      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className={`border-l-4 ${COLORS.BORDER} ${COLORS.DARK_BORDER} pl-4 space-y-2`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`} size={24} />
              <h3 className={`text-xl font-semibold ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
                {edu.degree}
              </h3>
            </div>

            <div
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}
            >
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span>{edu.institution}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
            </div>
            <div className={`space-y-1 flex items-start ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>
              <div className="flex items-center gap-2">
                <Microscope size={20} />
                <span className={`text-left ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>{edu.thesis}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
