import Main from "./Main";
import Footer from "./Footer";


export default function Layouts ({children}) {
    return (
        <>
            <Main/>
                {children}
            <Footer/>
        </>
    )
}