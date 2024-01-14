import Image from 'next/image'

export function Hero() {
  return (
    <main id='home'>
      <Image className='-z-10 brightness-75' src="/earth.jpg" fill objectFit='cover' quality={100} alt='background image of ocean'></Image>
      <div className="flex flex-col items-center text-center justify-center w-full h-screen">
        <img className='absolute blur-[0px] h-[200px] -z-10 top-[60%] md:top-[50%] md:left-[10%] brightness-75' id='astro' src="/astro.webp" alt='astronaut model'></img>
        <img className='absolute blur-[0px] h-[250px] md:h-[600px] -z-10 bottom-[50%] md:bottom-[30%] md:right-[5%] brightness-75' id='sat' src="/sat.webp" alt='astronaut model'></img>
        <h1 className="text-6xl font-bold">Arian Izadi</h1>
        <h2 className="text-2xl font-bold">Software Engineer & Security Researcher</h2>
      </div>
    </main>

  );
}