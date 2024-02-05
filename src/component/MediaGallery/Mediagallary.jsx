import React, { useContext, useEffect, useState } from 'react';
import '../MediaGallery/Mediagallary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { context } from '../../App';



function ResponsiveExample() {
  const { serverLink } = useContext(context)
  const [Photo, setPhoto] = useState('')
  const [showMediaPhoto, setshowMediaPhoto] = useState([])

  useEffect(() => {
    ShowPhoto()
  }, [])

  const mediaPhoto = async() => {
    try {
      const formData = new FormData();
      formData.append("Photo", Photo);
  
      const result = await axios.post(`${serverLink}/Media/addPhoto`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      setshowMediaPhoto([...showMediaPhoto, result]);
      alert("Your Photo has been added");
      ShowPhoto();
      setPhoto();
    } catch (error) {
      console.error("Error", error);
    }
  };


  const ShowPhoto = async () => {
    let result = await axios.get(`${serverLink}/Media/showMediaPhoto`)
    result = result.data
    setshowMediaPhoto(result)
    // console.log(result);
  }


  return (
    <>
      <div className="Mediaheading">
        <h1>Media/Gallery</h1>
      </div>
      <hr />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        {showMediaPhoto.map((ShowImg, index) => (
          <div className='mediaPhotos' key={index}>
            {ShowImg?.Photo?.filename && <img src={`${serverLink}/uploads/${ShowImg.Photo.filename}`} alt="" />}
            
          </div>
        ))}

      </Container>

      <Form.Group as={Col} >
        <Form.Label className='media'>Photo</Form.Label>
        <Form.Control
          required
          type="File"
          onChange={(e) => setPhoto(e.target.files[0])}
        >
        </Form.Control>
      </Form.Group>
      <div className="btn">
        <button onClick={(e) => {
          e.preventDefault()
          mediaPhoto()
        }}>Add</button>

      </div>
    </>
  );
}

export default ResponsiveExample;