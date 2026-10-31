import {CartPage} from "../components/cart/CartPage"
import {TopHeader} from "../components/shop/TopHeader"
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"

export function Cart(){
    return(
        <>  <Header />
            <TopHeader />
            <CartPage />
            <Footer />
        </>
)}