import React from 'react'
import {motion} from 'framer-motion'

const ScrollingText = () => {
    const text = "I appreciate you taking the time to explore my portfolio. I look forward to the opportunity to create, collaborate, and make an impact together with you."
  return (
<div className="overflow-hidden hidden md:block whitespace-nowrap bg-none text-white py-3">
        <motion.div
        animate={{x: ['100%', '-100%']}}
        transition={{duration: 50 , repeat: 1, ease:"linear"}}
        className=" font-thin inline-block"
        >
        <span className="mx-10 text-lg Merriweather sticky">{text}</span>
        </motion.div>
</div>
  )
}

export default ScrollingText
