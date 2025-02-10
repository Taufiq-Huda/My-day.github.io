import { FormEvent, FormEventHandler, useState } from 'react'

interface EconomicProp{
    onUpload : ()=>void
}
export default function Economic({onUpload}:EconomicProp) {
    const [field, setfield] = useState<string>("")
    const [amount, setamount] = useState<number>(0)
    const handleSubmit:FormEventHandler = async (e:FormEvent)=>{
        e.preventDefault()
        console.log("T", field)
        console.log("N", import.meta.env.VITE_SERVER)
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/event/new/Economy`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem("auth-token")!,
                "fields" : JSON.stringify({
                        field : field,
                        amount : amount,
                        source : "string" 
                    })
            },
            body: null,
        });
        const data = await response.json();
        if(data.status== 'ok'){
            setfield("")
            setamount(0)
            onUpload()
        }
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col text-2xl p-3'>
        <h2 className='text-center'>Modal Title1</h2>
        {/* <button onClick={closeModal} >Close</button> */}
        <input
            type="text"
            value={field}
            onChange={(e) => setfield(e.target.value)}
            placeholder="Enter your name"
        />
        <input
            type="number"
            value={amount}
            onChange={(e) => setamount(Number(e.target.value))}
            placeholder="Enter your name"
        />
        <button type='submit'>Submit</button>
    </form>)
}
