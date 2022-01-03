import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'



  
const Donate = () => {

    return (
      <div className="mt-10 m-auto w-2/5 p-2 bg-gray-100">

        <h1 className="text-lg text-center">Donate</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 divide-x">
            <div className="px-2">
                <p className="text-center text-xs">
                    Elit sapien viverra egestas quis leo id.
                </p>
                <img src="/images/1.jpg" alt="Doctors image" className="md:h-4/5 w-full object-cover mb-2 rounded"/>
            </div>

            <div className="m-2 px-3">
                <form className="m-2">
                        <div className="mb-2">
                            <label className="block text-gray-700 text-xs font-thin mb-2" >
                            Full Name
                            </label>
                            <input className="h-7 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"/>
                        </div> 

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-gray-700 text-xs font-thin mb-2" >
                                Amount
                                </label>
                                <input className="h-7 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-gray-700 text-xs font-thin mb-2" >
                                Currency
                                </label>
                                
    
                                <Menu as="div" className="relative w-full inline-block text-left">

                                <div>
                                <Menu.Button className="inline-flex w-full px-1 py-1 text-sm justify-end font-medium border-2 border-gray-100 bg-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <ChevronDownIcon
                                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                    />
                                </Menu.Button>

                                </div>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            className={`${
                                            active ? 'bg-yellow-400 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        >
                                            ETB
                                        </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            className={`${
                                            active ? 'bg-yellow-400 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        >
                                            USD
                                        </button>
                                        )}
                                    </Menu.Item>
                                    </div>
                                </Menu.Items>
                                </Transition>
                                </Menu>

                            </div>
                        </div>

                        <div className="flex flex-col mb-2">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600"/><span className="ml-2 text-gray-700 text-xs font-thin">Make donations to a new patient every month</span>
                            </label>
                        </div> 
                    </form>
                </div>

            </div>

            <div className="flex w-full h-30 border-2 rounded p-2 justify-center">
                <button className="drop-shadow-md bg-grey-light hover:bg-blue-700 font-bold rounded inline-flex">
                    <img src="/images/1.jpg" alt="Doctors image" className="md:h-12 w-20 object-cover rounded"/>
                </button>
                <button className="drop-shadow-md ml-3 bg-grey-light hover:bg-grey font-bold rounded inline-flex">
                    <img src="/images/2.jpg" alt="Doctors image" className="md:h-12 w-20 object-cover rounded"/>
                </button>
                <button className="drop-shadow-md ml-3 bg-grey-light hover:bg-grey font-bold rounded inline-flex">
                    <img src="/images/3.jpg" alt="Doctors image" className="md:h-12 w-20 object-cover rounded"/>
                </button>
                <button className="drop-shadow-md ml-3 bg-grey-light hover:bg-grey font-bold rounded inline-flex">
                    <img src="/images/3.jpg" alt="Doctors image" className="md:h-12 w-20 object-cover rounded"/>
                </button>
                <button className="md:h-12 w-20 drop-shadow-md ml-3 bg-gray-100 hover:bg-gray-400 font-thin py-2 px-4 rounded">
                    Other
                </button>
            </div>

            <div className="text-center m-3">
                <button className="w-60 bg-yellow-400 hover:bg-yellow-700 text-black py-1 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button">
                    Next
                </button>

            </div>

       </div>
    );
  };

export default Donate