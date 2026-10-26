import { TeamLeftMembersList, TeamRightMembersList } from "../lists";

export function MeetOurTeam() {
  return (
    <section className="pt-5 flex flex-col md:flex-row">
      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-3 sm:w-[80%] sm:ml-auto sm:mr-auto md:grid md:grid-rows-4 md:grid-cols-1 md:h-115 md:">
        {TeamLeftMembersList.map((person) => (
          <TeamMember
            key={person.id}
            imgURL={person.imgURL}
            name={person.name}
            role={person.role}
          />
        ))}
      </div>

      <div className="bg-[url('../src/assets/images/teammiddleimage.png')] sm:w-[80%] md:h-115 md:w-135 lg:w-350 xl:w-600 w-[99%] ml-auto mr-auto rounded-3xl bg-cover bg-center bg-no-repeat h-60 mb-5 md:flex-col">
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
      </div>

      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-3 sm:w-[80%] sm:ml-auto sm:mr-auto md:grid md:grid-rows-4 md:grid-cols-1 md:h-115">
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
    <div className="group relative hover:[&_h6]:text-[#634832] overflow-hidden rounded-xl flex flex-col items-center md:mr-auto md:ml-auto py-3 gap-2 md:flex-row">
      {/* shine layer */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[400%]" />

      <div>
        <img src={imgURL} className="rounded-full" />
      </div>
      <div className="text-center">
        <h6 className="font-semibold mb-1 text-md w-30">{name}</h6>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}