import Image from 'next/image'

export default function ImageCard({ image }) {
  return (
    <>
      <figure className='py-4 [break-inside:avoid]'>
        {/* <img className='rounded-md' src={image.urls.full} alt={image.alt_description} /> */}
        <Image
          className='rounded-md'
          src={image.urls.regular}
          alt={image.alt_description}
          width={image.width}
          height={image.height}
          placeholder='blur'
          blurDataURL={image.urls.thumb}
        />
        <figcaption className='mt-2'>{image.user.name}</figcaption>
        <p className='text-sm text-gray-500 line-clamp-2'>{image.description}</p>
      </figure>
    </>
  )
}
