import { COLORS, INTERESTS } from '../constants'

const Interests = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1
        className={`text-4xl text-center py-2 mb-8 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} font-medium font-mono tracking-wide`}
      >
        Interests & Hobbies
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {INTERESTS.map((interest, index) => (
          <div
            key={index}
            className={`group p-6 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ${
              interest.subInterests ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-colors duration-200`}
              >
                {interest.icon}
              </div>
              <h2 className={`text-2xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
                {interest.title}
              </h2>
            </div>

            <p className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} leading-7`}>{interest.description}</p>

            {interest.subInterests && (
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {interest.subInterests.map((subInterest, subIndex) => (
                  <div key={subIndex} className="p-4 bg-orange-100 dark:bg-gray-800 rounded-lg">
                    <h3
                      className={`text-lg font-semibold mb-2 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}
                    >
                      {subInterest.name}
                    </h3>
                    <p className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} text-sm leading-6`}>
                      {subInterest.details}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`mt-8 text-center ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>
        <p className="text-lg">
          These interests not only provide a creative outlet and personal enjoyment but also
          complement my professional growth in technology and engineering.
        </p>
      </div>
    </div>
  )
}

export default Interests
