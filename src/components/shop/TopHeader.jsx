import {ScrollAnimation} from "../ScrollAnimation"
export function TopHeader({user}) {
 
  return (
    <section
      style={{ backgroundImage: "url('../shop-header.png')" }}
      className="h-70 w-full sm:pr-7 md:pr-25 bg-cover bg-top max-[767px]:-mt-200 bg-no-repeat text-white flex flex-col justify-center items-center text-center"
    >
      <ScrollAnimation direction="left">
        <h1 className="font-['Fredericka_the_Great'] text-3xl mb-5 md:text-4xl lg:text-5xl xl:text-6xl">Archives: Shop</h1>
        <p className="mb-5 md:font-semibold md:text-lg">This is where you can browse products in this store.</p>
        <div>
            <p className="mb-5 md:font-semibold md:text-lg">Search query for:</p>
            <p className="md:font-semibold md:text-lg">Home » {user.searchfor}</p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
