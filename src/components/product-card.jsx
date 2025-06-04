import { Link } from "react-router-dom"

export default function ProductCard(props){

    const product = props.product

    return(
        <Link className="w-[250px] h-[350px] m-4 bg-amber-200 border">
           <img src={product.images[0]}/>
        </Link>
    )
}