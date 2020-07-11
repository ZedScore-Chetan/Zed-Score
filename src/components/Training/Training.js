import React, { Component } from 'react';
import classes from './Training.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import GreenBulge from '../../assets/green2.png';
import RedBulge from '../../assets/red2.png';
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../assets/search.png';
import * as actions from '../../store/actions/index';

class Training extends Component {

    state = {
        searchQuery: "",
    };

    componentDidMount() {
        this.props.getFinancialBlogs();
    };

    changeHandler = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    blogClickedHandler = (id) => {
        this.props.history.push("/blogs/content?fId=" + id.toString())
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
                    display = <h1 className={classes.fin_noBlogs}>There are no Blogs !!!</h1>
                }
                else {
                    display = this.props.blogs.map((blog, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div key={blog.id} className={classes.fin_blogLeftContainer}>
                                    <div className={classes.fin_blog}>
                                        <div className={classes.fin_imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.fin_img} />
                                        </div>
                                        <div className={classes.fin_textContainer}>
                                            <div className={classes.fin_heading}>{blog.title}</div>
                                            <div className={classes.fin_text}>
                                                {blog.content1}
                                            </div>
                                            <div onClick={() => this.blogClickedHandler(blog.id)} className={classes.fin_readMoreBtn}>Read More</div>
                                        </div>
                                    </div>
                                    <div className={classes.fin_rightBulgeContainer}>
                                        <img src={GreenBulge} alt="greenBulge" className={classes.fin_rightBulge} />
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div key={blog.id} className={classes.fin_blogRightContainer}>
                                    <div className={classes.fin_leftBulgeContainer}>
                                        <img src={RedBulge} alt="redBulge" className={classes.fin_leftBulge} />
                                    </div>
                                    <div className={classes.fin_blog}>
                                        <div className={classes.fin_imgContainer}>
                                            <img src={blog.picture1} alt="img" className={classes.fin_img} />
                                        </div>
                                        <div className={classes.fin_textContainer}>
                                            <div className={classes.fin_heading}>{blog.title}</div>
                                            <div className={classes.fin_text}>
                                                {blog.content1}
                                            </div>
                                            <div onClick={() => this.blogClickedHandler(blog.id)} className={classes.fin_readMoreBtn}>Read More</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            }
        }

        return (
            <div className={classes.Container}>
                <NavBar />
                <div className={classes.cardsContainer}>
                    <div className={classes.card}>
                        <div className={classes.heading}>Who are We ?</div>
                        <div className={classes.text}>
                            We are a team of Zed Score, that helps trainees to understand the complex concepts of financial world. These programs helps the attendees to develop a common sense approach to understand the complexities of banking and financial structure.
                            The trainer have working experience of risk management, Prime brokerage, Private banking divisions of well reputed investment banks. The agility and open-mindedness of the teams, motivated by an entrepreneurial spirit draws a broad picture of industry’s institutional bodies and their inter relations.
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.heading}>How the training is structured ?</div>
                        <div className={classes.text}>
                            There are two versions of this training - <br /><br />
                            <b>1.</b>  Basic Programmed – This is an 8 hours long training session spread over 2 days. Where we discuss the basics of Investment banking, Risk management, Equity Research and banking Systems and its operations. This programmed is suitable for students of any background preparing for the interviews.
                            <br /><br />
                            <b>2.</b>  Advance Programme – This one also covers the same topics but in an elongated manner. For example the risk management is discussed with greeks, VaR, Pnl attributions to different products and risk of different asset classes and their hedging. The duration of the programme is 16 hour spread over 4 days.

                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.heading}>For whom ?</div>
                        <div className={classes.text}>
                            The basic version is more suitable for those who are -
                                <br />
                            <br />
                                •	Preparing for the upcoming interviews of banks.
                                <br />
                                •	Thinking of joining the financial industry and need clarity of different roles inside.
                                <br />
                                •	Non-financial graduates seeking for the placements in banks and financial consultancy firms.
                                </div>
                        <div className={classes.text}>
                            The Advance version is more suitable for those who are  -
                                <br /><br />
                                •	Working in banks and wants to improve their skills sets.
                                <br />
                                •	Thinking for job switch/promotion.
                                <br />
                                •	Planning for CFA/FRM certifications and wants to strengthen the basics for it.
                                <br />
                        </div>
                    </div>
                </div>
                <div className={classes.bottomContainer}>
                    <div className={classes.textContainer1}>
                        <div className={classes.innerContainer}>
                            <div className={classes.heading}>1. Investment Banking</div>
                            <div className={classes.text}>The module covers three main IB services of investment banks i.e. deal making / Advisory, Capital raising and Executing transactions.
                            This is done by discussing role of Bulge Bracket I-Banks, Middle Market I-Banks and Boutique I-Banks.
                                We connect the dots of different operations within the industry and explain how they are different from retail or commercial banks. In this regard, the below services are discussed – <br /><br />
                                	Front Office- Mergers and Acquisitions (M&A), Debt Capital Markets (DCM), Equity Capital Markets (ECM), Leveraged Finance (LevFin), Restructuring, Structured Finance & Sales and Trading.<br />
                                	Middle office: Risk Management, Treasury<br />
                                	Back office: Compliance, Accounting, Analytics, IT
                            </div>
                        </div>
                        <div className={classes.rightBulgeContainer}>
                            <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                        </div>
                    </div>
                    <div className={classes.textContainer2}>
                        <div className={classes.leftBulgeContainer}>
                            <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                        </div>
                        <div className={classes.innerContainer}>
                            <div className={classes.heading}>2. Equity Research</div>
                            <div className={classes.text}>
                                In this research department of financial institutions we dive into ‘buy side’ and ‘sell side‘research. We discuss the role of Asset Managers (Portfolio Managers, Hedge Funds and Private Equity), Insurance firms. We do the analysis of Investment Banks, Brokers, and Research houses. Further, we walk you through the fundamental and technical methodologies to achieve the above said.<br /><br />
                                <div className={classes.txtContainer}>
                                    <div className={classes.txt}>
                                        Fundamental Analysis, here we analyze - <br /><br />
                                •	The economy, industry and the company<br />
                                •	Parallel understanding the line of business<br />
                                •	Financials forecasting and financial modeling<br />
                                •	Firm valuation.
                                </div>
                                    <div className={classes.txt}>
                                        In the Technical analysis, we analyze - <br /><br />
                                •	Based on historically seen human behavior<br />
                                •	Studying stock price history and focuses on spotting<br />
                                •	Trends and common pattern formations and indicators<br />
                                •	Identifying a better time to time and sell stocks<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.textContainer1}>
                        <div className={classes.innerContainer}>
                            <div className={classes.heading}>3. Risk Management</div>
                            <div className={classes.text}>
                                In this segment the basics of risk management are covered i.e. the process of identification, Analysis, Acceptance and Mitigation of uncertainty.
                                As we proceed the risk quantification is done by segregating the risk into –<br /><br />
                                •	Market Risk ( Equity risk, Currency/FX Risk, Inflation risk Interest rate risk)<br />
                                •	Credit Risk<br />
                                •	Liquidity Risk<br />
                                •	Internal Business Risk<br />
                                •	External Business Risk<br /><br />
                                In the same module we discuss the Product valuation, asset classes and their inter-relations, Trading strategies & Greeks. Further, the regulating bodies and their mandates are also explained. At last, the major financial crisis of history is also discussed.
                            </div>
                        </div>
                        <div className={classes.rightBulgeContainer}>
                            <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                        </div>
                    </div>
                    <div className={classes.textContainer2}>
                        <div className={classes.leftBulgeContainer}>
                            <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                        </div>
                        <div className={classes.innerContainer}>
                            <div className={classes.heading}>4. Banking and its operation</div>
                            <div className={classes.text}>
                                This segment majorly discusses the government and financial bodies mostly within a country. The session tries to draw the connect between commercial banks, Investment banks and central banks.
                                The trainees will get to know –<br /><br />
                                •	How the liquidity is maintained in the market.<br />
                                •	Process of IPO launch and related activities.<br />
                                •	Shared responsibility of government and central banks.<br />
                                •	Decision making of monitory policies, interest rates & demand supply stability.<br />
                                •	Policy related to Inflation, unemployment & open market operation.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.fin_container}>
                    {/* <div className={classes.fin_searchBar}>
                        <div className={classes.fin_searchIconContainer}>
                            <img src={Search} alt="search" className={classes.fin_searchIcon} />
                        </div>
                        <input type="text" onChange={(event) => this.changeHandler(event)} placeholder="Search..." value={this.state.searchQuery} className={classes.fin_search} />
                    </div> */}
                    <div className={classes.fin_blogsConainer}>
                        {display}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.blogs.loading_financial_blogs,
        error: state.blogs.error_financial_blogs,
        blogs: state.blogs.financial_blogs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFinancialBlogs: () => dispatch(actions.getFinancialBlogs()),
        getFinancialBlog: (id) => dispatch(actions.getFinancialBlog(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Training));