import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <Image
        src="/this-is-fine-404.gif"
        alt="This is fine"
        width={400}
        height={300}
        className="mb-8 rounded-lg"
        unoptimized
        priority
      />
      
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8 text-center">
        La página que buscas no existe o ha sido movida.
      </p>
      
      <Link
        href="/"
        className="px-6 py-3 bg-[#B87D3B] hover:bg-[#9A6830] text-white font-medium rounded-lg transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
