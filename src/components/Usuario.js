
import { useState } from "react";

export default function Usuario(props){

    const [nomeUsuario, setNomeUsuario] = useState("catanacomics");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg")

    function alteraNome(){
        let novoNome = prompt("Informe o novo nome de usuário: ");
        if (novoNome) setNomeUsuario(novoNome);
    }

    function alteraImagem(){
        let novaImagem = prompt("Informe o link da nova imagem: ");
        if (novaImagem) setImagem(novaImagem);
    }

    return ( 
        <div className="usuario">
            <img data-test="profile-image" onClick={alteraImagem} src={imagem} alt={props.alt}/>
            <div className="texto">
                <span>
                    <strong><span data-test="name">{nomeUsuario}</span></strong>
                    <ion-icon data-test="edit-name" onClick={alteraNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>);
}