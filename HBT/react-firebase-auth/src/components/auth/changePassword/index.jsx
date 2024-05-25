import React, { useState } from 'react'
import { doPasswordChange } from '../../../firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [isChanging, setIsChanging] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isChanging) {
            setIsChanging(true)
            try {
                await doPasswordChange(newPassword)
                toast.success('Password changed successfully')
            } catch (error) {
                toast.error('Failed to change password')
                setIsChanging(false)
            }
        }
    }

    return (
        <div>
            <ToastContainer />

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Change Password</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                New Password
                            </label>
                            <input
                                type="password"
                                autoComplete='new-password'
                                required
                                value={newPassword}
                                onChange={(e) => { setNewPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isChanging}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isChanging ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isChanging ? 'Changing...' : 'Change Password'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ChangePassword
