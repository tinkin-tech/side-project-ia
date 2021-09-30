import React from 'react'

const Changelog = () => (
  <div className="max-w-xs md:max-w-2xl mx-auto py-20">
    <div className="text-center font-normal font-medium text-gray-900 text-6xl">
      Changelog
      <div className="mt-5">[SIDEMOOD v0.2]</div>
    </div>
    <div className="text-left mt-8 pl-28 pr-28 text-gray-600 font-bold">
      v0.2
      <div className="list-disc text-gray-500 font-normal">
        -Incorporacion de la seleccion entre motores de IA en la interfaz.
        <br />
        -Incorporacion de validacion para los analisis en la interfaz. .
      </div>
    </div>
    <div className="text-left mt-8 pl-28 pr-28 text-gray-600 font-bold">
      v0.1
      <div className="list-disc text-gray-500 font-normal">
        -Creacion de la la interfaz visual.
        <br />
        -Pruebas con OpenIA y TensorFlow para el procesamiento de texto.
      </div>
    </div>
  </div>
)

export default Changelog
