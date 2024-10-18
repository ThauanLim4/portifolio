"use client";
import portifolioIMG from '@/img/portifolioIMG.png';
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
          <h1 className='text-4xl font-bold'>Óla, Sou Thauan Lima</h1>

          <p>Sou desenvolvedor <span className='text-purpleDefault font-semibold'>web front-end</span> com ampla experiência na criação de sites responsivos, focados em designs minimalistas e interfaces intuitivas. Tenho especialização em React, <span className='font-semibold'>utilizando suas melhores práticas para entregar soluções modernas e eficientes.</span> Além disso, possuo conhecimentos fundamentais em back-end, como integração com bancos de dados, desenvolvimento de CRUDs e testes de APIs com Postman, utilizando PHP para garantir uma comunicação robusta entre o front e back-end.</p>
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