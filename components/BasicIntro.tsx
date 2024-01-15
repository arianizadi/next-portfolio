import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export function BasicIntro() {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to("#rocket", {
      y: -400,
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
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <Image src="/arian_fa22.jpg" alt="Arian Izadi Portrait" width={200} height={200} className="rounded-full border-2 z-10 border-white" />
      <div className="text-white text-center pt-10 px-8">
        <h1 className="text-2xl font-bold">My name is Arian!</h1>
        <p className="pt-2 max-w-xl">I am a senior studying Computer Science at the University of Nevada, Las Vegas. In addition to my academic pursuits, I currently serve as the President of Layer Zero, the cybersecurity club on campus. I am always eager to explore and create innovative solutions to problems, harnessing the power of ever-changing technology to make a difference.</p>
      </div>
      <img className="absolute h-[200px]" id="rocket" src="/spaceship.webp" alt="spaceship" />
      <div className="pt-10">
        <a href="https://github.com/arianizadi" rel="noreferrer" target={'_blank'}>
          <FontAwesomeIcon icon={faGithub} className="text-white text-4xl mx-2" />
        </a>
        <a href="https://www.linkedin.com/in/arianizadi/" rel="noreferrer" target={'_blank'}>
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl mx-2" />
        </a>
      </div>
    </div>
  )
}