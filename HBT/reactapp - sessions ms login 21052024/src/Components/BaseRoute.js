import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'

const BaseRoute = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </>
                    :
                    <div className=''>
                      <div className='mr-8'>
                        <Link className='text-sm text-blue-600 underline ' to={'/login'}>Login</Link>
                        </div>
                        <Link className='text-sm text-blue-600 underline ml-5' to={'/register'}>Register New Account</Link>
                    </div>
            }

        </nav>
    )
}

export default BaseRoute;