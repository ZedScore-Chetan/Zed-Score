import React from 'react';

import classes from './InnerNavBar.module.css';

const InnerNavBar = props => {
    return (
        
        <div className={classes.Container}>
            <nav className={classes.nav}>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '1' ?  'solid 4px #6990D5' : '',
                }} >Quants</div>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '2' ?  'solid 4px #6990D5' : '',
                }}>Data Interpretation</div>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '3' ?  'solid 4px #6990D5' : '',
                }}>Logical Reasoning</div>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '4' ?  'solid 4px #6990D5' : '',
                }}>Mock Tests</div>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '5' ?  'solid 4px #6990D5' : '',
                }}>GS/GK Finance</div>
                <div className={classes.Link} style={{
                    borderBottom: props.active === '6' ?  'solid 4px #6990D5' : '',
                }}>Training Programme</div>
            </nav>
        </div>
    );
}

export default InnerNavBar;