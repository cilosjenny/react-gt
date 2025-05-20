//children permite criar estruturas dentro de um componente 
//children é um nome reservado

export default function Card({children}){
    return(
        <div>
            {children}
        </div>
    );
}