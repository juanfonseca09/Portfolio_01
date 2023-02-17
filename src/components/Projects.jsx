import React from 'react'
import { motion } from "framer-motion"

export const Projects = () => {
  return (
    <motion.div inicial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
      projects
      </motion.div>
  )
}
