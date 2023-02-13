import Story from "./Story";

export default function Stories(){

    const itens = [ {imagem: "./assets/img/9gag.svg", alt: "9gag", usuario: "9gag"},
                    {imagem: "./assets/img/meowed.svg", alt: "meowed", usuario: "meowed"},
                    {imagem: "./assets/img/barked.svg", alt: "barked", usuario: "barked"},
                    {imagem: "./assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", usuario: "nathanwpylestrangeplanet"},
                    {imagem: "./assets/img/wawawicomics.svg", alt: "wawawicomics", usuario: "wawawicomics"},
                    {imagem: "./assets/img/respondeai.svg", alt: "respondeai", usuario: "respondeai"},
                    {imagem: "./assets/img/filomoderna.svg", alt: "filomoderna", usuario: "filomoderna"},
                    {imagem: "./assets/img/memeriagourmet.svg", alt: "memeriagourmet", usuario: "memeriagourmet"}];
    return (
        <div className="stories">

          <ul className="listaStories">
            {itens.map((item) => <li key={item.usuario}><Story imagem={item.imagem} 
                                            alt={item.alt} 
                                            usuario={item.usuario} /></li>
            )}
          </ul>
          
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
          
        </div>
    )
}