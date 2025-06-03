import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    function handleLogin(){
       
        setLoading(true)

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log("Login successful",response.data);
                toast.success("Login sussessful");
                localStorage.setItem("token",response.data.token)

                const user = response.data.user;

                if(user.role === "admin"){
                    //go to the adminPage
                    navigate("/admin")
                }else{
                    //go to the homePage
                    navigate("/")
                }

                setLoading(false)
               
            }
        ).catch(
            (error)=>{
                console.log("Login failed",error.response.data);
                toast.error(error.response.data.message||"Login failed");
                 setLoading(false)
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
                <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-600 text-white rounded-xl cursor-pointer">
                    
                    {
                        loading?"Loading...":"Login"
                    }
                    
                </button>

                    
        
                    <p className="text-gray-600">
                        Don't have an account yet?

                        &nbsp;
                      
                        
                       <span className="text-green-500 cursor-pointer hover:text-green-700">
                            <Link to={ "/register"} >Register Now</Link>
                        </span>

                    </p>




            </div>
          </div>  
           
          
        </div>
    )
}
