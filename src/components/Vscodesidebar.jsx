import React, { useEffect , useState } from 'react'

const Vscodesidebar = ({data}) => {

const [apidata , setApiData] = useState();
const [open , setOpen] = useState(false);

 const addFile = () =>{   
   setApiData({
    ...apidata,
    items:[
        ...apidata.items,
        {id:Date.now() , name:`File${Math.random().toFixed(2)}`, isFolder:false}
    ]
   })
  }

const addFolder = () =>{
    setApiData({
        ...apidata,
        items:[
            ...apidata.items,
            {id:Date.now() , name:`Folder${ Math.random().toFixed(2)}`, isFolder:true , items:[]}
        ]
    })
  }

useEffect(()=>{
 setApiData(data) 
 },[data])

    

  return (
    <div>
        <div>
            {/* root button */}
            <div style={{display:"flex" , gap:10 , alignItems:"center"}}>
                <h3 onClick={()=>setOpen((prev)=> !prev)}>{`🗂️ ${apidata?.name}`}</h3>
                <div style={{display:"flex" ,gap:4}}>
                    <button onClick={addFile}>file</button>
                    <button onClick={addFolder}>folder</button>
                </div>
            </div>
            

            <div style={{marginLeft:"20px" , display: open ? "block" : "none"}}>
                {apidata?.items?.map((item)=>{    
                    if(item.isFolder){
                        return <Vscodesidebar key={item.id} data={item}/>
                    }else{
                        return <h4 key={item.id}>{`📄 ${item.name}`}</h4>
                    }
                })}
            </div>

        </div>
    </div>
  )
}

export default Vscodesidebar