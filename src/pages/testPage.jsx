import { useState } from "react";

export default function TestPage(){

    
    const [count,setCount] = useState(0)
    const [status ,setStatus] = useState("Passed")


    return(
        <div className=" w-full h-screen  flex flex-col items-center justify-center"> 
            <div className ="w-[450px] h-[250px] shadow flex items-center justify-center">
                <button onClick={
                    ()=>{
                       setCount(count-1)
                        
                    }
                } className= "bg-blue-600 w-[100px] h-[40px] text-white font-bold text-center text-[20px] cursor-pointer">
                    -
                </button>
                <span className="text-[20px] font-bold text-center w-[40px] mx-[10px] flex items-center justify-center">
                    {count}
                </span>
                <button onClick={()=>{
                   setCount(count+1)
                }} className= "bg-blue-600 w-[100px] h-[40px] text-white font-bold text-center text-[20px] cursor-pointer">
                    +
                </button>
            </div>
            <div className ="w-[450px] h-[250px] shadow flex flex-col items-center justify-center">
               
                <span className="text-[20px] font-bold text-center w-[40px] mx-[10px] flex items-center justify-center">
                    {status}
                </span>
                <div>
                <button onClick={
                    ()=>{
                       setStatus("passed")
                        
                    }
                } className= "bg-blue-600 w-[100px] h-[40px] text-white font-bold text-center text-[20px] cursor-pointer m-2">
                    Passed
                </button>
                <button onClick={()=>{
                   setStatus("Failed")
                }} className= "bg-blue-600 w-[100px] h-[40px] text-white font-bold text-center text-[20px] cursor-pointer m-2">
                   Failed
                </button>
                </div>
            </div>
        </div>
    )
}