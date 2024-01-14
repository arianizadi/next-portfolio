import Image from 'next/image'

export function Hero() {
  const earth = "https://images.unsplash.com/photo-1700173318258-3c0134576743"
  return (
    <main>
      <Image className='-z-10 brightness-75' src={earth} fill objectFit='cover' quality={100} alt='background image of ocean'></Image>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Image className='absolute -z-10 top-[50%] left-[10%] brightness-75' id='astro' src="/astro.png" width={200} height={200} alt='astronaut model'></Image>
        <Image className='absolute -z-10 bottom-[30%] right-[5%] brightness-75' id='sat' src="/sat.png" width={500} height={200} alt='astronaut model'></Image>
        <h1 className="text-6xl font-bold">Arian Izadi</h1>
        <h2 className="text-2xl font-bold">Software Engineer & Security Researcher</h2>
      </div>
    </main>

  );
}