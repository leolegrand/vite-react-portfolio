import './about.css'
import Logo from '../Logo/Logo';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const About = () => {

    const logoRef = useRef(null)
    const circleRef = useRef(null)

    useEffect(() => {
        const logoCurrentRef = logoRef.current
        const circleCurrentRef = circleRef.current

        gsap.to(logoCurrentRef, {
            scrollTrigger: {
                trigger: circleCurrentRef,
                start: "top 50%",
                scrub: 1,
                markers: true
            },
            width: '200vw'
        })

    

        

     

    },[])

    return (
        <div className='about'>

            <div className='about__left'>
                <div className='about__circle' ref={circleRef}></div>
                <div className='about__logo' ref={logoRef}>
                    <Logo/>
                </div>
            </div>

            <div className="about__right">
                <p className='about__description'>I&apos;M LEO, A WEB DEVELOPER BASED IN PARIS WITH AN EYE FOR UI/UX. <br></br>I LIKE <span className='highlighted'>MINIMALIST</span> YET <span className='highlighted'>IMPACTFUL</span> DESIGNS.</p>
            </div>
      </div>
    );
};

export default About;