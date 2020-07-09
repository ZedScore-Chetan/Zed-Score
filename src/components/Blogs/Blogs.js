import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Blogs.module.css';
import NavBar from '../NavBar/NavBar';
import GreenBulge from '../../assets/green2.png';
import RedBulge from '../../assets/red2.png';
import Search from '../../assets/search.png';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Blogs extends Component {

    state = {
        searchQuery: "",
    };

    componentDidMount() {
        this.props.getBlogs();
    };

    changeHandler = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    blogClickedHandler = (id) => {
        this.props.history.push("/blogs/content?id=" + id.toString())
    };

    render() {

        let display = <Spinner />;

        if (this.props.loading) {
            display = <Spinner />;
        }
        else {
            if (this.props.error) {
                display = <div>There seems to be an error! Please try again later ...</div>
            }
            else {
                if (this.props.blogs.length === 0) {
                    display = <h1 className={classes.noBlogs}>There are no Blogs !!!</h1>
                }
                else {
                    display = this.props.blogs.map((blog, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div key={blog.id} className={classes.blogLeftContainer}>
                                    <div className={classes.blog}>
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.img} />
                                        </div>
                                        <div className={classes.textContainer}>
                                            <div className={classes.heading}>{blog.title}</div>
                                            <div className={classes.text}>
                                                {blog.content1}
                                            </div>
                                            <div onClick={() => this.blogClickedHandler(blog.id)} className={classes.readMoreBtn}>Read More</div>
                                        </div>
                                    </div>
                                    <div className={classes.rightBulgeContainer}>
                                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div key={blog.id} className={classes.blogRightContainer}>
                                    <div className={classes.leftBulgeContainer}>
                                        <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                                    </div>
                                    <div className={classes.blog}>
                                        <div className={classes.imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.img} />
                                        </div>
                                        <div className={classes.textContainer}>
                                            <div className={classes.heading}>{blog.title}</div>
                                            <div className={classes.text}>
                                                {blog.content1}
                                            </div>
                                            <div onClick={() => this.blogClickedHandler(blog.id)} className={classes.readMoreBtn}>Read More</div>
                                        </div>
                                    </div>
                                    {/* <div className={classes.rightBulgeContainer}>
                                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                                    </div> */}
                                </div>
                            );
                        }
                    })
                }
            }
        }

        return (
            <Fragment>
                <NavBar />
                <div className={classes.container}>
                    <div className={classes.searchBar}>
                        <div className={classes.searchIconContainer}>
                            <img src={Search} alt="search" className={classes.searchIcon} />
                        </div>
                        <input type="text" onChange={(event) => this.changeHandler(event)} placeholder="Search..." value={this.state.searchQuery} className={classes.search} />
                    </div>
                    <div className={classes.blogsConainer}>
                        {display}
                        {/* <div className={classes.blogLeftContainer}>
                            <div className={classes.blog}>
                                <div className={classes.imgContainer}>
                                    <img src={Search} alt="img" className={classes.img} />
                                </div>
                                <div className={classes.textContainer}>
                                    <div className={classes.heading}>BLOG 1</div>
                                    <div className={classes.text}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                    <div className={classes.readMoreBtn}>Read More</div>
                                </div>
                            </div>
                            <div className={classes.rightBulgeContainer}>
                                <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                            </div>
                        </div>
                        <div className={classes.blogRightContainer}>
                            <div className={classes.leftBulgeContainer}>
                                <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                            </div>
                            <div className={classes.blog}>
                                <div className={classes.imgContainer}>
                                    <img src={Search} alt="img" className={classes.img} />
                                </div>
                                <div className={classes.textContainer}>
                                    <div className={classes.text}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = state => {
    return {
        loading: state.blogs.loading,
        error: state.blogs.error,
        blogs: state.blogs.blogs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBlogs: () => dispatch(actions.getBlogs()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blogs));