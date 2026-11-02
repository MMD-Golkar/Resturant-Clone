import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import { Menu } from "../components/Menu";
import { Category } from "../components/category";
import { BestSeller } from "../components/BestSeller";
import { Reservation } from "../components/Reservation";
import { OfferMenu } from "../components/OfferMenu";
import { WhyUs } from "../components/WhyUs";
import { MeetOurTeam } from "../components/MeetOurTeam";
import { HappyCustomers } from "../components/HappyCustomers";
import { Ourblog } from "../components/Ourblog";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Homepage({user , setUser}) {
  
  return (
    <>
      <Header />
      <HeroSection user={user} setUser={setUser}/>
      <AboutUs />
      <Menu />
      <Category setUser={setUser} />
      <BestSeller />
      <Reservation />
      <OfferMenu />
      <WhyUs />
      <MeetOurTeam />
      <HappyCustomers />
      <Ourblog />
      <Footer />
      <ScrollToTop />
    </>
  );
}
