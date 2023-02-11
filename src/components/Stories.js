import Story from "./Story";

export default function Stories(){

    const itens = [ <Story imagem="./assets/img/9gag.svg" alt="9gag" usuario="9gag" /> ,
                    <Story imagem="./assets/img/meowed.svg" alt="meowed" usuario="meowed" />,
                    <Story imagem="./assets/img/barked.svg" alt="barked" usuario="barked" />,
                    <Story imagem="./assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" usuario="nathanwpylestrangeplanet" />,
                    <Story imagem="./assets/img/wawawicomics.svg" alt="wawawicomics" usuario="wawawicomics" />,
                    <Story imagem="./assets/img/respondeai.svg" alt="respondeai" usuario="respondeai" />,
                    <Story imagem="./assets/img/filomoderna.svg" alt="filomoderna" usuario="filomoderna" />,
                    <Story imagem="./assets/img/memeriagourmet.svg" alt="memeriagourmet" usuario="memeriagourmet" /> ];
    return (
        <div class="stories">

          <ul class="listaStories">
            {itens.map((item) => <li>{item}</li>)}
          </ul>
          
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
          
        </div>
    )
}