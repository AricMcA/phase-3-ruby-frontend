import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = ({team}) => {
    return (
        <div>
            <Link to = {`/teams/${team.id}`}>
                <h3>{team.name}</h3>
            </Link>
        </div>
    )
}

export default TeamLink
