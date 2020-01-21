import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div className="App">
      <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário github</label>
          <input name="github_username" id="github_username" required></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required></input>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required></input>
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37113459?s=400&u=19c6e04df4dbfe04e642a0f7fcc318d965c49873&v=4" alt="Daniel Souza" />
              <div className="user-info">
                <strong>Daniel Souza</strong>
                <span>Node.Js</span>
              </div>
            </header>
            <p>Bio Bio Bio Bio Bio Bio Bio</p>
            <a href="https://github.com/dtdsouza">Acessar Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37113459?s=400&u=19c6e04df4dbfe04e642a0f7fcc318d965c49873&v=4" alt="Daniel Souza" />
              <div className="user-info">
                <strong>Daniel Souza</strong>
                <span>Node.Js</span>
              </div>
            </header>
            <p>Bio Bio Bio Bio Bio Bio Bio</p>
            <a href="https://github.com/dtdsouza">Acessar Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37113459?s=400&u=19c6e04df4dbfe04e642a0f7fcc318d965c49873&v=4" alt="Daniel Souza" />
              <div className="user-info">
                <strong>Daniel Souza</strong>
                <span>Node.Js</span>
              </div>
            </header>
            <p>Bio Bio Bio Bio Bio Bio Bio</p>
            <a href="https://github.com/dtdsouza">Acessar Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37113459?s=400&u=19c6e04df4dbfe04e642a0f7fcc318d965c49873&v=4" alt="Daniel Souza" />
              <div className="user-info">
                <strong>Daniel Souza</strong>
                <span>Node.Js</span>
              </div>
            </header>
            <p>Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio</p>
            <a href="https://github.com/dtdsouza">Acessar Perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
