import { ProjectsComponent, ProjectsComponentMobile } from "./projectsComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const ProjetosSection = () => {
    return (
        <div className="w-full mx-auto flex justify-center flex-col items-center">
            <div className="flex justify-center items-center w-full gap-1 mb-10">
                <h2 className="text-3xl font-bold text-purpleDefault">Projetos</h2>
                <div className="border border-purpleDefault w-3/4"></div>
            </div>
            

            <div>
                {/* Modais dos projetos para versão de pc */}
                <ProjectsComponent />

            </div>

            <div>
                {/* Modais dos projetos para versão de tablet e celular */}

                <ProjectsComponentMobile />
            </div>


            <div className="mx-auto mt-10">
                <a href={`/projects`}
                    className="px-10 py-4 bg-purpleDefault hover:shadow-bgPurpleShadow hover:text transition duration-300 textSha">Ver mais projetos  <FontAwesomeIcon className="rotate-180 textSha" icon={faAngleLeft} />
                </a>
            </div>

        </div>
    )
}