
import { Link } from "react-router-dom";
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"


import { useState } from 'react'
export default function Navbar() {


    const [show, setShow] = useState(false)

    const handleShow = () => {
     setShow(prev=>!prev)

    }

    const handleClose = () => {
        setShow(false)
    }


    const navLinks = [{ link: 'Home', to: "/" }, { link: 'Services', to: "/#services" }, { link: 'About', to: "/#Building-trust" }, { link: 'Contact', to: "/#contact" },

    ]
    return (
<>
        <div className=' bg-white md:fixed  top-0 width-full shadow    z-10  px-6 w-full md:px-24'>

            <div className="  mx-auto flex  justify-between  w-full items-center   py-3  ">

                <div className='text-6xl '>
                    <Link href='/'>
                        <img src="/jvec_logo.png"
                            width={60}
                            height={60}
                            alt="image" />

                    </Link>
                </div>


                <div className=' hidden  md:flex  flex-col md:flex-row text-red-300 justify-end'>
                    {navLinks.map((links) => {
                        return (


                            <Link href={links.to} className='text-greyDark hover:border-b-2 hover:border-b-darkestBlue px-6   font-bold tracking-wider text-base ' key={links} >{links.link}</Link>


                        )
                    })}


                </div>



                <div className="  md:flex callarea shadow-lg rounded-3xl px-3 py-2 border-2 border-darkestBlue">
 <p className="'text-greyDark  text-[20px] font-bold tracking-wider ">Call Now: +234-903-577-8224</p>

                </div>

                {!show ?  (< div className=' flex items-center    text-light justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg  text-darkestBlue transition  ease-in duration-500 rounded-4xl w-8 h-8 " onClick={handleShow} /></div>) : ( < div className=' flex items-center     justify-center md:hidden'><AiOutlineClose className="font-bold text-lg  text-darkestBlue transition duration-500  rounded-4xl  w-8 h-8 " onClick={handleClose} /></div>)}


            </div>







        {show && (<div className=' bg-blue flex md:hidden transition-all  bg-white flex-col py-6 z-100  text-black  items-center'>
                   
                    {navLinks.map((links) => {
                        return (


                            <Link href={links.to} className='text-greyDark hover:border-b-2 py-6 z-100  font-bold tracking-wider text-base ' onClick={handleClose}key={links} >{links.link}</Link>


                        )
                    })}


                </div>)}
            




        </div>


       





        </>


    )
}
