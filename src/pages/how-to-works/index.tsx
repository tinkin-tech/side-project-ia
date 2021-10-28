import React from 'react'
import Image from 'next/image'
import { Images } from '../../enums/images'

const HowToWorks = () => (
  <div className="max-w-xs md:max-w-2xl mx-auto py-20 mt-24">
    <div className="text-center font-medium	font-bold text-gray-900 text-5xl">
      ¿Cómo funciona?
    </div>
    <div className="text-left text-lg text-gray-500 mt-20 pl-20 pr-20 text-justify">
      Al ingresar el texto en el campo correspondiente, este viaja hacia los
      servidores de TensorFlow u OpenIA (depende de lo seleccionado) para ser
      procesado. Una vez allí la inteligencia artificial previamente entrenada
      los clasifica y arroja una respuesta que vuelve hacia la web y se
      transforma en un output. Es aquí en al web que nosotros transformamos ese
      output clasificándolo en 3 categorías que se muestran en español y
      acompañadas de una ilustración correspondiente.
      <br />
      <br />
      En ambos casos las inteligencias fueron entrenadas mediante Machine
      Learning gracias a la intervención de personas que etiquetaron múltiples
      inputs. Si te gustaría ver la documentación correspondiente y/o para saber
      más acerca de los involucrados, haz clic en los siguientes enlaces:
      <a
        href="https://www.tinkin.one/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600"
      >
        {' '}
        TensorFlow
      </a>{' '}
      u{' '}
      <a
        href="https://www.tinkin.one/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600"
      >
        {' '}
        OpenIA
      </a>
    </div>

    <div className="mt-28">
      <Image src={Images.howToWorks} width={932} height={200} />
    </div>
  </div>
)

export default HowToWorks
