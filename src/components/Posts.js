import Post from "./Post";

export default function Posts(){

    const itens = [ <Post imagemUsuario = "assets/img/meowed.svg" altUsuario = "meowed" usuario = "meowed" 
                          imagemConteudo = "assets/img/gato-telefone.svg" altConteudo = "gato-telefone" 
                          imagemCurtida = "assets/img/respondeai.svg" altCurtida = "respondeai" 
                          usuarioCurtida = "respondeai" curtidas = "101.523" />, 
                    
                    <Post imagemUsuario = "assets/img/barked.svg" altUsuario = "barked" usuario = "barked" 
                          imagemConteudo = "assets/img/dog.svg" altConteudo = "dog" 
                          imagemCurtida = "assets/img/adorable_animals.svg" altCurtida = "adorable_animals" 
                          usuarioCurtida = "adorable_animals" curtidas = "99.159" />,

                    <Post imagemUsuario = "assets/img/perfil-bergamota.jpeg" altUsuario = "bergamota" usuario = "bergamota" 
                          imagemConteudo = "assets/img/bergamota.jpeg" altConteudo = "bergamota" 
                          imagemCurtida = "assets/img/perfil-natgeo.jpeg" altCurtida = "natgeo" 
                          usuarioCurtida = "natgeo" curtidas = "76.356" /> ];
    return (
        <div class="posts">

            <ul class="listaPublicacoes">
                {itens.map((item) => <li>{item}</li>)}
            </ul>     
            
        </div>
    );
}