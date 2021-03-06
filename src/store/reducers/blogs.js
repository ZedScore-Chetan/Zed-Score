import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogs: [],
    loading: false,
    error: false,
    blog: null,
    financial_blog: null,
    error_financial_blog: false,
    loading_financial_blog: false,
    loading_blog: false,
    error_blog: false,
    loading_financial_blogs: false,
    error_financial_blogs: false,
    financial_blogs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs,
                error: false,
                loading: false,
            };
        case actionTypes.SET_FINANCIAL_BLOGS:
            return {
                ...state,
                financial_blogs: action.financial_blogs,
                error_financial_blogs: false,
                loading_financial_blogs: false,
            };
        case actionTypes.FETCH_BLOGS_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCH_FINANCIAL_BLOGS_START:
            return {
                ...state,
                loading_financial_blogs: true,
                error_financial_blogs: false,
            };
        case actionTypes.FETCH_BLOGS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case actionTypes.FETCH_FINANCIAL_BLOGS_FAILED:
            return {
                ...state,
                loading_financial_blogs: false,
                error_financial_blogs: true,
            };
        case actionTypes.FETCH_BLOG_START:
            return {
                ...state,
                loading_blog: true,
                error_blog: false,
            };
        case actionTypes.FETCH_FINANCIAL_BLOG_START:
            return {
                ...state,
                loading_financial_blog: true,
                error_financial_blog: false,
            };
        case actionTypes.SET_BLOG:
            return {
                ...state,
                blog: action.blog,
                loading_blog: false,
                error_blog: false,
            };
        case actionTypes.SET_FINANCIAL_BLOG:
            return {
                ...state,
                financial_blog: action.financial_blog,
                loading_financial_blog: false,
                error_financial_blog: false,
            };
        case actionTypes.FETCH_BLOG_FAILED:
            return {
                ...state,
                error_blog: true,
                loading_blog: false,
            };
        case actionTypes.FETCH_FINANCIAL_BLOG_FAILED:
            return {
                ...state,
                error_financial_blog: true,
                loading_financial_blog: false,
            };
        default: return state;
    }
};

export default reducer;