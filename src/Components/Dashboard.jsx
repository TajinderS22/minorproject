import React, {useEffect} from 'react'
import ProtectedRoute from './Authentication/ProtectedRoute'
import { useAuth } from '../Utils/UserContext';
import {Navigate} from 'react-router'

function Dashboard() {
    const{isUserLogedIn}=useAuth()
    

    return (
        <ProtectedRoute>
            <div>
                This is  dashboard
            </div>
        </ProtectedRoute>

    )
}
export default Dashboard