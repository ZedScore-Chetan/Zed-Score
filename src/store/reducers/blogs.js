import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogs: [],
    loading: false,
    error: false,
    blog: null,
    loading_blog: false,
    error_blog: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs,
                error: false,
                loading: false,
            };
        case actionTypes.FETCH_BLOGS_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCH_BLOGS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case actionTypes.FETCH_BLOG_START:
            return {
                ...state,
                loading_blog: true,
                error_blog: false,
            };
        case actionTypes.SET_BLOG:
            return {
                ...state,
                blog: action.blog,
                loading_blog: false,
                error_blog: false,
            };
        case actionTypes.FETCH_BLOG_FAILED:
            return {
                ...state,
                error_blog: true,
                loading_blog: false,
            };
        default: return state;
    }
};

export default reducer;