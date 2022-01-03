import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";

function Profile() {
    let [tabs] = useState({
        'All patients you\'ve funded': [
          {
            id: 1,
            title: 'Donec Sollicitudin',
          },
        ],
        'Contribution Summary': [
        {
            id: 1,
            title: 'Donec Sollicitudin',
        },]
})

    return (
      <div className="p-10 md:p-20 bg-gray-100">
         <div className="flex items-center mb-4">
            
            <div className="w-20 h-20 md:w-64 md:h-64 relative mb-4">
                <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-blue-400 table cursor-pointer">
                    <span className="table-cell text-sm md:text-8xl text-white font-bold align-middle">A</span>
                </div>
            </div> 

            <div className=" ml-3 md:ml-6 grow">
                <div className="flex flex-wrap">
                    <h1 className="mb-3 text-sm md:text-3xl">Abebe Kebede</h1>
                    
                    <button className="ml-3 md:ml-5 pb-3 md:pb-2 font-bold rounded inline-flex items-center">
                        <EditActiveIcon
                        className="md:w-6 md:h-6 w-4 h-4"
                        aria-hidden="true"
                      />                    
                    </button>
            
                </div>

                <button >Add a Profile</button>
            </div>               
         </div>

        <div className="mb-10">
            <h3 className="font-medium">Your Story</h3>
            <hr className="mb-2 w-2/4"></hr>
            <p className="text-sm ">You joined Lommi on November 22nd, 2021!</p>
            <p className="">You donated ETB 100 to Dolor sit ame on January 20, 2021!</p>
        </div>

        <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All patients you've funded" key="1">
                <div className='grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3'>
                        {[...Array(3)].map((_, i) =>
                            <FundraiserCard key={i} title={"Fundraiser " + (i + 1)} imgSrc="/images/1.jpg" description={loremipsum} amount={4000} target={10000} />
                        )}
                </div> 
            </TabPane>
            <TabPane tab="Contribution Summary" key="2">
                <div className='grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3'>
                        {[...Array(3)].map((_, i) =>
                            <FundraiserCard key={i} title={"Fundraiser " + (i + 1)} imgSrc="/images/1.jpg" description={loremipsum} amount={4000} target={10000} />
                        )}
                </div> 
            </TabPane>
        </Tabs>

        </div>

      </div>
    )
  }
  
  function callback(key) {
    console.log(key);
  }
  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#000"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }



function ProgressBar({ value }) {
    return (
        <div className="w-full bg-gray-300 my-2">
            <div className="bg-primary p-1.5" style={{ width: value + "%" }}></div>
        </div>
    )
}

function FundraiserCard({ title, description, amount, target, imgSrc }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-md">
            <a href="/fundraiser"><img src={imgSrc} alt="image_1" className='object-cover cursor-pointer' /></a>
            <div className="px-6 py-4">
                <div className='cursor-pointer' >
                    <div className="font-bold mb-2">{title}</div>
                    <p className="text-gray-500 text-xs text-justify">{description}</p>
                </div>

                <p className='text-xs mt-2'><span className="font-bold">Br {amount}</span> raised out of Br {target}</p>
                <ProgressBar value={50} />
                <hr className="m-3"></hr>
                <p className='text-xs'>You have contributed <span className="font-bold">Br {target}</span></p>
            </div>

        </div>
    )
}


  export default Profile
  
  