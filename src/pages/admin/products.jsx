import axios from "axios"

export default function AdminProductsPage(){

    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (response)=>{
            console.log(response)
        }


    )


    return(
        <div className="w-full h-full bg-red-900 rounded-lg">

        </div>
    )
}