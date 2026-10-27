import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { AboutUs } from "../components/AboutUs"
import {Menu} from "../components/Menu"
import {Category} from "../components/category"
import { BestSeller } from "../components/BestSeller"
import {Reservation} from "../components/Reservation"
import {OfferMenu} from "../components/OfferMenu"
import {WhyUs} from "../components/WhyUs"
import {MeetOurTeam} from "../components/MeetOurTeam"
import {HappyCustomers} from "../components/HappyCustomers"
export default function Homepage() {
  return (

    <>
        <Header />
        <HeroSection />
        <AboutUs />
        <Menu />
        <Category />
        <BestSeller />
        <Reservation />
        <OfferMenu />
        <WhyUs />
        <MeetOurTeam />
        <HappyCustomers />
    </>
)}
