import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function BasicIntro() {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to("#rocket", {
      y: -350,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "top",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <main>
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <Image src="/arian_fa22.jpg" alt="Arian Izadi Portrait" width={200} height={200} className="rounded-full border-2 z-10 border-white" />
        <div className="text-white text-center pt-10 px-2">
          <h1 className="text-2xl font-bold">My name is Arian!</h1>
          <p className="pt-2 max-w-xl">I am a senior studying Computer Science at the University of Nevada, Las Vegas.
            In addition to my academic pursuits, I serve as the President of Layer Zero, the cybersecurity club at UNLV.
            I am always eager to explore and create new solutions, harnessing the power of technology to innovate and make a difference.</p>
        </div>
        <img className="absolute h-[200px]" id="rocket" src="/spaceship.webp" alt="spaceship" />
      </div>
    </main>
  )
}