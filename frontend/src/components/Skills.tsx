import { COLORS, SKILLS } from '../constants'

const Skills = () => {
  return (
    <div>
      <h1 className={`text-2xl py-5 font-burtons ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
        Tools and Languages
      </h1>
      <div
        className={`grid grid-cols-4 gap-6 text-md py-5 leading-8 ${COLORS.TEXT} ${COLORS.DARK_TEXT} mx-auto max-w-2xl md:text-xl`}
      >
        {SKILLS.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
