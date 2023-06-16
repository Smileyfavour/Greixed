import Link from "next/link"
import {ImFacebook2} from 'react-icons/im';
import {BsInstagram,BsWhatsapp} from 'react-icons/bs'

export default function Footer() {
    const year = new Date().getFullYear();



    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.copyrightsBlock}>
            <small className={footerStyles.copyrights}>&copy;{year} Greixed Consult LLC</small>
            </div>

           
            <ul className={footerStyles.socialBlock}>
                <p>Follow or contact us on</p>
                <li>
                    <Link href='https://www.facebook.com/profile.php?id=100089064499317'><ImFacebook2 className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><BsInstagram className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='https://wa.me/+2349121366885'><BsWhatsapp className={footerStyles.icon}/></Link>
                </li>
            </ul>

            <ul className={footerStyles.legalBlock}>
                <li>
                    <Link href='/termsandConditions' className={footerStyles.legalText}>Terms and conditions</Link>
                </li>
            
                <li>
                    <Link href='/about-us' className={footerStyles.legalText}>About Us</Link>
                </li>
            </ul>
        </footer>
    )
}

const footerStyles = {
    footer:'w-full flex flex-col text-center  sm:flex-row justify-center items-center gap-2 sm:justify-between bg-[#42e9f5] py-6 px-4',
    copyrightsBlock:'flex items-center justify-end',
    copyrights:'text-blue-700',
    socialBlock:'flex flex-row md:flex-col items-center gap-2 md:gap-3 text-blue-800',
    icon:'w-6 h-6 md:w-10 md:h-10 text-blue-700',
    legalBlock:'flex flex-row md:flex-col gap-3',
    legalText:'text-blue-700 text-xs md:text-sm'
}

