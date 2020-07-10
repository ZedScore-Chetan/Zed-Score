import React from 'react';

import TimeTableCard from './TimeTableCard/TimeTableCard';

import classes from './TimeTable.module.css';

import backgroundImage from '../../Assets/background.png';

const TimeTable = (props) => {
    console.log(props.communications);
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.wrapper}>
            {props.timeTableData.map((element) => (
                <TimeTableCard
                    issuer={element.issuer}
                    topic={element.topic}
                    time={element.time}
                    key={element.announcementID} />
            ))}
        </div>
    );
}

export default TimeTable;