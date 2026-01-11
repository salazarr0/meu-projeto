function Pessoa (props){
    return(
        <div>
            <img src = {props.foto} alt = {props.nome} width={150} height={150} />
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            
        </div>
    )
}

export default Pessoa;