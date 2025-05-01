import { Link, Route, Routes } from "react-router-dom";
import { HiUsers } from "react-icons/hi2";
import { AiFillProduct } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa6";
export default function AdminPage() {

   return(
    <div className="w-full h-screen bg-gray-200 flex p-2">
        <div className="h-full w-[300px] ">
            <Link to="/admin/users" className=" p-2 border m-5 flex justify-center items-center" ><HiUsers className="mr-2" />Users</Link>
            <Link to="/admin/products" className=" p-2 border m-5 flex justify-center items-center"><AiFillProduct className="mr-2"/>Products</Link>
            <Link to="/admin/orders" className=" p-2 border m-5 flex justify-center items-center"><FaFileInvoice className="mr-2" />Orders</Link>
        </div>
        <div className="h-full w-[calc(100vw-300px)] bg-white rounded-lg ">
            <Routes path="/*">
                <Route path= "/users" element={<h1>Users</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/orders" element={<h1>Orders</h1>}/>

            </Routes>
        </div>

    </div>
   )


}