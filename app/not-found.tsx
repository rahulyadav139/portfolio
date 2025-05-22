import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl md:text-9xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
        Return Home
      </Link>
    </div>
  )
}
