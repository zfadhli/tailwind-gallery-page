import useSWRInfinite from 'swr/infinite'
import ImageCard from '../components/image-card'
import LoadButton from './load-button'
import SpinnerIcon from '../assets/spinner.svg'
import { Fragment } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
const PAGE_SIZE = 10

export default function ImageGallery() {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&per_page=${PAGE_SIZE}&page=${
        index + 1
      }&query=people%20and%20nature`,
    fetcher,
  )

  const images = data ? [...data] : []
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  if (error) return 'An error has occurred.'
  if (!data) return <SpinnerIcon className='w-6 h-6' />
  return (
    <>
      <div className='gap-8 pt-2 columns-2xs [column-fill:_balance]'>
        {images.map((i) => i?.results?.map((image) => <ImageCard image={image} key={image.id} />))}
      </div>
      <div className='flex items-center justify-center py-12'>
        <LoadButton
          isReachingEnd={isReachingEnd}
          isRefreshing={isRefreshing}
          size={size}
          setSize={setSize}
        />
      </div>
    </>
  )
}
