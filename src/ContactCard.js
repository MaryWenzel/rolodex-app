import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

const ContactCard = (props) => {

    const [isActive, setActive] = useState('false');

    const handleClick = () => {
        setActive(!isActive);
    }

    if (isActive) {
        return (
            <Fade>
            <li className='userCard1'>
                <div >
                    <img src={props.user.picture.large}></img>
                    <h2>{props.user.name.first}<br></br>{props.user.name.last}</h2>
                </div>
                <button onClick={handleClick}>View Details</button>
            </li>
            </Fade>
        )
    } else {
        return (
                <LightSpeed left>
            <li className="userCard2">
                <div>
                    <h2>{props.user.name.first} {props.user.name.last}</h2>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Phone: {props.user.phone}</li>
                        <li>Cell: {props.user.cell}</li>
                        <li>Email: {props.user.email}</li>
                        <br/>
                        <li>
                            <p>{props.user.location.street.number} {props.user.location.street.name}<br></br>{props.user.location.city} {props.user.location.state} {props.user.location.postcode} {props.user.location.country}</p>
                        </li>
                    </ul>
                </div>
                <button  onClick={handleClick}>Hide Details</button>
            </li>
                </LightSpeed>
        )}
}

export default ContactCard
