import Link from 'next/link'

const Index = () => {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-1/2 h-1/2 flex items-center justify-center">
        <Link href={{ pathname: '/teampicker', query: { type: 'clubs' } }}>
          <a>Clubs</a>
        </Link>
      </div>

      <div className="w-1/2 h-1/2 flex items-center justify-center">
        <Link href={{ pathname: '/teampicker', query: { type: 'national' } }}>
          <a>International</a>
        </Link>
      </div>
    </div>
  )
}

export default Index
