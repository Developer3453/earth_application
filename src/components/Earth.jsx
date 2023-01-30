
import { Padding } from '@mui/icons-material';
import { display } from '@mui/system';
import React from 'react'
import  {CardGroup, Container}  from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { cardGroup,Card  } from 'react-bootstrap';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';


const Earth = () => {
  return (
    <Container fluid style={{backgroundColor:'royalblue'}} >
      <Container style={{backgroundColor:'red', textAlign: 'center', paddingleft:'20px'}}  >
      
      <h2 style={{
        textAlign: 'center',
        fontSize: '40px ',
        paddingTop: '50px',
        }}> 
The Earth Buddies</h2> <br />

       <h4 style={{
        textAlign: 'center',fontSize: '25px ', marginBottom :'20px'}}> NFTs on an ecological mission </h4>
      

      <Row>
        <Col xs={12} md={5}  >
        <h5 style={{paddingRight:'5px', marginTop:'50px'
      ,  
      }} ><strong> <i>
        A collection of 7,777 digital earthworms that unite the Save Soil community, using NFT art as a medium to be stewards for soil. Owners can unlock special features & exclusive access to events as they contribute to the cause! Theyll make great profile pics too :)
        </i>
        </strong>
        </h5><br></br>



<h5><strong> <i> The Earth Buddies are dynamic, evolving from eggs to full-blown squirmy wormies. Join us in our journey as we celebrate the unsung heroes of our soil!</i></strong> </h5>
        
        
         </Col>
        <Col xs={12} md={5} lg={4}  style={{justifyItems :'right'}} >
          <cardGroup style={{display: 'flex',justifyContent:'space-evenly',marginTop:'50px',algincontent: 'left' }}> 
          <Card style={{ width:'8rem', }} >
        <Card.Img variant="top" src={`${image1}`}/>
      </Card><br/>

      <Card style={{width:'8rem', }}>
        <Card.Img variant="top" src={`${image2}`} />
      </Card><br/>

      <Card style={{width:'8rem' }}>
        <Card.Img variant="top" src={`${image3}`} />
      </Card><br/>
    </cardGroup><br/>

    <cardGroup style={{display: 'flex',justifyContent:'space-evenly',marginBottom:'20px',}}> 
          <Card style={{ width:'8rem', }} >
        <Card.Img variant="top" src={`${image4}`}/>
      </Card><br/>

      <Card style={{width:'8rem', }}>
        <Card.Img variant="top" src={`${image5}`} />
      </Card><br/>

      <Card style={{width:'8rem' }}>
        <Card.Img variant="top" src={`${image6}`}/>
      </Card><br/>
    </cardGroup>



        </Col>
      
        
      </Row>
      </Container>
      </Container >
  )
}

export default Earth;



















/*<Row xs={12} md={12} className="g-4" >
      {Array.from({ length: 0 }).map((_, idx) => (
        <Col>
          <Card style={{width:'8rem'}}>
            <Card.Img variant="top" src="https://earthbuddycollective.com/_next/static/media/82.25492b48.webp"  />
          </Card>
        </Col>
      ))}
    </Row><br/>


    <Row xs={12} md={12} className="g-4">
      {Array.from({ length: 0 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://earthbuddycollective.com/_next/static/media/82.25492b48.webp" />
          </Card>


          <Card>
            <Card.Img variant="top" src="https://earthbuddycollective.com/_next/static/media/82.25492b48.webp" />
          </Card>
        </Col>
      ))}
    </Row>*/