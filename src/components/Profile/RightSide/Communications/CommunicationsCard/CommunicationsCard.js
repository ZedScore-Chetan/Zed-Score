import React from 'react';
import classes from './CommunicationsCard.module.css';

const CommunicationsCard = (props) => {
    return (
        <div className={classes.cardBody}>
            <div className={classes.gridContainer}>
                <div className={classes.pic}><img src={props.pic} alt="ProfileDP" /></div>
                <div className={classes.heading}>
                    <div className={classes.issuer}>{props.issuer}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>
                <div className={classes.subject}>{props.subject}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.controls}><b>⭳</b> Download PDF</div>
            </div>
        </div>
    );
};

export default CommunicationsCard;