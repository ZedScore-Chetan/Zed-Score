import * as actionTypes from './actionTypes';

export const getBlogs = () => {
    return dispatch => {
        dispatch(fetchBlogsStart());
        fetch('https://clearquantstest.herokuapp.com/blog/', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(setBlogs(data))
            })
            .catch(err => dispatch(fecthBlogsFailed(err)))
    };
};

export const fetchBlogsStart = () => {
    return {
        type: actionTypes.FETCH_BLOGS_START,
    };
};

export const setBlogs = (data) => {
    console.log(data);
    return {
        type: actionTypes.SET_BLOGS,
        blogs: data,
    };
};

export const fecthBlogsFailed = (err) => {
    console.log(err)
    return {
        type: actionTypes.FETCH_BLOGS_FAILED,
    };
};

export const getBlog = (id) => {
    console.log('fetching')
    return dispatch => {
        dispatch(fetchBlogStart());
        fetch('https://clearquantstest.herokuapp.com/blog/' + id, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(setBlog(data))
            })
            .catch(err => dispatch(fecthBlogFailed(err)))
    };
}

export const fetchBlogStart = () => {
    console.log('fetching start')
    return {
        type: actionTypes.FETCH_BLOG_START,
    };
}

export const setBlog = (data) => {
    console.log('setting')
    console.log(data)
    return {
        type: actionTypes.SET_BLOG,
        blog: data,
    };
};

export const fecthBlogFailed = (err) => {
    return {
        type: actionTypes.FETCH_BLOG_FAILED,
    };
};