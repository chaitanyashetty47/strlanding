import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">Could not find requested page</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Return Home
      </Link>
    </div>
  )
} 