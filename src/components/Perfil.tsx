const dia = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

export const Perfil = () =>{
    const img: string = './../app/perfil.png'

    return(
        <div className="w-auto h-14 text-white flex items-center gap-3">
            <img className="max-w-14 rounded-full" src={img} alt="" />
            <h3 className="text-2xl">Óla  <span className="text-yellow-400">Thauan - {dia()}</span></h3>
        </div>
    )
}