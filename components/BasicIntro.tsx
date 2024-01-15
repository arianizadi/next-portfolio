import Image from "next/image"

export function BasicIntro() {
  return (
    <main>
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <img className="absolute left-0 h-[200px]" src="/spaceship.webp" alt="spaceship" />
        <Image src="/arian_fa22.jpg" alt="Arian Izadi Portrait" width={200} height={200} className="rounded-full border-2 border-white" />
        <div className="text-white text-center pt-10 px-2">
          <h1 className="text-2xl font-bold">My name is Arian!</h1>
          <p className="pt-2">I am a current senior at UNLV studying Computer Science. I have a love for creating new things and learning how things can be exploited.</p>
        </div>
      </div>
    </main>
  )
}