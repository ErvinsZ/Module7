import React, {Component} from "react"
import {Navbar, Form, Nav, Button, FormControl, NavDropdown,Row} from "react-bootstrap"
import SongItem from "../SongItem"


interface HomeState {
    songs: [],
    search: string
}
class Home extends Component <HomeState> {
    state: HomeState={
        songs:[],
        search:""
    }
    render(){
           

    s = (event) => {
        this.setState({search: event.currentTarget.value})
    }

    fetchData = async() => {
   const response= await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.search, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "60a14be2e2mshc09f8e2d55f2a80p1322bdjsnad6771061050"
        }
    })
    const data = await response.json()
    this.setState({ songs: data.data })
    console.log(data)

   }
        return(
            <>
                 <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl onChange={this.s} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={this.fetchData} variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>

            <Row>
              {this.state.songs.map(song => <SongItem songInfo ={song.album.cover} songTitle ={song.title} key ={song.id}/>)}
          </Row>
            </>
        )
    }
}

export default Home