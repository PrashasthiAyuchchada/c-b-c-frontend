import { useState } from "react";
import toast from "react-hot-toast";
import { createClient } from '@supabase/supabase-js';


export default function TestPage(){
    const [file, setFile] = useState(null)
    const supabase = createClient("https://mbbqqmbehcrvrehmfgfd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYnFxbWJlaGNydnJlaG1mZ2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzY2NzYsImV4cCI6MjA2MzI1MjY3Nn0.sHRgn3JxSaZ5NdY2jso1kp24dXHWS_gS4n3y2QtmL9k")
    
    function handleUpload(){
        const fileName = file.name
        const newFileName = new Date().getTime()+fileName


        supabase.storage.from("images").upload(newFileName, file, {
            cacheControl: "3600",
            upsert: false,
        }).then(
            ()=>{
                toast.success("File upload successfully")
                const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                console.log(url)
            }
            
        ).catch(
            ()=>{
                toast.error("File upload failed")
            }
        )

        

    }


    return(
        <div className=" w-full h-screen  flex flex-col items-center justify-center"> 
            <input type = "file" 
            onChange ={
                (e)=>{
                   setFile(e.target.files[0]);
                }
            }/>
            <button onClick={handleUpload} className="bg-gray-700 text-white p-2 rounded-lg ">Upload</button>
           
           
        </div>
    )
}