"use client"
import Link from 'next/link'
import React from 'react'
import { Auth } from '../firebase-config'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [user] = useAuthState(Auth)
    const router = useRouter()

    const logOut = async() =>{
        await signOut(Auth)
        router.push("/")
    }
    return (
        <section className='flex mx-auto items-center justify-between px-5 py-3 border-b-[1px] bg-zinc-300 '>
            <div>
                <Link href={'/'} className='text-[20px] text-black font-bold'>imgGen</Link>
            </div>
            <div className='flex gap-10 items-center'>
                {user ? <><Link className='flex items-center gap-3' href={"./profile"}>
                        <img src={user.photoURL} className="rounded-full w-[50px]" />
                        <p className='text-[19px]  '>{user.displayName}</p>
                </Link>
                <button onClick={logOut} className='text-[19px]  '>SignOut</button> </>:
                    <Link href={'./login'} className='text-[19px]  '>Login</Link>
                }
                <Link href={'./login'} className='text-[19px]  '>About </Link>
                <Link href={'./login'} className='text-[19px]  '>Settings</Link>
            </div>
        </section>
    )
}

export default Navbar