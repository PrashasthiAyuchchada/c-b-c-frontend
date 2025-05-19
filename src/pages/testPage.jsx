import { useState } from "react";

export default function TestPage(){

    
    const [count,setCount] = useState(0)
    const [status ,setStatus] = useState("Passed")


    return(
        <div className=" w-full h-screen  flex flex-col items-center justify-center"> 
            <input type = "file" onChange ={
                (e)=>{
                   console.log (e.target.files)
                }
            }/>

           
           
        </div>
    )
}