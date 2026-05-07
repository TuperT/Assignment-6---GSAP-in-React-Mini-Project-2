import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import '../../styles/Section5.css'

gsap.registerPlugin(ScrollTrigger)

const Section5 = () => {
    useEffect(() => {
        let tl = gsap.timeline({ 
            scrollTrigger: {
                trigger: "#section5",
                start: "top top",
                end: "+=5300",
                pin: true,
                scrub: true,
                // markers: true,
            }
        })

        tl.to("#section5-content1", { scale: 1.2 })
        tl.to("#section5-content1", { yPercent: 100, opacity: 0.6, scale: 1, borderTopLeftRadius: 0, borderTopRightRadius: 0   })
        tl.to("#section5-content3", { scale: 1.2 })
        tl.to("#section5-content3", { yPercent: "-100", opacity: 0.6, scale: 1, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
        tl.to("#section5-content2", { scale: 1.2 })
        tl.to("#section5-content2", { scale: 1, borderRadius: 0 })
        tl.to("#section5-content1", { opacity: 1 })
        tl.to("#section5-content3", { opacity: 1 })
        tl.to(".section5-content", { scale: 1.2 })
        ScrollTrigger.refresh()

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <section id="section5">
            <div id="section5-container">
                
                <h1>MORE INFO</h1>

                <div id="section5-info">
                    <div id="section5-content1" className="section5-content">   
                        <h2>RELEASE DATE</h2>
                        <p>Jul 5, 2025 to Oct 5, 2025</p>
                    </div>

                    <div id="section5-content2" className="section5-content">
                        <h2>TITLE</h2>
                        <p>Silent Witch: Chinmoku no Majo no Kakushigoto</p>
                    </div>

                    <div id="section5-content3" className="section5-content">
                        <h2>PRODUCERS</h2>
                        <p>Aniplex, Movic, Half H.P Studio, Tokyo MX, BS11, Cygames, Kadokawa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5