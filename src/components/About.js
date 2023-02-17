import React from 'react'
import { motion } from "framer-motion"

export const About = () => {
  return (   
    <motion.div id="about" className="about sec-pad" inicial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Acerca De Mi</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hola, mi nombre es 
                <strong> Juan Fonseca </strong>
                y soy <strong> Frontend Web Developer</strong>
                , actualmente me encuentro esudiando <strong> Ingeniería en Computación </strong>
                en la UDELAR y vivo en Montevideo, Uruguay.
              </p>
              <p className="about__content-details-para">
                Soy una persona <strong> proactiva y comprometida </strong> con cada trabajo que realizo,
                tratando de dar y hacer todo siempre de la mejor manera posible.
                No dudes en ponerte en <strong> contacto </strong> conmigo haciendo click aqui.
              </p>
            </div>
            <a href="./contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">NodeJS</div>
            </div>
          </div>
        </div>
      </div>      
    </motion.div>
  )
}
