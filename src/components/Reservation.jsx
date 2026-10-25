import { User, Mail, Phone, Group} from "../assets/icons";

export function Reservation() {
  return (
    <section className="bg-black pb-10">
      <div className="flex flex-col items-center pt-15 md:pt-55 text-white">
        <span className="border mt-1 w-20 border-[#967259]"></span>
        <p className="text-md tracking-widest">RESERVATION</p>
        <span className="border mt-1 w-20 border-[#967259]"></span>
        <h4 className="text-2xl font-['Fredericka_the_Great'] text-gray-200 mt-3">
          Book A Table
        </h4>
      </div>
      <form className="flex flex-col   w-[95%] lg:w-[80%] ml-auto mr-auto [&_input]:text-black border-[#634832] rounded-3xl mt-5 [&_input]:w-full [&_input]:ml-auto [&_input]:mr-auto border-2 py-15 text-white [&_input]:bg-white [&_input]:placeholder:text-gray-500 [&_input]:rounded-lg [&_input]:py-3 [&_input]:px-5">
        <div className="relative md:grid md:grid-cols-3 md:grid-rows-2 w-[80%] ml-auto mr-auto flex flex-col gap-5 [&_div]:flex [&_div]:justify-end [&_div]:items-center">
          <div>
            <input type="text" placeholder="Your Name" className="pr-10" />
            <User />
          </div>
          <div>
            <input type="email" placeholder="Your Email" className="pr-10" />
            <Mail />
          </div>
          <div>
            <input type="tel" placeholder="Phone Number" className="pr-10" />
            <Phone />
          </div>
          <div>
            <input type="number" placeholder="Person" className="pr-10" />
            <Group />
          </div>
          <div>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              className="[&::-webkit-calendar-picker-indicator]:-mr-2 [&::-webkit-calendar-picker-indicator]:size-5 [&::-webkit-calendar-picker-indicator]:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2220%22%20height=%2220%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%236b7280%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Crect%20x=%223%22%20y=%224%22%20width=%2218%22%20height=%2218%22%20rx=%222%22/%3E%3Cpath%20d=%22M16%202v4M8%202v4M3%2010h18%22/%3E%3C/svg%3E')] [&::-webkit-calendar-picker-indicator]:bg-contain [&::-webkit-calendar-picker-indicator]:bg-no-repeat [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#634832] hidden md:inline hover:text-[#634832] duration-500 ease-in-out hover:bg-white w-full ml-auto mr-auto shadow-[0px_5px_10px_0px_rgba(211,162,69,0.6)] py-3 rounded-lg"
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#634832] md:hidden hover:text-[#634832] duration-500 ease-in-out hover:bg-white mt-5 w-[80%] ml-auto mr-auto shadow-[0px_5px_10px_0px_rgba(211,162,69,0.6)] py-3 rounded-lg"
        >
          BOOK NOW
        </button>
      </form>
    </section>
  );
}
