import React from 'react'

const About = () => (
  <div className="max-w-xs md:max-w-2xl mx-auto py-20 mt-24">
    <div className="text-center font-normal font-medium text-gray-900 text-6xl">
      Acerca del proyecto
    </div>
    <div className="text-left text-sm text-gray-500 mt-20 pl-24 pr-24">
      <span className="text-red-500">SideMood</span> es un proyecto de{' '}
      <a
        href="https://www.tinkin.one/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600"
      >
        Tinkin
      </a>{' '}
      que se origina en los side projects con con el objetivo de aprender sobre
      inteligencia artificial y expandir nuestro conocimientos.
    </div>
  </div>
)

export default About
