import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DigitalMarketing.module.css';
import Home from '../../assets/home.png';
import GreenBulge from '../../assets/green2.png';
import RedBulge from '../../assets/red2.png';

const DigitalMarketing = props => {
    return (
        <div className={classes.container}>
            <Link to="/" className={classes.homeContainer}>
                <img src={Home} className={classes.home} alt="home" />
            </Link>
            <div className={classes.cardsContainer}>
                <div className={classes.cardLeft}>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>SEO</div>
                        <div className={classes.text}>Search engine optimization is the process of improving the visibility of a website on organic ('natural' or un-paid) search engine result pages (SERPs).
                        We as a company aim at improving and giving you the best enhanced online presence by working on your site’s ranking on Google.
                        We majorly focus on keyword research ,competitive intelligence ,website audit ,website performance, content ,link building, reporting and analysis
                        SEO is as much art as it is science, but at its core it is the discipline of making user-friendly & useful content understandable and easily digestible for search engines and we aim to give you the best of results .

                        </div>
                    </div>
                    <div className={classes.rightBulgeContainer}>
                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                    </div>
                </div>
                <div className={classes.cardRight}>
                    <div className={classes.leftBulgeContainer}>
                        <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                    </div>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>SMO/SMM-Social Media Optimization</div>
                        <div className={classes.text}>
                            Everybody is aware of the fact that Social media is the best way to connect with the audience, customers, etc.
                            Today every business wants to be on the top, we help you to achieve it through SMO by increasing the popularity, increasing traffic, and generating leads.
                            <br /><br />
                            All social media platforms such as Facebook, Twitter, G+, Pinterest, Linkedin, Instagram, YouTube etc not only attract visitirs but they help in other ways too like product awareness, brand promotion , building brand image ,and attracting audience.
                            <br /><br />
                            This aspect of optimization deals with enhancing your company’s presence and online reputation through interactive communities—not just Facebook and Twitter, but also blogs, forums, and anywhere your business is mentioned or linked to socially.
                            <br /><br />
                            Working with SMO can help you strengthen your brand and boost visibility, as well as generate leads and increase sales.
                        </div>
                    </div>
                </div>
                <div className={classes.cardLeft}>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>Adwords</div>
                        <div className={classes.text}>Google Adwords is an advertising platform owned by Google. Google AdWords is online advertising program that helps you to reach at targeted customers and drive online traffic to your business website. Advertisers can use this platform to position their ads in the Google Search Result Pages, Google Products (YouTube, Gmail etc) and to thousands of other websites that participate in the AdWords program as publishers.
                        When an online user enters a search query on Google, then the user will see the natural search results for that query along with AdWords ads, which are highly targeted to the search topic. Therefore, Google AdWords ads are as useful and relevant as Google’s search results
                        Adwords is for Google sites and websites that use Google Adsense while SEO principles are applicable for all search engines. Adwords ads appear on the top and bottom of Google Search Results and under certain conditions you can get one of those ad positions.
                        We aim at managing all aspects of ad word like PPC management and providing you best business results .
                        </div>
                    </div>
                    <div className={classes.rightBulgeContainer}>
                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                    </div>
                </div>
                <div className={classes.cardRight}>
                    <div className={classes.leftBulgeContainer}>
                        <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                    </div>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>Video Marketing</div>
                        <div className={classes.text}>
                            Video marketing is the fastest growing online marketing tool, Brands need a video marketing strategy — this idea isn’t new. What has changed is how important video has become on every platform and channel. It’s no longer just one piece of your overall plan. Video needs to play a central role in your outreach and campaign efforts.
                            <br /><br />
                            It can increase your search engine ranking, click-through rates, open rates and conversions. But you have to reach your target audience. YouTube is the second largest search engine (second to Google). What’s better: YouTube is owned by Google. So that means a properly tagged video can work wonders for your SEO.
                            <br /><br />
                            We ensure that the videos help your business rank high, so that your potential buyers, find you easily. We help you to reach viewers globally by promoting your business globally, helping you to earn the trust of your clients, higher conversions, provide you with the best SEO results.

                        </div>
                    </div>
                </div>
                <div className={classes.cardLeft}>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>About ASO</div>
                        <div className={classes.text}>
                            App Store Optimization also known as ASO or App Store SEO is the process of optimizing a game or application in order to maximize its visibility in the stores in Search and, increase traffic to listing and improve conversion rate to generate the maximum volume of organic downloads.
                            <br /><br />
                            App Store Optimization (ASO) is known by a few names, including App Store Marketing and Mobile App SEO. The focus of ASO is expert resource application related to improving the ranking of mobile applications (apps) directly within app stores (like iTunes, Google Play, and Windows Store). If you are new to app store optimization, it is actually likely to be a more familiar approach to your businesses online marketing than you may initially think.
                            <br /><br />
                            We provide the complete optimization services of  App Store.

                        </div>
                    </div>
                    <div className={classes.rightBulgeContainer}>
                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                    </div>
                </div>
                <div className={classes.cardRight}>
                    <div className={classes.leftBulgeContainer}>
                        <img src={RedBulge} alt="redBulge" className={classes.leftBulge} />
                    </div>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>Content Marketing</div>
                        <div className={classes.text}>
                            Companies that use content marketing see more conversions, compared to businesses without a content marketing strategy.
                            <br /><br />
                            We provide you with effective plan which features as a cost-effective, yet reliable way to fetch traffic as well as new leads for the business.
                            <br /><br />
                            Nobody can challenge the supremacy of content with the other things, the content your business creates speaks volumes. We help your business to engage the audience and build the brand by developing the best content under experts. Our content services include – page content, Product copywriting, Blogs, Press Releases, Email Marketing services.
                        </div>
                    </div>
                </div>
                <div className={classes.cardLeft}>
                    <div className={classes.innerContainer}>
                        <div className={classes.heading}>Performance Marketing</div>
                        <div className={classes.text}>
                            Marketing based on performance. This performance can be an array of executed desired results, such as completed lead, sale, booking or download.
                            <br /><br />
                            The most valuable KPIs are credited and paid out based on defined performance metrics.
                            <br /><br />
                            Marketers are focusing on performance-based marketing thus we provide you the best services under this umbrella
                            <br /><br />
                            Performance marketing reverses the traditional value proposition of advertising and allows marketers the ability to measure advertisements in real time.
                        </div>
                    </div>
                    <div className={classes.rightBulgeContainer}>
                        <img src={GreenBulge} alt="greenBulge" className={classes.rightBulge} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;