import { ScriptProps } from "next/script";
import Footer from "./Footer";
import Header from "./header";

function Layout ({children}: ScriptProps){
    return(
        <>
        <Header/>
        { children }
        <Footer/>
        </>
    )
}

export default Layout