import MoviesPage from './Components/RenderMovies/index.js'
import ShowsPage from './Components/RenderShows/index'
import HomePage from './Components/Home/index'
import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Menu = styled.nav`
height: 16vh;
display: flex;
align-items:flex-end;
justify-content:center;
`
const List = styled.ul`
width:100%;
display: flex;
align-items:center;
justify-content:space-evenly;
list-style: none;
li{
  font-size: 2rem;
}
`
const Title = styled.div`
margin: 3vh auto;
font-size: 25px;
border-bottom: solid 1px white;
display: flex;
align-items:center;
justify-content:center;
`

export default function App() {
  const linkStyle = {
    textDecoration: "underline red", 
    color:"white"
  }
  const titleStyle = {
    color:"red",
    textDecoration:"none"
  }
  return (
    <Router>
      <div>
        <Title>
        <h1>
        <Link to="/DanFlix-react-app" style={titleStyle}>DanFlix</Link>
        </h1>
        </Title>
        <Menu>
          <List>
            <li>
              <Link to="/home" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/movies" style={linkStyle}>Movies</Link>
            </li>
            <li>
              <Link to="/shows" style={linkStyle}>Shows</Link>
            </li>
          </List>
        </Menu>

        <Switch>
          <Route path="/DanFlix-react-app" exact={true}>
            <HomePage/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/movies">
          <MoviesPage/>
          </Route>
          <Route path="/shows">
          <ShowsPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
