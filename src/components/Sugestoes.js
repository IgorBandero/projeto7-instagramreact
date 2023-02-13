import Sugestao from "./Sugestao";

export default function Sugestoes(){

    const itens = [ {imagem:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
                    {imagem:"assets/img/chibirdart.svg", alt:"chibirdart", nome:"chibirdart", razao:"Segue você"},
                    {imagem:"assets/img/razoesparaacreditar.svg", alt:"razoesparaacreditar", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
                    {imagem:"assets/img/adorable_animals.svg", alt:"adorable_animals", nome:"adorable_animals", razao:"Segue você"},
                    {imagem:"assets/img/smallcutecats.svg", alt:"smallcutecats", nome:"smallcutecats", razao:"Segue você"} ];
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul className="listaSugestoes">
                {itens.map((item) => <li key={item.nome}> <Sugestao imagem={item.imagem} 
                                                    alt={item.alt} 
                                                    nome={item.nome} 
                                                    razao={item.razao} /> </li>
                )}
            </ul>
            
        </div>
    )
}