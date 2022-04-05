import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  return ( 
  <form>
    <input type='text' name='nome do usuario'/>
    <input type='imagem' name='foto do usuario' />
    <input type='numero' name='idade do usuario' />
    <button type='submit' name='Enviar'/>
  </form>
  )
}


class App extends React.Component {
  

  state = {
    
    Usuario: [
      {nomeUsuario:'paulinha', fotoUsuario: 'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
      {nomeUsuario:'Fernanda', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
      {nomeUsuario: 'Christian', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
      {nomeUsuario:'Wislaine', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'}
    ]
  }


  render() {

    const listaDePosts = this.state.Usuario.map((post) => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost
          }
        </p>
       
      );
    });
    console.log(listaDePosts)

    return (
      
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
              <MainContainer>
        <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
            </MainContainer>

            <MainContainer>
        <Post
          nomeUsuario={'Christian'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>

      <MainContainer>
        <Post
          nomeUsuario={'Wislaine'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      </MainContainer>
      
           
      );
  }


}
export default App;


