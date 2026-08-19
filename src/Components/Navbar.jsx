import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/logo.svg';

function Navbar( ) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between w-full py-8 px-6 sm:px-10 lg:px-16">
           <div>
             <img src={Logo} alt="Wireframe" className="w-full max-w-xs lg:max-w-sm px-8 lg:px-0"/>
            </div> 

           <div className="hidden md:flex gap-10 lg:gap-16">
           <a href="#" className="hover:underline text-white text-lg">Home</a>
           <a href="#" className="text-white text-lg">Services</a>
           <a href="#" className="text-white text-lg">Contact us</a>
           <a href="#" className="text-white text-lg">About us</a>
           </div>

           <div>
           <button className="hidden md:block bg-orange-500 text-white px-7 py-2 rounded-lg">Login</button>
           </div>

           <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
             {open ? <X size={28} /> : <Menu size={28} />}
           </button>


           {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-8 md:hidden z-50">
          <a href="#" className="text-white text-lg">Home</a>
          <a href="#" className="text-white text-lg">Services</a>
          <a href="#" className="text-white text-lg">Contact us</a>
          <a href="#" className="text-white text-lg">About us</a>
          <button className="bg-orange-500 text-white px-7 py-2 rounded-lg">Login</button>
        </div>
        )}

        </nav>
    );
}

export default Navbar;