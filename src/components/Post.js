export default function Post(props){

    return (
        <div data-test="post" class="post">

            <div class="topo">
              <div class="usuario">
                <img src={props.imagemUsuario} alt={props.altUsuario}/>     
                {props.usuario}           
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img data-test="post-image" onClick="" src={props.imagemConteudo} alt={props.altConteudo} />
            </div>

            <div class="fundo">

              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" onClick="" name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" onClick="" name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagemCurtida} alt= {props.altCurtida} />
                <div class="texto">
                  Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>outras <span data-test="likes-number">{props.curtidas}</span> pessoas</strong>
                </div>
              </div>

            </div>

        </div>
    );
}