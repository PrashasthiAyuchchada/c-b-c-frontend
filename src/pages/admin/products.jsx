import axios from "axios";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import toast from "react-hot-toast";
import Loader from "../../components/loader";



export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [loaded, setloaded] = useState(false)
    const navigate = useNavigate()

    useEffect(
        () => {
            if(!loaded){
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
                setloaded(true)
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
            }
        
    }, [loaded]);


    async function deleteProduct(id){

        const token = localStorage.getItem("token")
        if( token == null){
            toast.error("Please login to delete product")
            return
        }
        try{
            await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+id ,{
            headers:{
                Authorization: "Bearer "+token
            }
        })
        setloaded(false)
        toast.success("Product deleted successfully")

        }catch(error){
            console.log(error)
            toast.error("Error deleting product")
            return

        }
 
    }

    return (
        <div className="w-full h-full rounded-lg relative">
            <Link to={"/admin/addProduct"} className="text-white absolute bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-700 right-5 bottom-5">
                <FaPlus />
            </Link>
         { loaded&&   <table className="w-full">
                <thead className="bg-red-900 text-white">
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labeled Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => {

                        return(
                        <tr key={index} className="border border-gray-300 text-center cursor-pointer hover:bg-gray-100">
                            <td className="p-2">{product.productId}</td>
                            <td className="p-2">{product.name}</td>
                            <td className="p-2">{product.price}</td>
                            <td className="p-2">{product.labeledPrice}</td>
                            <td className="p-2">{product.stock}</td>
                            <td className="p-2">
                                <div className="w-full h-full flex justify-center ">
                                    <FaRegTrashAlt onClick={()=>{
                                        deleteProduct(product.productId)
                                        
                                    }

                                    } className=" text-[20px] m-[10px] hover:text-red-500 " />
                                    <GrEdit onClick={()=>{
                                        //load edit product form
                                        navigate("/admin/editProduct",{
                                            state:product 
                                            //bringing produts data to navigating page
                                        })

                                    }} className="text-[20px]  m-[10px]  hover:text-red-500" />
                                </div>
                            </td>
                        </tr> 
                        )
                    }
                )}
                </tbody>
            </table>}

              { !loaded&& <Loader/>
           }
         
          
        </div>

       
    );
}
