function ContactUs() {
    return (
        <div className="mx-20 py-10">
            <h1 className="font-medium text-lg leading-9">Contact US</h1>

            <div className="grid grid-cols-3 gap-20 mt-10">
                <div className="gmap_canvas">
                    <iframe className="h-96 w-70 bg-gray-400" id="gmap_canvas" src="https://maps.google.com/maps?q=addis%20ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

                <div className="text-center">
                    <h3 className="font-medium">Email</h3>

                    <p className="text-xs font-thin">contact@lommi.org</p>

                    <h3 className="font-medium mt-7">Phone</h3>

                    <p className="text-xs font-thin">+251 990 90 90 90</p>

                    <h3 className="font-medium mt-7">Address</h3>
                    <p className="text-xs font-thin">
                        Pole SC, Ajndka Ydjvce, Ajdocsad Japospan 
                        Lcdu
                        Lonch Limaayt Bldg, 8th Floor
                        Addis Ababa, Ethiopia
                    </p>

                </div>

                <div className="">
                    <h1 className="mb-3">Get in touch with us</h1>
                    <form className="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-thin mb-2" >
                                Your Name *
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                        </div> 
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-thin mb-2">
                                Your Email *
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-thin mb-2">
                                Your Message 
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20" id="message" type="message"/>
                        </div> 
                        <div className="flex items-center justify-between">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-thin py-1 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
    </div>
)
}

export default ContactUs