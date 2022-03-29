import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';
import './AllTour.css';

const AllTour = () => {
    const [tours,setTour]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tour')
        .then(res => res.json())
        .then(data => setTour(data))
    },[])
    return (
        <div>
            <Row id='allTour' style={{width:"100%"}} xs={1} md={3} className="g-4">
            {
                tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
            }
            </Row>
        </div>
    );
};

export default AllTour;