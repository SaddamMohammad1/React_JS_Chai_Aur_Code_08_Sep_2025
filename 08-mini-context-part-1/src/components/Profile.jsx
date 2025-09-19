import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) {
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                    Please Login first.
                </h2>
            </div>
        </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                Welcome, {user.username} 🎉
                </h2>
                <p className="text-gray-600 mt-2">You are now logged in.</p>
            </div>
        </div>
    );
}

export default Profile