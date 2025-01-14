"use client";
import portifolioIMG from '../img/portifolioIMG.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const IntroductionSection = () => {

  return (
    <div className='mx-auto flex flex-col items-center gap-10'>
      <div className='
       flex flex-row-reverse w-full mx-auto items-center justify-center gap-5 relative max-md:flex-col'>
        <div>
          <Image className='w-60 shadow-md shadow-slate-400' src={portifolioIMG} alt='imagem do portifolio' />
        </div>

        <div className='max-md:w-3/4 w-2/4 flex flex-col gap-5 '>
          <h1 className='text-4xl font-bold'>Thauan Lima</h1>

          <p>Olá, mundo! Sou <span className='text-purpleDefault'> desenvolvedor web front-end</span> com mais de um ano de experiência na criação de interfaces responsivas, atraentes e dinâmicas. Utilizo as melhores práticas e tecnologias modernas para oferecer designs limpos, agradáveis e funcionais. Trabalho com as principais tecnologias do mercado, como React.js, Next.js e TailwindCSS. Além disso, possuo experiência em back-end, incluindo consumo e tratamento de APIs, bem como testes de APIs utilizando o Postman</p>
        </div>

      </div>

      <div className='flex w-full gap-5 relative flex-col mx-auto items-center'>
        <h2 className='text-2xl font-semibold'>Contate me</h2>

        <div className='flex gap-10'>
          <a href="https://wa.me/5583998093699">
            <FontAwesomeIcon className='hover:shadow-bgPurpleShadow
            hover:bg-purpleDefault rounded-full text-white text-xl cursor-pointer  transition duration-300 max-md:text-2xl' icon={faWhatsapp} />
          </a>

          <a href="https://www.instagram.com/thaau_lisouza/">
            <FontAwesomeIcon className='hover:shadow-bgPurpleShadow hover:bg-purpleDefault rounded-full text-white text-xl cursor-pointer  transition duration-300 max-md:text-2xl' icon={faInstagram} />
          </a>
          <a href="https://github.com/ThauanLim4">

            <FontAwesomeIcon className='hover:shadow-bgPurpleShadow hover:bg-purpleDefault text-white text-xl cursor-pointer transition duration-300 max-md:text-2xl rounded-full' icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
};