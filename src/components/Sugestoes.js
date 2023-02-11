import Sugestao from "./Sugestao";

export default function Sugestoes(){

    const itens = [ <Sugestao imagem="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" />,
                    <Sugestao imagem="assets/img/chibirdart.svg" alt="chibirdart" nome="chibirdart" razao="Segue você" />,
                    <Sugestao imagem="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" nome="razoesparaacreditar" razao="Novo no Instagram" />,
                    <Sugestao imagem="assets/img/adorable_animals.svg" alt="adorable_animals" nome="adorable_animals" razao="Segue você" />,
                    <Sugestao imagem="assets/img/smallcutecats.svg" alt="smallcutecats" nome="smallcutecats" razao="Segue você" /> ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul class="listaSugestoes">
                {itens.map((item) => <li>{item}</li>)}
            </ul>
            
        </div>
    )
}