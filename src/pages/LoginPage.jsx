import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleLogin(){
        console.log("email:",email);
        console.log("password:",password);
        console.log("Login button clicked");

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log("Login successful",response.data);
               
            }
        ).catch(
            (error)=>{
                console.log("Login failed",error.response.data);
                toast.error(error.response.data.message||"Login failed");
            }
            
        )
    }


    return(
        <div className= "w-full bg-red-700 h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">
         <div className=" w-[50%] h-full"></div> 
         <div className=" w-[50%] h-full flex items-center justify-center">


            <div className=" w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col items-center justify-center">
                <input onChange={
                     (e)=>{
                        setEmail(e.target.value);
                     }
                }  
                className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="email"/>
                <input onChange={
                    (e)=>{
                        setPassword(e.target.value);
                    }
                }
                className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px] " type="password" placeholder="password"/>
                <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Login</button>
            </div>
          </div>  
           
          
        </div>
    )
}