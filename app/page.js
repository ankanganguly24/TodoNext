"use client"
import React, { useState } from 'react'

const page = () => {

  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }])
    setTask("")
    setDesc("")
  } 

  let renderTask = <h4>No Tasks for now</h4>;

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li className='flex item-center justify-between'>
        <div className='flex justify-between mb-3 w-2/3'>
          <h4 className='font-serif'>Task:   {t.task}</h4>
          <h6 className='font-serif'>Description:  {t.desc}</h6>
          <button className='bg-red-300 text-white rounded font-bold'> Delete </button>
          </div>
        </li>
  
    )})
  }



  return (
    <>
    <div className='bg-black '>
        <h1 className='text-white font-semibold font-serif text-4xl p-7 text-center'>My ToDo</h1>
    </div>

    <div className='flex justify-center '>
      <form onSubmit={submitHandler}>
        
        <input className='justify-center mx-2 border-black border-4 rounded my-5 text-center' placeholder='Whats your ToDo' type='text' value={task} onChange={(e)=>setTask(e.target.value)}>
        </input>

        <input className='justify-center mx-2 border-black border-4 rounded my-5 text-center' placeholder='Description' type='text' value={desc} onChange={(e)=>setDesc(e.target.value)}>
        </input>

        <button className='mx-3 px-3 border-2 bg-stone-400 font-semibold rounded'>Add</button>

      </form>
      </div>
      <hr/>
      <div className='bg-black text-white w-3/4 p-2 mt-4 ml-20'>
        <ol>{renderTask}</ol>
      </div>
    </>

  )
}

export default page
