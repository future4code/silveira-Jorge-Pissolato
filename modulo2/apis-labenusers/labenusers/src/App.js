
import './App.css';
import axios from 'axios'

const getAllPlaylists = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      Authorization: "Jorge-Pissolato-SS"
    }
  })
};

function App() {
  return (
    <div>
      <div>
        <button>Lista de Usuários</button>
      </div>

      <input placeholder='nome' />
      <input placeholder='E-mail' />
      <button>Enviar</button>
    </div>
  );
}

export default App;
