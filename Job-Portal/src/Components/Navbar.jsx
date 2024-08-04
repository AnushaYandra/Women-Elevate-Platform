import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaChartBar, FaXmark } from "react-icons/fa6";
import { auth, db } from "../Components/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        return new Promise((resolve, reject) => {
          auth.onAuthStateChanged(async (user) => {
            if (user) {
              const docRef = doc(db, "Users", user.uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                const userData = docSnap.data();
                setUserDetails(userData);
                resolve(userData);
              } else {
                //console.log("No such document!");
                reject("No user data found");
              }
            } else {
              //console.log("User is not logged in");
              reject("User is not logged in");
            }
          });
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async() => {
        try{
            await auth.signOut();
            navigate("/Login");
        }catch(error){
            console.log(error.message);
        }
    }

    const navItems = [
        {path : "/", title: "Start a Search"},
        {path : "/about-us", title: "About us"},
        {path : "/my-job", title: "My Jobs"},
        {path : "/salary", title: "Salary Estimate"},
        {path : "/post-job", title: "Post a Job"}
    ]

    return (
    <div>
        <header className=''>
            <nav className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-4 flex justify-between items-center'>
                {/* Portal Logo */}
                <a href = "/" className='flex items-center gap-2 text-3xl'>
                <img src= "/images/Logo.png"
                className='h-8 w-8'></img>
                <span className='font-bold text-dark-green border-b-2 border-dashed border-dark-brown'>
                Women Elevate
                </span>
                </a>

                {/* Nav Items for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({path, title}) => (
                             <li key = {path} className='hover:text-dark-brown text-base font-medium'>
                                <NavLink
                                  to={path}
                                  className={({ isActive}) => isActive ? "text-dark-brown font-bold border-b-2 border-dashed border-dark-brown" : ""}> {title}
                                </NavLink>
                             </li>
                        ))
                    }
                </ul>

                {/* SignUp and LogIn*/}
                <>
                   {userDetails? (
                    <div className='text-base font-medium hidden lg:flex items-center gap-3'>
                      <h2 className='font-bold text-dark-brown text-lg border-b-2 border-dark-brown border-dashed'> Hey {userDetails.firstName}!</h2>
                      <button onClick={handleLogout} className="py-1 px-5 mr-5 rounded button shadow-custom" >Log out</button>
                    </div>
                   ) : (
                    <div className='text-base font-medium hidden lg:block'>
                      <Link to= "/Login" className="py-1 px-5 mr-5 rounded button shadow-custom" >Log in / Sign up</Link>
                    </div>
                   )}
                </>

                {/* Mobile Menu*/}
                <div className='md:hidden block'> 
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? 
                            <FaXmark style = {{color : '#9c6644'}} className='w-5 h-5'/> : 
                            <FaChartBar style = {{color : '#9c6644'}} className='w-5 h-5'/>
                        }
                    </button>
                </div>

            </nav>

            {/* nav items for mobile*/}
            <div className={`px-4 py-4 ${isMenuOpen? "" : "hidden" }`}>
                <ul className='bg-cream px-4 py-4 rounded-xl'>
                    {
                        navItems.map(({path, title}) => (
                             <li key = {path} className='text-base font-medium hover:text-dark-brown py-1'>
                                <NavLink
                                  to={path}
                                  className={({ isActive}) => isActive ? "text-dark-brown font-bold" : ""}> {title}
                                </NavLink>
                             </li>
                        ))
                    }

                    <li className='py-1 hover:text-dark-brown text-base font-medium'><Link to= "/Login" >Log in</Link></li>
                    <li className='py-1 hover:text-dark-brown text-base font-medium'><Link to= "/Signup" >Sign up</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Navbar
