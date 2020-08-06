import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function SongItem(prop){
    
        return(

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prop.songInfo} />
            <Card.Body>
            <Card.Title>{prop.songTitle}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            
        )
    
}

export default SongItem 