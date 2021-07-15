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
const Div = styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:row;
flex-wrap: wrap;
`

const Card = styled.div`
width:18vw;
padding: 5vh 2vw;
margin:2vh 1vw;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
&:hover{
  background-color:goldenrod;
  border-radius: 12px;
}
`
const Img = styled.img`
width: 200px;
border-radius: 12px;
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
    const titleStyle = {
      paddingLeft:"6%",
      height:"13vh",
      display:"flex",
      alignItems:"flex-end"
    }
    return (
      <>
      <h2 style={titleStyle}>Popular Shows</h2>
      <Div>
        <GlobalStyle/>
        {this.state.shows.map(
          (item) => (
            <Card key={item.id}>
              <div>
                <Img src={item.poster_path}/>
              </div>
              <div>
                <h3>{item.name}</h3>
              </div>
            </Card>
          )
        )}
      </Div>
      </>
    );
  }
}
