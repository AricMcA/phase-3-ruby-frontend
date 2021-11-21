import React from 'react'

const Navigation = () => {
    return (
        <div>
            <Navlink
                to = '/'
                exact
                style={link}
                activeStyle={{
                    background: 'orange'
                }}
            >Home</Navlink>
            
            <Navlink
                to = '/teams'
                exact
                style={link}
                activeStyle={{
                    background: 'orange'
                }}
            >Teams</Navlink>
        </div>
    )
}

export default Navigation
