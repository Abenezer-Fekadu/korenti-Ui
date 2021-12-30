
const SignUp = () => {
    return (
      <div className="mt-10 m-auto w-80 p-4 bg-gray-100">
          <h1 className="mb-3 text-lg text-center">Sign up</h1>
  
          <form className="w-full">

              <input className="mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name"/>
              <input className="mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email or Phone"/>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
  
              <div className="py-4 flex items-center justify-between mb-2 divider-y">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-1 px-8 rounded-2xl focus:outline-none focus:shadow-outline" type="button">
                      Sign U
                  </button>
              </div>
              <hr />
              <p className="leading-6 mt-4 text-center">
                  Don&apos;t Have An Account Yet? <span className="pl-2"><a href="#">Sign Up</a></span>
              </p>
  
          </form>
      </div>
    );
  };
  
  export default SignUp