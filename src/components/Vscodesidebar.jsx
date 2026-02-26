import React, { useState } from "react"
import { mockData } from "../utils/mock"

const Vscodesidebar = () => {

    const [Folder, setFolder] = useState([]);
    const [File, setFile] = useState([]);

    // destructuring
    const {items=[]} = mockData || {};

    // filtering only folders
    const folders = items?.filter(item => item.isFolder);
  
    //filtering only files
    const files = items?.filter(item => !item.isFolder);
    
    const handleClick = (e) =>{
        const folderName = e.target.innerText;
        const fol = folders.filter(folder => folder.name === folderName) ;
        const {items} = fol[0] || {}
        console.log({items});
        
        items.forEach((item=>{
            if(item.isFolder){
                setFolder(prev => [...prev, item]);
            }else{
                setFile(prev => [...prev, item]);
            }
        }))
        
    }

  return (
    <div>
        <div>
            {folders.map((folder)=>(
                <div key={folder.id} style={{border:"1px solid black" , width:"fit-content" , padding:"3px" , backgroundColor:"#fed250", color:"black"}} onClick={handleClick}>{folder.name}</div>
            ))}
              {Folder?.length > 0 && Folder.map((fol)=>(
                    <div key={fol.id} style={{border:"1px solid black" , width:"fit-content" , padding:"3px" , backgroundColor:"#fed250", color:"black", marginLeft:"20px"}}>{fol.name}</div>   
                ))}

               
            
        </div>

        <div>
            {files.map((file)=>(
                <div key={file.id} style={{border:"1px solid black" , width:"fit-content" , padding:"3px" , backgroundColor:"#dcdcdc", color:"black"}}>{file.name}</div>    
            ))}
        </div>
    </div>
  )
}

export default Vscodesidebar