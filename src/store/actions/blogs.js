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

export const getFinancialBlogs = () => {
    return dispatch => {
        dispatch(fetchFinancialBlogsStart());
        fetch('https://clearquantstest.herokuapp.com/financial-blog/', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(setFinancialBlogs(data))
            })
            .catch(err => dispatch(fecthFinancialBlogsFailed(err)))
    };
};

export const fetchBlogsStart = () => {
    return {
        type: actionTypes.FETCH_BLOGS_START,
    };
};

export const fetchFinancialBlogsStart = () => {
    return {
        type: actionTypes.FETCH_FINANCIAL_BLOGS_START,
    };
};

export const setBlogs = (data) => {
    console.log(data);
    return {
        type: actionTypes.SET_BLOGS,
        blogs: data,
    };
};

export const setFinancialBlogs = (data) => {
    console.log(data);
    return {
        type: actionTypes.SET_FINANCIAL_BLOGS,
        financial_blogs: data,
    };
};

export const fecthBlogsFailed = (err) => {
    console.log(err)
    return {
        type: actionTypes.FETCH_BLOGS_FAILED,
    };
};

export const fecthFinancialBlogsFailed = (err) => {
    console.log(err)
    return {
        type: actionTypes.FETCH_FINANCIAL_BLOGS_FAILED,
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
            .catch(err => dispatch(fetchBlogFailed(err)))
    };
}

export const getFinancialBlog = (id) => {
    console.log('fetching')
    return dispatch => {
        dispatch(fetchFinancialBlogStart());
        fetch('https://clearquantstest.herokuapp.com/financial-blog/' + id, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(setFinancialBlog(data))
            })
            .catch(err => dispatch(fetchFinancialBlogFailed(err)))
    };
}

export const fetchBlogStart = () => {
    console.log('fetching start')
    return {
        type: actionTypes.FETCH_BLOG_START,
    };
}

export const fetchFinancialBlogStart = () => {
    console.log('fetching start')
    return {
        type: actionTypes.FETCH_FINANCIAL_BLOG_START,
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

export const setFinancialBlog = (data) => {
    console.log('setting')
    console.log(data)
    return {
        type: actionTypes.SET_FINANCIAL_BLOG,
        financial_blog: data,
    };
};

export const fetchBlogFailed = (err) => {
    return {
        type: actionTypes.FETCH_BLOG_FAILED,
    };
};

export const fetchFinancialBlogFailed = (err) => {
    return {
        type: actionTypes.FETCH_FINANCIAL_BLOG_FAILED,
    };
};