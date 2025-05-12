/*{
        productId ,
        name ,
        altNames ,
        price ,
        labeledPrice ,
        description ,
        images ,
        stock 
        }

    }*/







import axios from "axios";

export default function AddProductForm(){


    return(
        <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center"> 
            <div className="w-[500px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col items-center">
                <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                
         







            </div>

        </div>
    )

}