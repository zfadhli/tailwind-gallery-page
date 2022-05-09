import SpinnerIcon from '../assets/spinner.svg'

export default function LoadButton({ isLoadingMore, isReachingEnd, size, setSize }) {
  return (
    <>
      <button
        className='px-4 py-2 text-sm font-medium text-gray-600 border rounded-full'
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore ? (
          <SpinnerIcon className='w-6 h-6' />
        ) : isReachingEnd ? (
          'No more images'
        ) : (
          'Load more...'
        )}
      </button>
    </>
  )
}
