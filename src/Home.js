import React from 'react'
import { auth } from './firebase'
const Home = () => {
    return (
        <div>
            <h1>Social Media App </h1>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Home