import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu} from 'react-icons/hi';
import { useRouter } from 'next/router';
import { icons } from 'react-icons';

export default function MainNav() {
    const [showMobileNav,setShowMobileNav] = useState(false);
    // const [responsiveMenuItems,setResponsiveMenuItems]=useState(true);
 
    const router = useRouter();

   

    return (
        <div>
            <nav className={mainStyles.navBar} id='mainNav' style={{
                backgroundColor:router.asPath.split('/').includes('/') ? '#ddd6fe' : null,
            }}>
            <ul className={mainStyles.navSection}>
                <li className={mainStyles.responsiveMenuItems}>
                     <Link href='/' className={mainStyles.brandName}>Greixed Consult</Link>
                </li>

                <li>
                    <Image width={30} height={38} src='/greixed logo (4).png' alt='greixed consult'/>
                </li>

            </ul>

          
      
            
            <ul className={mainStyles.navSection}>
            <li className={mainStyles.responsiveMenuItems}>
                    <Link href='/'>Home</Link>
                </li>

                <li className={mainStyles.responsiveMenuItems}>
                    <Link href='/courses'>Courses we teach</Link>
                </li>

                <li>
                <HiMenu
                className={mainStyles.menu}
                onClick={() => setShowMobileNav(true)}/>
                </li>
            </ul>
            </nav>

            <nav className={mainStyles.mobileNav} 
            style={{display:showMobileNav ? 'block' : 'none'}}>
            <HiMenu
            className={mainStyles.mobileMenuClose}
            onClick={() => setShowMobileNav(false)}
            />

            <div className={mainStyles.halfScreenMenuBlock}>
                <ul className={mainStyles.mobileMenuItems}>
                    <li className={mainStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/' onClick={() =>setShowMobileNav (false)} className={mainStyles.iconText}>Home</Link>
                        </span>
                       </p>
                    </li>
                
                    <li className={mainStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/about-us' onClick={() =>setShowMobileNav (false)} className={mainStyles.iconText}>About Us</Link>
                        </span>
                       </p>
                    </li>
                    <li className={mainStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/courses' onClick={() =>setShowMobileNav (false)} className={mainStyles.iconText}>Courses we teach</Link>
                        </span>
                       </p>
                    </li>
                 
                    <li className={mainStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/support' onClick={() =>setShowMobileNav (false)} className={mainStyles.iconText}>support</Link>
                        </span>
                       </p>
                    </li>
                  
                </ul>    
            </div>
        </nav>
        </div>
    )
}

const mainStyles= {
    navBar:'h-[60px] flex flex-row justify-between items-center px-3 bg-[#42e9f5] border border-gray-200 shadow-md ',
    navSection:'flex flex-row justify-between space-x-5',
    brandName:'font-reading  text-4xl text-blue-700  font-bold ',
    halfScreenMenuBlock:'h-screen min-w-[300px] max-w-[420px] flex flex-col bg-blue-950 fixed right-0 top-0  ',
    mobileMenuItem:'flex flex-row justify-center ',
    mobileMenuClose:'text-blue-500 w-[38px] h-[38px]  fixed top-2 right-2 z-10',
    iconText:' lg:text-blue-300 text-blue-300 hover:text-white ',
    mobileMenuItems:'flex flex-col  gap-20 pt-[60px] pr-4 pl-2',
    responsiveMenuItems:'hidden md:block lg:none text-blue-500 hover:text-blue-800',
    menu:'block md:hidden w-[38px] h-[38px] text-blue-500',
    mobileNav:'h-screen w-full bg-/100 absolute top-0 left-0',
    mobileMenuText:'text-[20px] font-reading text-gray-400',
    mobileBottomItems:'flex flex-col gap-2 px-3 pb-3',






  
  
    
    
   
   
  
  
   
    // // authBtn:'block w-full h-[58px] flex flex-row justify-between items-center px-3 bg-pink-400 rounded-md',
    // btnItems:'text-xl',
    // createAcctBtn:'',
    // icon:'icons:flex flex-col gap-[none]',
    // navPicture:'flex flex-col justify-center items-cnter',
}