import { useEffect } from "react"
import { Count } from "../Count"
import RotatingGradient from '../../hooks/DivRotatingGradient'
import '../../styles/Section4.css'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

    const gradientRef1 = RotatingGradient("#818cf8", "#13150d", 10000)
    const gradientRef2 = RotatingGradient("#ff6b9d", "#13150d", 10000)
    const gradientRef3 = RotatingGradient("#fbbf24", "#13150d", 10000)
    const gradientRef4 = RotatingGradient("#84cc16", "#13150d", 10000)

    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section4-container",
                start: "top 80%"
            }
        })

        tl.from('#section4-stats', {
            opacity: 0,
            duration: 3
        })

    }, [])

    return (
        <section id="section4">
            <div id="section4-container">

                <h1>ANIME STATISTIC</h1>

                <div id="section4-stats">

                    <div
                        id="section4-content1"
                        className="section4-content"
                        ref={gradientRef1}
                    >
                        <Count start={0} end={587} />
                        <h3>RANK</h3>
                        <button onClick={() => window.location.href = "https://myanimelist.net/anime/59459/Silent_Witch__Chinmoku_no_Majo_no_Kakushigoto/stats"}>CHECK</button>
                    </div>

                    <div
                        id="section4-content2"
                        className="section4-content"
                        ref={gradientRef2}
                    >
                        <Count start={0} end={216303} />
                        <h3>USER LOVE</h3>
                        <button onClick={() => window.location.href = "https://myanimelist.net/anime/59459/Silent_Witch__Chinmoku_no_Majo_no_Kakushigoto/stats"}>CHECK</button>
                    </div>

                    <div
                        id="section4-content3"
                        className="section4-content"
                        ref={gradientRef3}
                    >
                        <Count start={0} end={13} />
                        <h3>EPISODES</h3>
                        <button onClick={() => window.location.href = "https://myanimelist.net/anime/59459/Silent_Witch__Chinmoku_no_Majo_no_Kakushigoto/stats"}>CHECK</button>
                    </div>

                    <div
                        id="section4-content4"
                        className="section4-content"
                        ref={gradientRef4}
                    >
                        <Count start={0} end={107679} />
                        <h3>SCORED BY USER</h3>
                        <button onClick={() => window.location.href = "https://myanimelist.net/anime/59459/Silent_Witch__Chinmoku_no_Majo_no_Kakushigoto/stats"}>CHECK</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section4