import { Skills } from "@/data/skills";
import Image from "next/image";

export const SkillsSection = () => {
    return (
        <div className="w-full mx-auto flex justify-center flex-col items-center font-light gap-10">
            <div className="flex justify-center items-center w-full gap-1">
                <div className="border border-purpleDefault w-3/4"></div>
                <h2 className="text-3xl font-bold text-purpleDefault">Habilidades</h2>
            </div>

            <p className="text-end">Confira algumas das minhas habilidades com linguagens e tecnologias</p>

            <div className="w-3/4 h-9/12 flex flex-col gap-10 ">


                <div className="flex justify-center items-center gap-10 mx-auto w-full max-lg:grid max-lg:grid-cols-5 max-md:grid max-md:grid-cols-3 max-sm:grid max-sm:grid-cols-2">

                    {Skills.map(item => {
                        return (
                            <div key={item.id} className="w-20 h-28 flex flex-col items-center justify-around cursor-pointer">
                                <Image className="w-16 h-3/4 object-contain " src={item.imagem}
                                    alt={`Logo da tecnologia ${item.linguagem}`} />
                                <h3 className="text-xl h-1/4">{item.linguagem}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}