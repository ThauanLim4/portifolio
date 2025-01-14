import Image from "next/image";
import { ProjectInDevelopment } from "../data/projects";


export const ProjectsComponentInDev = () => {
    return (
        <div className="w-3/4 h-12/12 flex flex-col gap-24 mx-auto max-md:hidden">
            {ProjectInDevelopment.map(item => {
                return (
                    <div className="border-l-2 border-b-2 transition-all duration-300 cursor-pointer hover:border-l-8 hover:border-b-8 border-grayOne h-4/4">
                        <span className="cursor-pointer">
                            <Image className="object-cover" src={item.imagem} alt="ilustração da landing page de produtos de tecnologia da byteStore" />
                        </span>
                        <div className="p-2 bg-blackTwo">
                            <h3 className="text-xl">{item.nomeDoProjeto}</h3>
                            <p className="text-xs">{item.descricao}</p>
                            <ul className="flex gap-2 my-2">
                                {
                                    item.tecnologiasUsadas.map(i => {
                                        return (
                                            <li className="bg-grayOne px-1">{i}</li>
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

export const ProjectsComponentInDevMobile = () => {
    return (
        <div className="w-4/4 h-12/12 hidden flex-col gap-5 max-md:flex">
            {ProjectInDevelopment.map(item => {
                return (
                    <div className="border-t hover:border-t-0 h-4/4 transition-all duration-300 hover:border-l-8 hover:border-b-8 border-grayOne">
                        <span className="cursor-pointer">
                            <Image className="max-h-48" src={item.imagem} alt="ilustração da landing page de produtos de tecnologia da byteStore" />
                        </span>
                        <div className="p-2 bg-blackTwo">
                            <h3 className="">{item.nomeDoProjeto}</h3>
                            <p className="text-xs">{item.descricao}</p>
                            <ul className="flex gap-2 my-2">
                                {
                                    item.tecnologiasUsadas.map(i => {
                                        return (
                                            <li className="bg-grayOne px-1">  {i}
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