"use client"
import { signInWithPopup } from 'firebase/auth'
import { Auth } from '../firebase-config'
import { Provider } from '../firebase-config'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()

    const signIn=async()=> {
        await signInWithPopup(Auth, Provider)
        .then(res=>console.log("login"),
        await router.push("/"))
        .catch(err=>console.log(err))
    }
  return (
    <section className='text-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-black font-bold'>Login here</h1>
            <button onClick={signIn}>Signup with Google</button>
        </div>
    </section>

  )
}

export default page