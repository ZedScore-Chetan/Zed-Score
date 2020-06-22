import React from 'react';
import classes from './TrainingCard.module.css';

import laptopLeft from '../../assets/laptopLeft.png';
import laptopRight from '../../assets/laptopRight.png';
import green2 from '../../assets/green2.png';
import red2 from '../../assets/red2.png';

const TrainingCard = props => {
    var container = null;
    if (props.position === 'left') {
        container = <div className={classes.Outer}>
            <div className={classes.temp}></div>
            <div className={classes.ContainerLeft}>
                <div className={classes.imgContainer}>
                    <img src={laptopLeft} className={classes.laptopLeft}></img>
                </div>
                <div className={classes.TextContainer}>
                    <div className={classes.Heading}>Training heading 1</div>
                    <div className={classes.bottomBar}></div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div className={classes.fillerContainer}>
                <img src={green2} className={classes.filler}></img>
            </div>
        </div>
    }
    else if (props.position === 'right') {

        container = <div className={classes.Outer}>
            <div className={classes.fillerContainer}>
                <img src={red2} className={classes.filler}></img>
            </div>
            <div className={classes.ContainerRight}>
                <div className={classes.TextContainer}>
                    <div className={classes.Heading}>Training heading 1</div>
                    <div className={classes.bottomBar}></div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className={classes.imgContainer}>
                    <img src={laptopRight} className={classes.laptopLeft}></img>
                </div>
            </div>
            <div className={classes.temp}></div>
        </div>
    }
    return (
        <div>
            {container}
        </div>
    );
}

export default TrainingCard;