// const Moto=(props)=>{
//     return (
//         <div>
//             <h2>
//                 {props.prix}
//             </h2>
//             <DescriptionMoto {...props}></DescriptionMoto>
//         </div>
//     )
// }

const Moto=({moto, prix})=>{
    return (
        <div>
            <h2>
                {prix}
            </h2>
            <DescriptionMoto moto={moto} prix={prix}></DescriptionMoto>
        </div>
    )
}

const DescriptionMoto=(props)=>{
return (
    <li key={props.moto.id}>
    {props.moto.modele} {props.prix}
    </li>
)
}

export {Moto}