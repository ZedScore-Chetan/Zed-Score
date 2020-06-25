import React from 'react';

import CommunicationsCard from './CommunicationsCard/CommunicationsCard';

import classes from './Communications.module.css';

import backgroundImage from '../../Assets/background.png';

const Communications = (props) => {
    console.log(props.communications);
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.wrapper}>
            {props.communications.map((element) => (
                <CommunicationsCard
                    issuer={element.issuer}
                    subject={element.subject}
                    pic={element.pic}
                    time={element.time}
                    message={element.message}
                    key={element.announcementID} />
            ))}
        </div>
    );
}

export default Communications;