import { Camera, Plane, Film, Server, Cpu, Trophy, Car, Gamepad2 } from "lucide-react";
import { COLORS } from "../constants";

const Interests = () => {
  const interests = [
    {
      title: "Travelling",
      icon: <Plane size={32} />,
      description: "Exploring new places, experiencing different cultures, and creating lasting memories through adventures around the world. From scenic landscapes to bustling cities, every journey is an opportunity to learn and grow."
    },
    {
      title: "Photography",
      icon: <Camera size={32} />,
      description: "Capturing moments and perspectives through the lens. Particularly interested in landscape and street photography, always looking to improve composition skills and trying new techniques."
    },
    {
      title: "Movies & Shows",
      icon: <Film size={32} />,
      description: "Passionate about cinema across various genres and cultures. Enjoy analyzing cinematography, storytelling techniques, and discovering hidden gems from different parts of the world."
    },
    {
      title: "Homelab",
      icon: <Server size={32} />,
      description: "Managing a personal homelab setup for experimenting with self-hosted services, networking configurations, and learning about system administration in a hands-on environment."
    },
    {
      title: "New Technologies",
      icon: <Cpu size={32} />,
      description: "Keeping up with the latest technological advancements, particularly in cloud computing, automation, and emerging DevOps tools. Enjoy experimenting with new frameworks and platforms."
    },
    {
      title: "Playing Video Games",
      icon: <Gamepad2 size={32} />,
      description: "Enthusiastic gamer with a deep appreciation for interactive storytelling and virtual worlds. Enjoy exploring diverse genres from immersive RPGs to strategic multiplayer games."
    },
    {
      title: "Sports",
      icon: <Trophy size={32} />,
      description: "Avid sports enthusiast following multiple disciplines:",
      subInterests: [
        {
          name: "Football",
          details: "Following major leagues and international tournaments, appreciating the tactical aspects and team dynamics of the beautiful game."
        },
        {
          name: "Cricket",
          details: "Enjoying both test matches and limited-overs formats, following international competitions and analyzing game strategies."
        },
        {
          name: "Formula 1",
          icon: <Car size={24} />,
          details: "Following the high-speed world of F1, keeping up with team developments, race strategies, and technical innovations in motorsport."
        }
      ]
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className={`text-4xl text-center py-2 mb-8 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} font-medium font-mono tracking-wide`}>
        Interests & Hobbies
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className={`group p-6 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ${interest.subInterests ? 'md:col-span-2' : ''}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-colors duration-200`}>
                {interest.icon}
              </div>
              <h2 className={`text-2xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
                {interest.title}
              </h2>
            </div>
            
            <p className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} leading-7`}>
              {interest.description}
            </p>

            {interest.subInterests && (
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {interest.subInterests.map((subInterest, subIndex) => (
                  <div key={subIndex} className="p-4 bg-orange-100 dark:bg-gray-800 rounded-lg">
                    <h3 className={`text-lg font-semibold mb-2 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
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
          These interests not only provide a creative outlet and personal enjoyment but also complement my professional growth in technology and engineering.
        </p>
      </div>
    </div>
  );
};

export default Interests;