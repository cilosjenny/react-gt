//props é um objeto
//podemos chamar o conteudo q foi criado somente uma vez, chamar varias vezes
//podemos mudar o conteudo em cada vez q chamarmos
 //prop se passa valores


//export default function Button(props){
//     return(
//         <button>{props.conteudo}</button>
//     );
// }

//ou desestruturado

export default function Button({conteudo}){
    return(
        <button>{conteudo}</button>
    );
}