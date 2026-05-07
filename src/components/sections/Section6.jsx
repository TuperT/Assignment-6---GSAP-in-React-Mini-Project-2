import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import '../../styles/Section6.css'

gsap.registerPlugin(ScrollTrigger)

const Section6 = () => {
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section6",
                start: "top top",
                end: "+=3000",
                pin: true,
                scrub: true,
                // markers: true,
            }
        })

        tl.to("#section6", { backgroundColor: "#0a0a08", duration: 1 }, 0)
        
        tl.to("#section6-heading", { scale: 0.6, yPercent: -40, duration: 2 }, 0)
        
        tl.fromTo("#section6-subtitle", 
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 2 },
            0.2
        )
        
        tl.to("#section6-glow", { opacity: 0.8, duration: 1.5 }, 0.3)
        
        tl.fromTo("#section6-button",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "back.out" },
            0.5
        )
        
        ScrollTrigger.refresh()

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <section id="section6">
            <div id="section6-container">
                <div id="section6-glow" className="section6-glow"></div>
                
                <h1 id="section6-heading">Let's Create Something Amazing</h1>
                
                <p id="section6-subtitle">Join us on this creative journey and bring your ideas to life</p>
                
                <button id="section6-button" className="section6-btn">
                    Get Started Now
                </button>
            </div>
        </section>
    )
}

export default Section6
