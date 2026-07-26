function Footer() {
    return (
        <section className="py-16 bg-black">
            <div className=" flex flex-col px-32">
                {/*top*/}
                <div className="flex justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-lg font-medium">About Us</h1>
                        <p className="max-w-sm text-gray-300">We’re a team of designers, engineers, and innovators building AI tools that empower anyone to turn imagination into stunning visuals—faster, smarter, and effortlessly.</p>
                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-orange-500 text-lg font-medium">Useful links</h1>
                        <p className="text-gray-300">About</p>
                        <p className="text-gray-300">Services</p>
                        <p className="text-gray-300">Team</p>
                        <p className="text-gray-300">Prices</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-orange-500 text-lg font-medium">Help</h1>
                        <p className="text-gray-300">Customer Support</p>
                        <p className="text-gray-300">Terms & Conditions</p>
                        <p className="text-gray-300">Privacy Policy</p>
                        <p className="text-gray-300">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-orange-500 text-lg font-medium">Connect With Us</h1>
                        <p className="text-gray-300">27 Division St, New York,NY 10002, USA</p>
                        <p className="text-gray-300">+123 324 2653</p>
                        <p className="text-gray-300">username@mail.com</p>
                       
                    </div>
                </div>
                {/*divider*/}
                <hr className="border-orange-900 my-8" />
                {/*bottom*/}
                <div className="flex justify-between">
                    <p className="text-white text-sm">© 2024 All Right Reserved.</p>
                    <div className="flex gap-2">
                       <div className="w-5 h-5 rounded-full border border-orange-500"></div>
                       <div className="w-5 h-5 rounded-full border border-orange-500"></div>
                       <div className="w-5 h-5 rounded-full border border-orange-500"></div>
                       <div className="w-5 h-5 rounded-full border border-orange-500"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;