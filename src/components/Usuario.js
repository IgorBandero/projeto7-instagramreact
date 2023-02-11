
export default function Usuario(props){

    return ( 
        <div class="usuario">
            <img data-test="profile-image" onClick="" src={props.imagem} alt={props.alt}/>
            <div class="texto">
                <span>
                    <strong><span data-test="name">{props.nome}</span></strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>);
}