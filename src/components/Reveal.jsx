import React from 'react'
import { useEffect, useRef } from 'react'
import { useAnimation,motion,useInView } from 'framer-motion'
function Reveal({children}) {
  const ref = useRef(null)
  const isInView = useInView(ref , {once:true})

  const mainControles = useAnimation()



  useEffect(()=>{
    if(isInView){
      mainControles.start("visible")
   
    }
  },[isInView])
  return (
    <>
    <div ref={ref} className='relative overflow-hidden'>
        <motion.div
        variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate={mainControles}
        transition={{duration:0.7,delay:0.35}}
        >{children}</motion.div>
    
    </div>
    </>
  )
}

export default Reveal