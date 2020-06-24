import React, { Component } from 'react';

import classes from './QueryForm.module.css';

class QueryForm extends Component {

    state = {
        name: null,
        email: null,
        message: null,
    }

    changeHandler = (e, type) => {
        if (type === "name") {
            this.setState({ name: e.target.value });
        }
        else if (type === "email") {
            this.setState({ email: e.target.value });
        }
        else if (type === "message") {
            this.setState({ message: e.target.value });
        }
    }

    render() {

        console.log(this.state.name);
        return (
            <div className={classes.form}>
                <div className={classes.container}>
                    <div className={classes.header}>Name</div>
                    <input type="text" className={classes.inputText} value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} />
                </div>
                <div className={classes.container}>
                    <div className={classes.header}>Email</div>
                    <input type="text" className={classes.inputText} value={this.state.email} onChange={(event) => this.changeHandler(event, "email")} />
                </div>
                <div className={classes.container}>
                    <div className={classes.header}>Message</div>
                    {/* <input type="textarea" className={classes.inputTextArea} value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} /> */}
                    <textarea rows={5} className={classes.inputTextArea} value={this.state.message} onChange={(event) => this.changeHandler(event, "message")} />
                </div>
                <div className={classes.sendBtnContainer}>
                    <div className={classes.sendBtn}>Send Now</div>
                </div>
            </div>
        );
    };
};

export default QueryForm;