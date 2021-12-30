function DashBoard() {
    return (
      <div className="container p-20 mx-auto bg-gray-100">
            <h1 className="text-3xl mb-4">Your Success Stories</h1>
            <div className="grid grid-cols-4 gap-10">

                <div className="">
                </div>
                <div className="">
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text"/> 
                </div>
                <div className="">
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text"/> 
                </div>
                <div className="">
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text"/> 
                </div>
            </div>
        </div>
    );
}

export default DashBoard;