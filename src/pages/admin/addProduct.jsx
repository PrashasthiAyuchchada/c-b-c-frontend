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
import { Link } from "react-router-dom";

export default function AddProductForm(){


    return(
        <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center"> 
            <div className="w-[500px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-700 m-[10px]">ADD PRODUCT</h1>
                <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product ID"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Product Name"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Alternative Names"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Price"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Labeled Price"
                />
                 <textarea 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Description"
                />
                 <input 
                className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                placeholder="Stock"
                />
                <div className="w-[400px] h-[100px] flex justify-between items-center rounded-lg">
                    <Link to={"/admin/products"} className="bg-red-500 text-white text-center p-[10px] rounded-lg w-[180px] h-[50px] hover:bg-red-600 cursor-pointer " >Cancel</Link>
                    <button   className="bg-green-500 text-white text-center p-[10px] rounded-lg w-[180px] h-[50px] hover:bg-green-600 cursor-pointer m-2">Submit</button>
                </div>
         







            </div>

        </div>
    )

}