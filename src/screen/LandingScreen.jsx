import React, { useState } from 'react'

const LandingScreen = () => {

  const data=["https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

  const [selectedImg,setSelectedImg]=useState();


  return (
    <div>
      <h1 className='text-3xl font-semibold'>Click on an Image!</h1>
      <div className='image-main-div'>
        {data.map((item,index)=>{
          return(
            <div className='image-card' key={index}>
            <img src={item} onClick={()=>setSelectedImg(item)} alt="img" />
            
          </div>
          )
        })}
      
      </div>

      <div className='selected-img'>
        {selectedImg?<p className=' text-2xl py-5'>Selected Image</p>:""}
        {selectedImg?(<img src={selectedImg} />):""}
      </div>
      
    </div>
  )
}

export default LandingScreen
