import React from 'react'
import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'
import ShowsApi from '../../Services/ShowsApi'

const GlobalStyle= createGlobalStyle`
body{
  background-color:black;
  color:white;
}
`
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`
const PostCard = styled.div`
border: solid 2px black;
width: 80vw;
margin: 1rem;
padding: 5vh 5vw;
list-style:none;
text-align:center;
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
&:hover{
  border:solid 2px white;
  border-radius: 8px;
}
}
`
const Img = styled.img`
width:280px;
`
const Poster= styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;
`
const Overview= styled.div`
width:50%;
font-size: 1.2rem;
display:flex;
justify-content:center;
flex-direction:column;
`
const PosterAndOverview = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content: center;
@media(max-width:900px){
  flex-direction: column;
}
`
const Buttons = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:2rem;
button{
  background-color: red;
  opacity:0.8;
  width: 200px;
  height:40px;
  border: none;
  border-radius: 8px;
  margin-bottom:1rem;
  cursor:pointer;
  font-size: 1rem;
  color:white;
}
`

export default class Shows extends React.Component {
  state = {
    shows: []
  }

  componentDidMount() {
    this.getShows()
  }

  getShows = async () => {
    const response = await ShowsApi.get()
    this.setState({
      shows: response.data.results
    })
    const poster = response.data.results.map(item => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      shows: poster
    });
  }

  render() {
    return (
      <Container>
        <GlobalStyle/>
        {this.state.shows.map(
          (item) => (
            <PostCard key={item.id}>
              <div>
                <h1>{item.name}</h1>
                <h3>First air date: {item.first_air_date}</h3>
              </div>
              <PosterAndOverview>
                <Poster>
                  <Img src={item.poster_path}/>
                  </Poster> 
                <Overview> 
                  <p>{item.overview}</p>
                  <Buttons>
                    <button>Watch Here</button>
                    <button>Download</button>
                  </Buttons>
                </Overview>
              </PosterAndOverview>
            </PostCard>
          )
        )}
      </Container>
    );
  }
}
