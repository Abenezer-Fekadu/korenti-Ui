import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AboutTabs() {
  let [categories] = useState({
    'Overview': [
      {
        id: 1,
        title: 'Donec Sollicitudin',
        name: 'Sollicitudin Donec',
        describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec',
        image: 'images/1.jpg'
      },
      {
        id: 2,
        title: "Sollicitudin Donec",
        name: 'Sollicitudin Donec',
        describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',
        image: 'images/2.jpg'
      },
      {
        id: 3,
        title: "Sollicitudin Donec",
        name: 'Sollicitudin Donec',
        describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis',
        image: 'images/3.jpg'
      },
    ],
    'Leadership': [
        {
            id: 1,
            title: 'Dante Munich',
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec',
            image: 'images/1.jpg'
          },
          {
            id: 2,
            title: "John Carter",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',
            image: 'images/2.jpg'
          },
          {
            id: 3,
            title: "Leonardo Hamedani",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis',
            image: 'images/3.jpg'
          },
    ],
    'Board of Directors': [
        {
            id: 1,
            title: 'Donec Sollicitudin',
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',

            image: 'images/1.jpg'
          },
          {
            id: 2,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',
            image: 'images/2.jpg'
          },
          {
            id: 3,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis',
            image: 'images/3.jpg'
          },
    ],
    'Medical Advisory Board': [
        {
            id: 1,
            title: 'Donec Sollicitudin',
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec',
            image: 'images/1.jpg'
          },
          {
            id: 2,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',
            image: 'images/2.jpg'
          },
          {
            id: 3,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis',
            image: 'images/3.jpg'
          },
      ],
      'Staff': [
        {
            id: 1,
            title: 'Donec Sollicitudin',
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec',
            image: 'images/1.jpg'
          },
          {
            id: 2,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit',
            image: 'images/2.jpg'
          },
          {
            id: 3,
            title: "Sollicitudin Donec",
            name: 'Sollicitudin Donec',
            describe: 'Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis',
            image: 'images/3.jpg'
          },
      ],
  })

  return (
    <div className="w-full py-10">
      <Tab.Group>
        <Tab.List className="flex mx-20 border-b-2 border-black-100">
          {Object.keys(categories).map((category) => (
            
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-1/5 py-2 text-sm leading-5 text-center font-thin',
                  'focus:outline-none',
                  selected
                    ? 'font-normal border-b-2 border-yellow-400'
                    : 'text-black hover:text-blue-500'
                )
              }
            >
              {category}
            </Tab>

          ))}
        </Tab.List>
        <Tab.Panels className="my-6 mx-20">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'grid grid-cols-3 gap-20',
              )}
            >
                {posts.map((post) => (
                    <div key={post.id} className="py-3 rounded-md hover:bg-coolGray-100">

                        <img src={post.image} alt="Doctors image" className="md:h-3/5 h-20 w-full object-fit mb-2 rounded"/>
                        <h3 className="text-sm font-medium leading-5">
                        {post.title}
                        </h3> 
                        <h2 className="text-xs font-thin leading-2">{post.name}</h2>
                        <p className="text-xs font-thin mt-2 text-justify">
                            {post.describe}
                        </p>
                    </div>
                ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default AboutTabs