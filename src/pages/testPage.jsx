import { useState } from "react";
import toast from "react-hot-toast";
import mediaUpload from "../../utils/mediaUpload";



export default function TestPage(){
    const [file, setFile] = useState(null)
    
    function handleUpload(){
       mediaUpload(file).then(
        (url)=>{
            console.log(url);
            toast.success("File uploaded successfully")
        }
       ).catch(
        (error)=>{
            console.log(error);
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