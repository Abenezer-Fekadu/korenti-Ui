import 'antd/dist/antd.css';
import Head from 'next/head'

import Navbar from '../components/common/Navbar'
import PostUpdate from '../components/third/postUpdate'
import Donate from '../components/third/donate'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Third - Lommi</title>
        <meta name="description" content="Lommi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <PostUpdate />
        {/* <Donate /> */}

      </main>

    </div>
  )
}

function PatronCardItem({ name, avatar, comment, amount }) {
  return (
    <div className='flex justify-between text-gray-600'>
      <div className='flex gap-3 items-center'>
        {
          avatar ?
            <image className="shrink-0 h-11 w-11 rounded-full ring-2 ring-white object-cover" src={avatar} alt="avatar" /> :
            <div className='flex items-center uppercase h-11 w-11 bg-primary text-gray-500 text-center font-bold text-lg rounded-full'>
              <div className='text-center w-full'>
                {name[0]}
              </div>
            </div>
        }
        <div className='flex flex-col'>
          <p className='text-sm'>{name}</p>
          {comment && <p className='text-xs'>{comment}</p>}
        </div>
      </div>
      <p className='font-bold text-sm whitespace-nowrap ml-2'>{amount}</p>
    </div>
  );
}

