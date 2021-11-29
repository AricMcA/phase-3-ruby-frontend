import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to = '/' exact >Home</NavLink>
            <NavLink to = '/teams' exact >Teams</NavLink>
            <NavLink to = '/players/new' exact >Create Player</NavLink>
            <NavLink to = '/teams/new' exact >Create Team</NavLink>
        </div>
    )
}

export default Navigation
