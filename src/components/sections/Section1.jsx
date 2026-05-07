import { useEffect } from 'react'
import gsap from 'gsap'
import '../../styles/Section1.css'

const Section1 = () => {
useEffect(() => {
    let tl = gsap.timeline();

    gsap.set("#section1-title", { opacity: 0 });
    gsap.set("#section1-char", { y: "100vh" });
    gsap.set("#section1-text", { y: "-100vh" });
    gsap.set("#section1-img1", { y: "-100vh", rotate: -10 });
    gsap.set("#section1-img2", { x: "-100vw" });
    gsap.set("#section1-img3", { y: "100vh", rotate: 10 });

    tl.to("#section1-title", { opacity: 1, duration: 0.5 })
    .to("#section1-char", { y: "0%", ease: "circ.inOut", duration: 0.8 }, 0)
    .to("#section1-text", { y: "0%", ease: "expo.inOut", duration: 1 }, 0.2)
    .to("#section1-img1", { y: "0%", ease: "power2.inOut", duration: 0.8 }, 0.3)
    .to("#section1-img2", { x: "0%", ease: "power2.inOut", duration: 0.8 }, 0.4)
    .to("#section1-img3", { y: "0%", ease: "power2.inOut", duration: 0.8 }, 0.5)

    .to("#section1-img1", { y: "-20", yoyo: true, repeat: -1, ease: "sine.inOut", duration: 2 }, "+=0.5")
    .to("#section1-img2", { y: "-20", yoyo: true, repeat: -1, ease: "sine.inOut", duration: 2 }, "<")
    .to("#section1-img3", { y: "-20", yoyo: true, repeat: -1, ease: "sine.inOut", duration: 2 }, "<");
}, []);

    return (
        <section id="section1">
            <div id="section1-content">
                <div id="section1-title">
                    <h1>MONICA EVERETT</h1>
                </div>

                <div id="section1-char">
                    <img 
                        src="https://i.postimg.cc/900k3Y9R/Desain-tanpa-judul-(2)-remove-bg-io.png" 
                        alt="Monica Everett Character"
                    />
                </div>

                <div id="section1-text">
                    <h1>MONICA EVERETT</h1>
                    <p>Monica Everett (モニカ・エヴァレット), is the main character of the story, known as the Silent Witch, a member of of the Seven Sages. She is the only mage who can use unchanted magic, and is extremely competent at mathematics and magecraft.</p>
                </div>

                <div id="section1-img-container">
                    <div id="section1-img1" className='section1-img'>
                        <img 
                            src="https://i.pinimg.com/736x/e0/6d/62/e06d627933de30100c9e4ae0ca954d75.jpg" 
                            alt="Monica scene 1"
                        />
                    </div>

                    <div id="section1-img2" className='section1-img'>
                        <img 
                            src="https://i.pinimg.com/1200x/40/a0/0d/40a00d15c7f991b24ab39686380bb48c.jpg" 
                            alt="Monica scene 2"
                        />
                    </div>

                    <div id="section1-img3" className='section1-img'>
                        <img 
                            src="https://i.pinimg.com/1200x/f9/b1/ab/f9b1ab7ae0501151f20c2f143e7178cf.jpg" 
                            alt="Monica scene 3"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1