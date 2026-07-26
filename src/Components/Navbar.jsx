function Navbar( ) {
    return (
        <nav className="flex items-center justify-between w-full py-8 px-16
        bg-black">
           <div>
            <p className="font bold text-2xl text-white">My Logo</p>
            </div> 

           <div className="flex gap-16">
           <a href="#" className="hover:underline text-white text-lg">Home </a>
           <p className="text-white text-lg">Services</p>
           <p className="text-white text-lg">Contact us</p>
           <p className="text-white text-lg">About us</p>
           </div>

           <div>
           <button className="bg-orange-500 text-white px-7 py-2 rounded-lg">Login</button>
           </div>

        </nav>
    );
}

export default Navbar;