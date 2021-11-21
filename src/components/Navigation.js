import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to = '/' exact >Home</NavLink>
            <NavLink to = '/teams' exact >Teams</NavLink>
        </div>
    )
}

export default Navigation
