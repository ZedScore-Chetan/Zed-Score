import React, { Fragment, Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './BlogContent.module.css';
import * as actions from '../../store/actions/index';
import NavBar from '../NavBar/NavBar';
import GreenBulge from '../../assets/green2.png';
import Spinner from '../Spinner/Spinner';

class BlogContent extends Component {

    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id;
        const fId = queryString.parse(this.props.location.search).fId;
        console.log(id)
        console.log(fId)
        if (id) {
            this.props.getBlog(id);
        }
        else if (fId) {
            this.props.getFinancialBlog(fId)
        }
    }

    render() {

        const id = queryString.parse(this.props.location.search).id;
        const fId = queryString.parse(this.props.location.search).fId;

        console.log(this.props.blog)
        console.log(this.props.loading)
        console.log(this.props.error)

        let display = <Spinner />

        if (id) {
            display = <Spinner />;
            if (this.props.loading) {
                display = <Spinner />;
            }
            else {
                if (this.props.error) {
                    display = <div>There seems to be an error! Please try again later ...</div>
                }
                else {
                    if (this.props.blog) {
                        const blog = this.props.blog;
                        console.log(blog);
                        display = (
                            <div className={classes.container}>
                                <div className={classes.blogContainer}>
                                    <div className={classes.heading}>{blog.title}</div>
                                    {blog.picture1 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content1 ?
                                                blog.content1 :
                                                null
                                            }
                                        </div>
                                    </div>
                                    {blog.picture2 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture2} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content2 ?
                                                blog.content2 :
                                                null
                                            }
                                        </div>
                                    </div>
                                    {blog.picture3 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture3} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content3 ?
                                                blog.content3 :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            }
        }
        else if (fId) {
            display = <Spinner />;
            if (this.props.fLoading) {
                display = <Spinner />;
            }
            else {
                if (this.props.fError) {
                    display = <div>There seems to be an error! Please try again later ...</div>
                }
                else {
                    if (this.props.fBlog) {
                        const blog = this.props.fBlog;
                        console.log(blog);
                        display = (
                            <div className={classes.container}>
                                <div className={classes.blogContainer}>
                                    <div className={classes.heading}>{blog.title}</div>
                                    {blog.picture1 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content1 ?
                                                blog.content1 :
                                                null
                                            }
                                        </div>
                                    </div>
                                    {blog.picture2 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture2} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content2 ?
                                                blog.content2 :
                                                null
                                            }
                                        </div>
                                    </div>
                                    {blog.picture3 ?
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture3} alt="img" className={classes.img} />
                                        </div> :
                                        null
                                    }
                                    <div className={classes.textContainer}>
                                        <div className={classes.text}>
                                            {blog.content3 ?
                                                blog.content3 :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            }
        }



        return (
            <Fragment>
                <NavBar />
                {display}
            </Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        blog: state.blogs.blog,
        loading: state.blogs.loading_blog,
        error: state.blogs.error_blog,
        fBlog: state.blogs.financial_blog,
        fLoading: state.blogs.loading_financial_blog,
        fError: state.blogs.error_financial_blog,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBlog: (id) => dispatch(actions.getBlog(id)),
        getFinancialBlog: (id) => dispatch(actions.getFinancialBlog(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogContent));