import { useAuth } from '../contexts/authContext';
import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, getIdToken } from 'firebase/auth';

const Home = () => {
    const { currentUser } = useAuth();
    const [response, setResponse] = useState('');
    const [userDet, setUserDet] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const { currentUser } = auth;
            const token = await getIdToken(currentUser, true);
            console.log('token', token);
            const response = await axios.post('http://localhost:8000/apipath/test/authorized', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('response', response.data.message, response.data.user);
            setResponse(response.data.message);
            setUserDet(response.data.user);
        } catch (error) {
            console.error('Error:', error.message);
            setResponse('Error: ' + error.response.data.error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Welcome, {currentUser.displayName ? currentUser.displayName : currentUser.email}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        You are now logged in.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Send Request to Protected API Endpoint</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send Request
                        </button>
                    </form>
                    <p className="mt-4 text-gray-600">{response}</p>
                    {Object.keys(userDet).length !== 0 && (
                        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">User Details:</h3>
                            <p className="text-sm text-gray-800"><strong>Name:</strong> {userDet.name}</p>
                            <p className="text-sm text-gray-800"><strong>Email:</strong> {userDet.email}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
