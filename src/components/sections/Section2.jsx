import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../styles/Section2.css'

gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section2-container",
                toggleActions: "play none none reverse",
            }
        })

        tl.from(".section2-content", { scale: 0, ease:"power2.inOut", stagger: 0.6, yPercent:20 })
    }, [])

    return (
        <section id="section2">
            <div id="section2-container">
                <div id="section2-content1" className='section2-content'>
                    <h1>SILENT SPELL</h1>
                    <p>Monica able to cast spell without talking</p>
                </div>

                <div id="section2-content2" className='section2-content'>
                    <h1>MATHEMATIC MENTALITY</h1>
                    <p>Monica can count thousand of number in one second</p>
                </div>

                <div id="section2-content3" className='section2-content'>
                    <h1>SOCIAL ANXIETY</h1>
                    <p>Monica is scared to socialize</p>
                </div>

                <div id="section2-content4" className='section2-content'>
                    <h1>STAFF HANGER</h1>
                    <p>Monica used her staff for hanger</p>
                </div>
            </div>
        </section>
    )
}

export default Section2