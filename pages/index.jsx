import Link from 'next/link'
import Head from 'next/head'
import ImageGallery from '../components/image-gallery'
import LogoIcon from '../assets/logo.svg'
import ConversationIcon from '../assets/conversation.svg'
import FireIcon from '../assets/fire.svg'
import MenuIcon from '../assets/menu.svg'
import SpinnerIcon from '../assets/spinner.svg'
import StarIcon from '../assets/star.svg'
import SearchIcon from '../assets/search.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen text-gray-900 bg-gray-50 font-inter'>
        <nav className='border-t-8 border-b border-gray-200'>
          <div className='container'>
            <div className='flex items-center h-20 gap-x-8'>
              <Link href='/'>
                <a>
                  <LogoIcon className='w-7 h-7' />
                </a>
              </Link>
              <ul className='flex items-center cursor-pointer gap-x-4'>
                <li className='font-semibold'>Feed</li>
                <li className='hover:font-semibold'>Discover</li>
                <li className='hover:font-semibold'>Community</li>
              </ul>
              <form className='flex-1' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search' className='relative text-gray-600'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <SearchIcon className='w-5 h-5' />
                  </span>
                  <input
                    className='w-full py-2 pl-10 pr-5 text-gray-700 transition bg-gray-100 border rounded-full focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-200'
                    type='text'
                    name='search'
                    id='search'
                  />
                </label>
              </form>
              <ul className='flex items-center cursor-pointer gap-x-4'>
                <li>
                  <ConversationIcon className='w-7 h-7' />
                </li>
                <li>
                  <button className='px-4 py-2 text-sm font-semibold border border-gray-200 rounded-full'>
                    Upload
                  </button>
                </li>
                <li className='w-10 border border-gray-200 rounded-full'>
                  {/* <Image src='/avatar-1.jpeg' layout='fill' objectFit='contain' alt='avatar'></Image> */}
                  <img
                    className='object-cover w-10 h-10 rounded-full'
                    src='/avatar-1.jpeg'
                    alt='avatar'
                  />
                </li>
                <li className='flex items-center gap-x-1'>
                  <FireIcon className='w-7 h-7' />
                  <span className='text-sm hover:underline'>1,331</span>
                </li>
                <li className='flex items-center gap-x-1'>
                  <StarIcon className='w-7 h-7' />
                  <span className='text-sm hover:underline'>15.8k</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className='section'>
          <div className='container'>
            <div className='flex items-center'>
              <h1 className='text-4xl font-bold'>People &amp; Nature</h1>
              <div className='ml-8 space-x-2'>
                <button className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-indigo-600 rounded-full'>
                  Follow
                </button>
                <button className='px-4 py-2 text-sm font-medium border rounded-full'>Edit</button>
              </div>
            </div>
            <p className='pt-4 text-lg font-medium text-gray-700'>
              Photos that look like taken straight out of fairy tale book.
            </p>
            <div className='flex items-center pt-1 text-sm text-gray-500'>
              <span>36 photos from 24 people. Curated by</span>{' '}
              <span className='flex items-center pl-2 gap-x-1'>
                <img
                  className='object-cover w-6 h-6 rounded-full'
                  src='/avatar-2.jpeg'
                  alt='avatar-2'
                />
                <span>Alan Prince</span>
              </span>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div>
              <ul className='flex items-center gap-x-4'>
                <li className='text-lg font-bold'>Popular</li>
                <li className='text-lg font-bold text-gray-400 hover:text-gray-900'>Recent</li>
              </ul>
            </div>
            <div className='pt-8'>
              <ImageGallery />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
