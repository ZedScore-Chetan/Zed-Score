import React from 'react';
import classes from './Training.module.css';

import NavBar from '../NavBar/NavBar';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import TrainingTopImage from '../../assets/TrainingTopImage.png';
import TrainingCard from '../TrainingCard/TrainingCard';
import bottomBlackThin from '../../assets/bottomBlackThin.png';

const Training = props => {
    var materials = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }, { item: 5 }, { item: 6 }, { item: 7 }, { item: 8 }];
    return (
        <div className={classes.Container}>
            <NavBar />
            <InnerNavBar active={props.active} />
            <div className={classes.Top}>
                <div className={classes.TextContainer}>
                    <div className={classes.Heading}>Training 1</div>
                    <div className={classes.BottomBar}></div>
                    <div className={classes.text}>Replicating the real-time Examination paper</div>
                </div>
                <div className={classes.ImageContainer}>
                    <img src={TrainingTopImage} className={classes.image} />
                </div>
            </div>
            <div className={classes.Material}>
                {materials.map((item, index) => (
                    <TrainingCard position={((item.item % 2) === 1) ? 'left' : 'right'} />
                ))}
                <div className={classes.bottomBlackContainer}>
                    <a href="#top" className={classes.topButton}>Go to top</a>
                    <div className={classes.textContainer}>
                        <div className={classes.fb}></div>
                        <div className={classes.wh}></div>
                        <div className={classes.ph}></div>
                    </div>
                    <img src={bottomBlackThin} className={classes.bottomBlack}></img>
                </div>
            </div>

        </div>
    );
}

export default Training;