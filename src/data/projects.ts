import byteStoreImg from "../img/byteStore.png";
import lojaTenis from "../img/lojaTenis.png";
import myfood from "../img/myfood.png";
import development from '../img/development.svg';
import themoviedb from '../img/themoviedb.png';
import { StaticImageData } from "next/image";

export type Project = {
    id: number,
    nomeDoProjeto: string,
    imagem: string | StaticImageData,
    tecnologiasUsadas: string[],
    descricao: string,
    link: string
}

export const Projects: Project[] = [
    {
        id: 0, nomeDoProjeto: "TheMovieDB", imagem: themoviedb, tecnologiasUsadas: ["react", "next.js", "tailwindcss"], descricao: "Projeto de um site de filmes e series, baseado no themoviedb e imdb, o projeto foi construido utilizando a api do themoviedb", link: "https://themvdb-pmdaz2jdi-thauanlim4s-projects.vercel.app/"
    },

    {
        id: 1, nomeDoProjeto: "Myfood", imagem: myfood, tecnologiasUsadas: ["react", "next.js", "tailwindcss"], descricao: "Projeto de um site de delivery de comidas, baseado no ifood e seus semelhantes", link: "https://myfood-mu.vercel.app/"
    },

    {
        id: 2, nomeDoProjeto: "ByteStore", imagem: byteStoreImg, tecnologiasUsadas: ["html", "css", "javascript"], descricao: "Pagina de vendas simples de produtos do ramo de tecnologia", link: "https://vercel.live/link/landing-page-tec.vercel.app?via=deployment-domains-list&p=1"
    },



    {
        id: 4, nomeDoProjeto: "TenisStore", imagem: lojaTenis, tecnologiasUsadas: ["html, css, javascript"], descricao: "Pagina de vendas de tênis bem simples, um dos meus primeiros projetos", link: "https://loja-tenis-azure.vercel.app/"
    }
]

export const ProjectInDevelopment: Project[] = [
    {
        id: 1,
        nomeDoProjeto: "???",
        imagem: development,
        tecnologiasUsadas: ["??", "??", "??"],
        descricao: "No momento nenhum projeto em desenvolvimento",
        link: " "
    }
]