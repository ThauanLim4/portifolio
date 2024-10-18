import Image from "next/image";
import { Projects } from "@/data/projects";


export const ProjectsComponent = () => {
    return (
        <div className="w-3/4 h-12/12 flex flex-col gap-24 mx-auto max-md:hidden">
            {Projects.map(item => {
                return (
                    <div className="border-l-2 border-b-2 transition-all duration-300 cursor-pointer hover:border-l-8 hover:border-b-8 border-purpleDefault h-4/4">
                        <a href={item.link} target="_blank" className="cursor-pointer">
                            <Image src={item.imagem} alt="ilustração da landing page de produtos de tecnologia da byteStore" />
                        </a>
                        <div className="p-2 bg-blackTwo">
                            <h3 className="text-xl">{item.nomeDoProjeto}</h3>
                            <p className="text-xs">{item.descricao}</p>
                            <ul className="flex gap-2 my-2">
                                {
                                    item.tecnologiasUsadas.map(i => {
                                        return (
                                            <li className="bg-purpleDefault px-1">{i}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export const ProjectsComponentMobile = () => {
    return (
        <div className="w-4/4 h-12/12 hidden flex-col gap-5 max-md:flex">
            {Projects.map(item => {
                return (

                    <div className="border-t border-purpleDefault h-4/4">
                        <a href={item.link} target="_blank" className="cursor-pointer">
                            <Image src={item.imagem} alt="ilustração da landing page de produtos de tecnologia da byteStore" />
                        </a>
                        <div className="p-2 bg-blackTwo">
                            <h3 className="">{item.nomeDoProjeto}</h3>
                            <p className="text-xs">{item.descricao}</p>
                            <ul className="flex gap-2 my-2">
                                {
                                    item.tecnologiasUsadas.map(i => {
                                        return (
                                            <li className="bg-purpleDefault px-1">  {i}
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>

                    </div>


                )
            })}
        </div>
    )
}