import { useState } from "react";

export default function Post(props){

    let numero = Number(props.curtidas);

    const [salvo, setSalvo] = useState(false);
    const [curtido, setCurtido] = useState(false);
    const [cor, setCor] = useState("vermelho");
    const [numCurtidas, setNumCurtidas] = useState(numero);
    const [classeAnimacao, setClasseAnimacao] = useState("containerLike")

    function salvar(){
      const statusSalvo = (salvo) ? false : true;
      setSalvo(statusSalvo);
    }

    function curtir(origem){
      if (curtido) {        
        if (origem === "botao") {
          setNumCurtidas(numCurtidas - 1);
          setCor("black");
          setCurtido(false)
        };        
      }  
      else {
        setNumCurtidas(numCurtidas + 1); 
        setCor("red");
        setCurtido(true);
        if (origem === "imagem") {
          setClasseAnimacao("containerLike curtido");
          setTimeout(() => {setClasseAnimacao("containerLike")}, 500);
        }
      }      
    }

    return (
        <div data-test="post" className="post">

            <div className="topo">
              <div className="usuario">
                <img src={props.imagemUsuario} alt={props.altUsuario}/>     
                {props.usuario}           
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">              
              <img data-test="post-image" onDoubleClick={() => curtir("imagem")} src={props.imagemConteudo} alt={props.altConteudo} />
              <div className={classeAnimacao}>
                <ion-icon name="heart"></ion-icon>
              </div>
            </div>

            <div className="fundo">

              <div className="acoes">
                <div>
                  <ion-icon data-test="like-post" onClick={() => curtir("botao")} name={(curtido) ? "heart" : "heart-outline"} style={{color: cor}}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" onClick={salvar} name={(salvo) ? "bookmark" : "bookmark-outline"}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.imagemCurtida} alt= {props.altCurtida} />
                <div className="texto">
                  Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>outras 
                    <span data-test="likes-number"> {numCurtidas}</span> pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    );
}