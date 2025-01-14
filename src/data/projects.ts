import byteStoreImg from "../img/byteStore.png";
import lojaTenis from "../img/lojaTenis.png";
import myfood from "../img/myfood.png";
import development from '../img/development.svg';
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
        id: 0, nomeDoProjeto: "Myfood", imagem: myfood, tecnologiasUsadas: ["react", "next.js", "tailwindcss"], descricao: "Projeto de um site de delivery de comidas, baseado no ifood e seus semelhantes", link: "https://myfood-mu.vercel.app/"
    },

    {
        id: 2, nomeDoProjeto: "ByteStore", imagem: byteStoreImg, tecnologiasUsadas: ["html", "css", "javascript"], descricao: "Pagina de vendas simples de produtos do ramo de tecnologia", link: "https://vercel.live/link/landing-page-tec.vercel.app?via=deployment-domains-list&p=1"
    },

    {
        id: 3, nomeDoProjeto: "TenisStore", imagem: lojaTenis, tecnologiasUsadas: ["html, css, javascript"], descricao: "Pagina de vendas de tênis bem simples, um dos meus primeiros projetos", link: "https://loja-tenis-azure.vercel.app/"
    }
]

export const ProjectInDevelopment: Project[] = [
    {
        id: 1,
        nomeDoProjeto: "TheMDB",
        imagem: development,
        tecnologiasUsadas: ["react", "next.js", "typescript", "tailwindcss"],
        descricao: "Projeto de um site de filmes e series, baseado no themoviedb",
        link: " "
    }
]