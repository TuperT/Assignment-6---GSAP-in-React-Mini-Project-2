import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../styles/Section3.css'

gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
    useEffect(() => {
        let panels = gsap.utils.toArray(".panel")
        let activePanelIndex = 0;

        gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section3",
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: "+=3500",
            onUpdate: (self) => {
            const progress = self.progress;
            const newActiveIndex = Math.round(progress * (panels.length - 1));
            const isLastPanel = newActiveIndex === panels.length - 1;
            
            if (newActiveIndex !== activePanelIndex) {
                activePanelIndex = newActiveIndex;
                
                const lastPanel = panels[panels.length - 1];

                    gsap.to(lastPanel, {
                    scale: isLastPanel ? 1.2 : 1,
                    duration: 2
                });

                panels.forEach((panel, index) => {
                const panelElement = panel;
                gsap.to(panelElement, {
                    opacity: index === activePanelIndex ? 1 : 0.2,
                    duration: 1.5
                });
                });
            }
            }
        }
        });
    }, [])

    return (
        <section id="section3">
            <div id="section3-container">
                <div className="panel" id="panel1">
                    <h1>Monica casting spell</h1>
                    <p>This is a picture of monica casting a spell</p>
                </div>

                <div className="panel" id="panel2">
                    <h1>Monica killing 1000 dragon</h1>
                    <p>This is a picture of Monica killing 1000 dragon</p>
                </div>

                <div className="panel" id="panel3">
                    <h1>Monica using invisible shield</h1>
                    <p>This is a picture of Monica using invisible shield</p>
                </div>

                <div className="panel" id="panel4">
                    <h1>Monica ending the fight</h1>
                    <p>This is a picture of Monica ending the fight</p>
                </div>

                <div className="panel" id="panel5">
                    <h1>Monica with a cat</h1>
                    <p>This is a picture of Monica with a cat</p>
                </div>
            </div>
        </section>
    )
}

export default Section3