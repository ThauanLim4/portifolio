import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {
    return (
        <div className='w-full mx-auto flex justify-center flex-col items-center  gap-10 bg-blackThree p-5'>
            <div className='flex flex-col items-center w-8/12 text-center gap-5'>
                <h2 className='text-3xl font-bold'>Vamo conversar?</h2>
                <p>Se você se interessou, não hesite em entrar em contato! Estou à disposição para esclarecer qualquer dúvida ou fornecer mais informações. Basta me chamar em um dos meios de comunicação listados abaixo e ficarei feliz em conversar com você.</p>
            </div>

            <div>

                <div className='flex gap-3 flex-col items-center'>
                    <a href="https://wa.me/5583998093699" className='flex items-center gap-1 hover:shadow-bgPurpleShadow
                    hover:bg-purpleDefault rounded-sm px-1 text-white  cursor-pointer  transition duration-300 '>
                        <FontAwesomeIcon className='max-md:text-2xl text-xl' icon={faWhatsapp} /> Whatsapp
                    </a>

                    <a href="https://www.instagram.com/thaau_lisouza/" className='flex items-center gap-1  hover:shadow-bgPurpleShadow
                    hover:bg-purpleDefault rounded-sm px-1 text-white cursor-pointer  transition duration-300'>
                        <FontAwesomeIcon className='max-md:text-2xl text-xl' icon={faInstagram} /> Instagram
                    </a>
                    <a href="https://github.com/ThauanLim4" className='flex items-center gap-1  hover:shadow-bgPurpleShadow
                    hover:bg-purpleDefault rounded-sm px-1 text-white cursor-pointer  transition duration-300'>
                        <FontAwesomeIcon className='max-md:text-2xl text-xl' icon={faGithub} /> Github
                    </a>

                    <a href="https://www.linkedin.com/in/thauan-lima-120bb6311/" className='flex items-center gap-1  hover:shadow-bgPurpleShadow
                    hover:bg-purpleDefault rounded-sm px-1 text-white cursor-pointer  transition duration-300'>
                        <FontAwesomeIcon className='max-md:text-2xl text-xl' icon={faLinkedin} /> Linkdin
                    </a>

                    <a href="https://mail.google.com/mail/u/0/#sent?compose=jrjtXGkPHRWCdQmpXFwzKJSfNhpkZtMgdqnKtWMfxtrGLKpWFDQDdtqXsMpWVqrBMgsWflbh" className='flex items-center gap-1  hover:shadow-bgPurpleShadow
                    hover:bg-purpleDefault rounded-sm px-1 text-white cursor-pointer  transition duration-300'>
                        <FontAwesomeIcon className='max-md:text-2xl text-xl' icon={faEnvelope} /> Email
                    </a>
                </div>

            </div>
        </div>
    )
}