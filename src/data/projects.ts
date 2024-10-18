import byteStoreImg from "@/img/byteStore.png";
import lojaTenis from "@/img/lojaTenis.png";
import codeflix from "@/img/codeflix.png";

export const Projects = [
    {
        id: 1, nomeDoProjeto: "CodeFLix", imagem: codeflix, tecnologiasUsadas: ["html", "css", "javascript", "php", "sql"], descricao: "Plataforma simples de cursos gratuitos de programação disponíveis na internet, primeiro projeto no qual uso uma linguage back-end e um banco de dados", link: ""
    },

    {
        id: 2, nomeDoProjeto: "ByteStore", imagem: byteStoreImg, tecnologiasUsadas: ["html", "css", "javascript"], descricao: "Pagina de vendas simples de produtos do ramo de tecnologia", link: "https://vercel.live/link/landing-page-tec.vercel.app?via=deployment-domains-list&p=1"
    },

    {
        id: 3, nomeDoProjeto: "TenisStore", imagem: lojaTenis, tecnologiasUsadas: ["html, css, javascript"], descricao: "Pagina de vendas de tênis bem simples, um dos meus primeiros projetos", link: "https://vercel.live/link/landing-page-tec.vercel.app?via=deployment-domains-list&p=1"
    }
]