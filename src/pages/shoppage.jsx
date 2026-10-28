import { TopHeader } from "../components/shop/TopHeader";
import { Header } from "../components/Header";
import {Footer} from "../components/Footer"
import {SearchedProducts} from "../components/shop/SearchedProducts"

export default function Shop({ user, setUser }) {
  return (
    <>
      <Header />
      <TopHeader user={user} setUser={setUser} />
      <SearchedProducts user={user} setUser={setUser}/>
      <Footer />
    </>
  );
}
