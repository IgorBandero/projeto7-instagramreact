import Post from "./Post";

export default function Posts(){

    const itens = [ {imagemUsuario : "assets/img/meowed.svg", altUsuario : "meowed", usuario : "meowed", 
                     imagemConteudo : "assets/img/gato-telefone.svg", altConteudo : "gato-telefone", 
                     imagemCurtida : "assets/img/respondeai.svg", altCurtida : "respondeai", 
                     usuarioCurtida : "respondeai", curtidas : "101523"}, 
                    
                    {imagemUsuario : "assets/img/barked.svg", altUsuario : "barked", usuario : "barked", 
                     imagemConteudo : "assets/img/dog.svg", altConteudo : "dog", 
                     imagemCurtida : "assets/img/adorable_animals.svg", altCurtida : "adorable_animals", 
                     usuarioCurtida : "adorable_animals", curtidas : "99159"},

                    {imagemUsuario : "assets/img/perfil-bergamota.jpeg", altUsuario : "bergamota", 
                     usuario : "bergamota", imagemConteudo : "assets/img/bergamota.jpeg", 
                     altConteudo : "bergamota", imagemCurtida : "assets/img/perfil-natgeo.jpeg", 
                     altCurtida : "natgeo", usuarioCurtida : "natgeo", curtidas : "76356"} ];
    return (
        <div className="posts">

            <ul className="listaPublicacoes">
                {itens.map(function (item) {
                                return (<li key={item.altConteudo}><Post imagemUsuario={item.imagemUsuario} 
                                                                         altUsuario={item.altUsuario} 
                                                                         usuario={item.usuario} 
                                                                         imagemConteudo={item.imagemConteudo}
                                                                         altConteudo={item.altConteudo}
                                                                         imagemCurtida={item.imagemCurtida}
                                                                         altCurtida={item.altCurtida}
                                                                         usuarioCurtida={item.usuarioCurtida}
                                                                         curtidas={item.curtidas} /></li>);
                })}
            </ul>     
            
        </div>
    );
}