import { ProjectsComponent, ProjectsComponentMobile } from "@/components/projectsComponent";
import banner from '@/img/banner.jpg';
import Image from 'next/image';




const Page = () => {
    return (
        <>
            <div>
            <section className='w-full mb-10'>
                    <Image className='w-full h-44 object-cover' src={banner} alt='banner minimalista' />
                </section>

            </div>
            <div className='max-w-screen-lg mx-auto w-full h-full mb-52'>
                <div className="w-full mx-auto flex justify-center flex-col items-center px-10">
                    <div className="flex justify-center items-center w-full gap-1 mb-5">
                        <h2 className="text-3xl font-bold text-purpleDefault">Projetos</h2>
                        <div className="border border-purpleDefault w-3/4"></div>
                    </div>

                    <div className="mb-10 text-start">
                        <p>Confira alguns dos projetos que desenvolvi ao longo da minha trajetória como programador.</p>
                    </div>

                    <div>
                        {/* Modais dos projetos para versão de pc */}
                        <ProjectsComponent />

                    </div>

                    <div>
                        {/* Modais dos projetos para versão de tablet e celular */}

                        <ProjectsComponentMobile />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Page;