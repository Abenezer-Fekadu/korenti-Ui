import { Tab } from '@headlessui/react'
import { useState } from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const PostUpdate = () => {
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
      <div className="mt-10 m-auto w-2/5 p-4 bg-gray-100">
            <h1 className="mb-3 text-lg text-center">Post an Update</h1>

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

                <form className="py-2">

                        <div className="mb-4">
                           <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20" id="description" type="message" placeholder="Share Your News......."/>
                        </div> 
                        
                        <div className="mb-8">
                            <button className="bg-yellow-400 hover:bg-yellow-700 text-black py-1 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button">
                                Add a Picture
                            </button>
                        </div>

                        <div className="mb-2">

                            <h1 className="text-md">Send Update To</h1>

                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox h-3 w-3 text-gray-600" /><span className="ml-3 text-gray-700">Campaign Page</span>
                                    </label>

                                    <label className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox h-3 w-3 text-red-600"/><span className="ml-3 text-gray-700">Donors & followers</span>
                                    </label>

                                    <label className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox h-3 w-3 text-orange-600" /><span className="ml-3 text-gray-700">Facebook</span>
                                    </label>

                                    <label className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox h-3 w-3 text-yellow-600"/><span className="ml-3 text-gray-700">Twitter</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="bg-yellow-400 hover:bg-yellow-700 text-black py-1 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button">
                                Send Update
                            </button>
                        </div>

                    </form>
            </div>
            </div>
    );
  };
  
  export default PostUpdate