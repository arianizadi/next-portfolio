import { Geologica } from 'next/font/google'
import Link from 'next/link'

const font = Geologica({ subsets: ['latin'] })

export function NavBar() {
  return (
    <main></main>
    // <main className={`flex justify-center text-center w-screen fixed items-center px-10 py-5 text-lg ${font.className}`}>
    //   <div className="flex space-x-10">
    //     <Link href='/'>Home</Link>
    //     <Link href='#'>Projects</Link>
    //   </div>
    // </main>
  )
}