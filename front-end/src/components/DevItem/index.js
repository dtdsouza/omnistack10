import React from 'react'

const DevItem = ({user}) => (
        <li className="dev-item">
            <header>
            <img src={user.avatar_url} alt="Daniel Souza" />
            <div className="user-info">
                <strong>{user.name}</strong>
                <span>{user.skills.join('')}</span>
            </div>
            </header>
            <p>{user.bio}</p>
            <a href={`https://github.com/${user.github_username}`}>Acessar Perfil do Github</a>
        </li>   
    )

export default DevItem