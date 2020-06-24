import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './InnerNavBar.module.css';

const InnerNavBar = props => {

    const [activeLink, setActiveLink] = useState(6)

    const clickedHandler = (event, id) => {
        console.log(id);
        setActiveLink(id)
    };

    // const classesList = [classes.LinkInactive, classes.LinkInactive, classes.LinkInactive, classes.LinkInactive, classes.LinkInactive, classes.LinkActive]
    const classesList = [];
    for (let i = 1; i <= 6; i++) {
        if (i === activeLink) {
            classesList.push(classes.LinkActive)
        }
        else {
            classesList.push(classes.LinkInactive)
        }
    }

    return (

        <div className={classes.Container}>
            <nav className={classes.nav}>
                <Link to="/library/quants" className={classesList[0]} id="1" onClick={(event) => clickedHandler(event, 1)}>Quants</Link>
                <Link to="/library/dataInterpretation" className={classesList[1]} id="2" onClick={(event) => clickedHandler(event, 2)}>Data Interpretation</Link>
                <Link to="/library/logicalReasoning" className={classesList[2]} id="3" onClick={(event) => clickedHandler(event, 3)}>Logical Reasoning</Link>
                <Link to="/library/mockTest" className={classesList[3]} id="4" onClick={(event) => clickedHandler(event, 4)}>Mock Tests</Link>
                <Link to="/library/finance" className={classesList[4]} id="5" onClick={(event) => clickedHandler(event, 5)}>GS/GK Finance</Link>
                <Link to="/library/training" className={classesList[5]} id="6" onClick={(event) => clickedHandler(event, 6)}>Financial Training</Link>
            </nav>
        </div>
    );
}

export default InnerNavBar;