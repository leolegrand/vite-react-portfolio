import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const windowWidth = window.innerWidth

    const topRef = useRef(null)
    const bottomRef = useRef(null)

    useEffect(() => {

        if(windowWidth > 1024) {

            const topRow = topRef.current
            const bottomRow = bottomRef.current

        gsap.to(topRow, {
            scrollTrigger: {
                trigger: topRow,
                start: "top 15%",
                endTrigger: bottomRow,
                end: "=+500",
            
                scrub: 1,
            },
            x: -1000,
        })

        gsap.to(bottomRow, {
            scrollTrigger: {
                trigger: topRow,
                start: "top 15%",
                endTrigger: bottomRow,
                end: "=+500",
                scrub: 1
            }, 
            x: 2000,
        })
        }

        
        
    },[windowWidth])


    return (
        <section className="hero">
            <p className="hero__hello">hello,</p>
            <p className="hero__row hero__row--top" ref={topRef}>I BUILD THINGS</p>
            <p className="hero__row hero__row--bottom" ref={bottomRef}>FOR THE WEB</p>
            
        </section>
    );
};

export default Hero;