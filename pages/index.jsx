import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ImageGallery from '../components/image-gallery'
import LogoIcon from '../assets/logo.svg'
import ConversationIcon from '../assets/conversation.svg'
import FireIcon from '../assets/fire.svg'
import MenuIcon from '../assets/menu.svg'
import StarIcon from '../assets/star.svg'
import SearchIcon from '../assets/search.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Unsplash Gallery</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen text-slate-900 bg-slate-50 font-inter'>
        <nav className='border-t-8 border-b border-slate-200'>
          <div className='container'>
            <div className='flex items-center justify-between h-20 gap-x-8'>
              <MenuIcon className='w-7 h-7 lg:hidden' />
              <Link href='/'>
                <a>
                  <LogoIcon className='hidden w-7 h-7 lg:inline-block' />
                </a>
              </Link>
              <ul className='items-center hidden cursor-pointer lg:flex gap-x-4'>
                <li className='font-medium'>Feed</li>
                <li className='hover:font-medium'>Discover</li>
                <li className='hover:font-medium'>Community</li>
              </ul>
              <form className='flex-1 hidden sm:inline-block' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search' className='relative text-slate-600'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <SearchIcon className='w-5 h-5' />
                  </span>
                  <input
                    className='w-full py-2 pl-10 pr-5 transition border rounded-full text-slate-700 bg-slate-100 focus:outline-none focus:shadow-outline focus:bg-white focus:border-slate-200'
                    type='text'
                    name='search'
                    id='search'
                  />
                </label>
              </form>
              <ul className='flex flex-row-reverse items-center cursor-pointer lg:flex-row gap-x-4'>
                <li className='hidden lg:inline-block'>
                  <ConversationIcon className='w-7 h-7' />
                </li>
                <li className='hidden lg:inline-block'>
                  <button className='px-4 py-2 text-sm font-medium border rounded-full border-slate-200'>
                    Upload
                  </button>
                </li>
                <li className='relative w-10 h-10 border rounded-full border-slate-200'>
                  <Image
                    className='rounded-full'
                    src='/avatar-1.jpeg'
                    alt='avatar-1'
                    layout='fill'
                    objectFit='cover'
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
              <h1 className='text-3xl font-extrabold sm:text-4xl'>People &amp; Nature</h1>
              {/* <div className='ml-8 space-x-2'>
                <button className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-indigo-600 rounded-full'>
                  Follow
                </button>
                <button className='px-4 py-2 text-sm font-medium border rounded-full'>Edit</button>
              </div> */}
            </div>
            <p className='pt-4 font-medium text-slate-700 sm:text-lg'>
              Photos that look like taken straight out of fairy tale book.
            </p>
            <div className='pt-2 text-sm text-slate-500'>
              <div className='flex flex-col sm:flex-row gap-x-1'>
                <div>36 photos from 24 people.</div>
                <div className='flex'>
                  <span>Curated by</span>
                  <span className='flex items-center pl-2 gap-x-1'>
                    <div className='relative w-6 h-6 rounded-full'>
                      <Image
                        className='rounded-full'
                        src='/avatar-2.jpeg'
                        alt='avatar-2'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <span>Alan Prince</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div>
              <ul className='flex items-center gap-x-4'>
                <li className='text-lg font-bold'>Popular</li>
                <li className='text-lg font-bold text-slate-400 hover:text-slate-900'>Recent</li>
              </ul>
            </div>
            <div className='pt-8'>
              <ImageGallery />
            </div>
          </div>
        </section>
        <section className='py-8 text-center'>
          <div className='text-sm'>
            Build with ❤ by{' '}
            <a className='font-bold' href='https://github.com/zfadhli'>
              zfadhli
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
