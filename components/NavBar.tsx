import { Geologica } from 'next/font/google'

const font = Geologica({ subsets: ['latin'] })

export function NavBar() {
  return (
    <main className={`flex justify-between text-center w-screen fixed items-center px-10 py-5 text-lg border-b ${font.className}`}>
      <a href='/' className="flex">
        <p>A</p>
        <p>I</p>
      </a>
      <div className="flex space-x-10">
        <a href="#home">Home</a>
        <a href='#projects'>Projects</a>
        <a href='#about'>About</a>
      </div>
    </main>
  )
}