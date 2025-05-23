import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://mbbqqmbehcrvrehmfgfd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYnFxbWJlaGNydnJlaG1mZ2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzY2NzYsImV4cCI6MjA2MzI1MjY3Nn0.sHRgn3JxSaZ5NdY2jso1kp24dXHWS_gS4n3y2QtmL9k"
);
    

export default function mediaUpload(file){
    const promise = new Promise(
        (resolve,reject)=>{
            if(file== null){
                reject("No file selected")
            }
            const timeStamp = new Date().getTime()
            const newFileName = timeStamp+file.name

             supabase.storage.from("images").upload(newFileName, file, {
            cacheControl: "3600",
            upsert: false,
             }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }
             ).catch(
                (error)=>{
                    console.log(error)
                    reject("File upload failed")
                }
             )
        }
    )
    return promise
}

