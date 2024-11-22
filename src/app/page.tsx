"use client";
import banner from '@/img/banner.jpg';
import Image from 'next/image';
import { IntroductionSection } from '@/components/introduction';
import { ProjetosSection } from '@/components/projects';
import { SkillsSection } from '@/components/skills';
import { Footer } from '@/components/footer';


const ProductPage = () => {

  return (
    <div className='flex flex-col font-inter w-full'>
      <section className='w-full mb-10'>
        {/* seção do banner */}
        <Image className='w-full h-44 object-cover' src={banner} alt='banner minimalista' />
      </section>

      <section className='p-5'>
        <section className='max-w-screen-lg mx-auto flex flex-col my-10'>
          {/* seção introdutória */}
          <IntroductionSection />
        </section>

        <section className='max-w-screen-lg mx-auto w-full h-full my-10'>
          {/* seção de projetos */}
          <ProjetosSection />
        </section>

        <section className='max-w-screen-lg mx-auto w-full h-full my-10'>
          {/* seção de habilidades */}
          <SkillsSection />

        </section>


      </section>

      <section className='mx-auto w-full h-full'>
          {/* seção do footer */}
          <Footer />
        </section>
    </div>
  )
}

export default ProductPage;