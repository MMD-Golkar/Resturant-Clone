import { TeamLeftMembersList, TeamRightMembersList } from "../lists";
import { ScrollAnimation } from "../components/ScrollAnimation";

export function MeetOurTeam() {
  return (
    <section id="team" className="scroll-mt-24 flex flex-col pt-5 md:flex-row md:items-center md:justify-center md:gap-4">
      <div className="mx-auto flex w-[90%] flex-col sm:grid sm:w-[80%] sm:grid-cols-3 sm:grid-rows-2 md:mx-0 md:w-1/4 md:grid-cols-2 md:grid-rows-2">
        {TeamLeftMembersList.map((person) => (
          <TeamMember
            key={person.id}
            imgURL={person.imgURL}
            name={person.name}
            role={person.role}
          />
        ))}
      </div>

      <div className="mx-auto mb-5 h-60 w-[95%] rounded-3xl bg-[url('../src/assets/images/teammiddleimage.png')] bg-cover bg-center bg-no-repeat sm:w-[80%] md:mx-0 md:min-h-96 md:h-auto md:w-1/2 md:max-w-2xl">
        <ScrollAnimation direction="up">
          <div className="flex flex-col items-center pb-10 text-black w-[90%] ml-auto mr-auto pt-10">
            <span className="border  w-18 border-black lg:w-23"></span>
            <p className="text-md md:text-lg text-white font-semibold tracking-widest lg:text-xl">
              Our Team
            </p>
            <span className="border mt-0.5 w-18 border-black lg:w-23"></span>
            <h4 className="text-4xl font-['Fredericka_the_Great'] md:text-center md:text-5xl lg:mt-10 lg:text-6xl mb-5 text-white mt-3">
              Meet Our Team
            </h4>
            <p className="text-md text-white w-[90%] text-center md:text-sm md:mt-10 lg:text-lg">
              From the baristas to the chefs, the Brewnora team is friendly,
              skilled, and passionate about making each visit warm and memorable
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="mx-auto flex w-[90%] flex-col sm:grid sm:w-[80%] sm:grid-cols-3 sm:grid-rows-2 md:mx-0 md:w-1/4 md:grid-cols-2 md:grid-rows-2">
        {TeamRightMembersList.map((person) => (
          <TeamMember
            key={person.id}
            imgURL={person.imgURL}
            name={person.name}
            role={person.role}
          />
        ))}
      </div>
    </section>
  );
}

export function TeamMember({ imgURL, name, role }) {
  return (
    <div className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl py-3 hover:[&_h6]:text-[#634832] md:mx-auto md:min-w-0 lg:flex-row">
      {/* shine layer */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[400%]" />
      
      <div className="shrink-0">
        <img src={imgURL} alt={name} className="h-12 w-12 shrink-0 rounded-full object-cover lg:h-16 lg:w-16" />
      </div>
      <div className="w-full min-w-0 text-center">
        <h6 className="mb-1 w-full text-sm font-semibold lg:text-base">{name}</h6>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}
