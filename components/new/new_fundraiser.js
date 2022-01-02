import { Tab } from '@headlessui/react'
import { useState } from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const NewFundraiser = () => {
    let [tabs] = useState({
        'English': [
          {
            id: 1,
            title: 'Donec Sollicitudin',
          },
        ],
        'Amharic': [
        {
            id: 1,
            title: 'Donec Sollicitudin',
        },],
        'Afaan Oromoo': [
            {
                id: 1,
                title: 'Donec Sollicitudin',
        },],
        'Arabic': [
            {
                id: 1,
                title: 'Donec Sollicitudin',
            },]
})


    return (
      <div className="mt-10 m-auto w-3/5 p-2 bg-gray-100">
            <h1 className="text-lg text-center">New Fundraiser</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-20">
            <div className="">
            
            </div>

            <div className="">
                <Tab.Group>
                    <Tab.List className="flex border-b-2 border-black-100">
                    {Object.keys(tabs).map((tab) => (
                        
                        <Tab
                        key={tab}
                        className={({ selected }) =>
                            classNames(
                            'w-1/4 text-sm text-center font-thin',
                            'focus:outline-none',
                            selected
                                ? 'font-normal border-b-2 border-yellow-400'
                                : 'text-black hover:text-blue-500'
                            )
                        }
                        >
                        {tab}
                        </Tab>

                    ))}
                    </Tab.List>
                </Tab.Group>

                <form className="">
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-thin" >
                            Title
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"/>
                        </div> 
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-thin">
                                Description 
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20" id="description" type="message"/>
                        </div> 
                        <hr className="mb-2"/>
                        
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-700 text-sm font-thin">
                                Target Amount
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="amount" type="text" placeholder="USD" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                                send
                            </button>
                            <button className="mx-2 bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                                Publish
                            </button>
                        </div>
                    </form>
            </div>
            </div>
       </div>
    );
  };

export default NewFundraiser