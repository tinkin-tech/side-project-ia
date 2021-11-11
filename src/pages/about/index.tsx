import React from 'react'
import Image from 'next/image'
import { Images } from '../../enums/images'

const About = () => (
  <div className="max-w-xs md:max-w-2xl mx-auto py-20 mt-24">
    <div className="text-center font-medium	font-bold text-gray-900 text-5xl">
      Acerca del proyecto
    </div>
    <div className="text-left text-lg text-gray-500 mt-20 pl-20 pr-20 text-justify">
      SideMood es un proyecto de{' '}
      <a
        href="https://www.tinkin.one/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600"
      >
        {' '}
        Tinkin
      </a>{' '}
      que se origina en los side projects con el objetivo de aprender sobre
      inteligencia artificial y expandir nuestros conocimientos. Luego de una
      investigación sobre que es y como funciona la inteligencia artificial es
      que decidimos crear Sidemood para poner en práctica lo aprendido.
      <br />
      <br />
      El proyecto está formado por los desarrolladores Andrés Velasco, Alex
      Arevalo y Edwin Guamushig y los UX-UI Juan Diego Montero y Facundo Artal.
    </div>
    <div className="mt-20">
      <div className="text-center text-specialGray font-bold">Powered by</div>
      <Image src={Images.poweredBy} width={932} height={200} />
    </div>
  </div>
)

export default About
