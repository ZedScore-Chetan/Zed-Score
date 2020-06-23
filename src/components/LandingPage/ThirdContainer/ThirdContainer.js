import React from 'react';
import classes from './ThirdContainer.module.css';

import BlackCard from '../../BlackCard/BlackCard';


const ThirdContainer = props => {
    return (
        <div className={classes.ThirdContainer}>
            <div className={classes.ThirdTextContainer}>
                <div className={classes.Text}><div className={classes.BottomBar3}></div>What we offer</div>
            </div>
            <div className={classes.viewport}>
                <div className={classes.MainContainer}>
                    <div className={classes.CardContainerTop}>
                        <BlackCard />
                        <BlackCard />
                        <BlackCard />
                    </div>
                    <div className={classes.CardContainerBottom}>
                        <BlackCard />
                        <BlackCard />
                    </div>
                    <div className={classes.container3}>
                        <div className={classes.TextContainer}>
                            <div className={classes.text}>We are Here, You Can be Anywhere !</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdContainer;