import Image from 'next/image'

export function Hero() {
  return (
    <main>
      <Image className='-z-10 brightness-50' src={"https://images.unsplash.com/photo-1550924421-e79cce2186f0"} fill alt='background image of ocean'></Image>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-6xl font-bold">Arian Izadi</h1>
        <h2 className="text-2xl font-bold">Software Engineer</h2>
      </div>
    </main>

  );
}