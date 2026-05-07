import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const Count = ({ start = 0, end = 100, duration = 2 }) => {
    const [count, setCount] = useState(start)
    const countRef = useRef(null)
    const valueRef = useRef({ count: start })

    useEffect(() => {
        if (!countRef.current) return
        
        valueRef.current.count = start
        
        const animateCountUp = gsap.to(valueRef.current, 
            {   
                count: end,
                duration: duration,
                scrollTrigger: {
                    trigger: countRef.current,
                    start: "top 80%",
                    once: true,
                },
                onUpdate: () => {
                    setCount(Math.floor(valueRef.current.count))
                }
            })
        
        return () => {
            animateCountUp.kill()
        }
        
        }, [start, duration, end])

    return (
        <span ref={countRef}>
            {count.toLocaleString()}
        </span>
    )
}
