import useSWR from 'swr'
import ImageCard from '../components/image-card'

const fetcher = (url) => fetch(url).then((res) => res.json())
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=2&query=nature`

export default function ImageGallery() {
  const { data, error } = useSWR(UNSPLASH_URL, fetcher)
  console.log(data)

  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'
  return (
    <>
      {data?.results?.map((image) => (
        <ImageCard image={image} />
      ))}
    </>
  )
}
