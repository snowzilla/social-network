import React from "react";
import {Header, FunctionalWrapper} from "../../entites";
import './MainPage.css'
import {Avatar} from "../../components/ui";
import photo from "../../assets/img/photo.png"
import photo2 from "../../assets/img/photo2.webp"
import photo3 from "../../assets/img/photo3.webp"
import photo4 from "../../assets/img/photo4.jpeg"
import photo5 from "../../assets/img/photo5.jpeg"

export function MainPage() {
    return (
        <>
            <Header/>
            <div className="container">
               <FunctionalWrapper/>
                <div className="content-wrapper">
                    <div className="feed-form">
                        <textarea className="feed-input" placeholder="What's in your mind?"></textarea>
                        <hr/>
                        <div className="share-feed">
                            <button className="share-button">Share</button>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="news">
                            <div className="news-header">
                                <div className="news-header-left">
                                    <div className="news-owner">
                                        <Avatar/>
                                        <h4>Sergey Borovikov</h4>
                                    </div>
                                    <div className="news-time">
                                        <h5>5 minutes ago</h5>
                                    </div>
                                </div>
                                <svg className="news-other" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408">
                                    <g>
                                        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51 s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51 S232.05,153,204,153z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="news-content">
                                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
                                <img className='news-img' src={photo} alt=""/>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-header">
                                <div className="news-header-left">
                                    <div className="news-owner">
                                        <Avatar/>
                                        <h4>Sergey Borovikov</h4>
                                    </div>
                                    <div className="news-time">
                                        <h5>5 minutes ago</h5>
                                    </div>
                                </div>
                                <svg className="news-other" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408">
                                    <g>
                                        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51 s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51 S232.05,153,204,153z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="news-content">
                                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
                                <img className='news-img' src={photo2} alt=""/>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-header">
                                <div className="news-header-left">
                                    <div className="news-owner">
                                        <Avatar/>
                                        <h4>Sergey Borovikov</h4>
                                    </div>
                                    <div className="news-time">
                                        <h5>5 minutes ago</h5>
                                    </div>
                                </div>
                                <svg className="news-other" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408">
                                    <g>
                                        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51 s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51 S232.05,153,204,153z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="news-content">
                                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
                                <img className='news-img' src={photo3} alt=""/>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-header">
                                <div className="news-header-left">
                                    <div className="news-owner">
                                        <Avatar/>
                                        <h4>Sergey Borovikov</h4>
                                    </div>
                                    <div className="news-time">
                                        <h5>5 minutes ago</h5>
                                    </div>
                                </div>
                                <svg className="news-other" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408">
                                    <g>
                                        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51 s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51 S232.05,153,204,153z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="news-content">
                                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
                                <img className='news-img' src={photo4} alt=""/>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-header">
                                <div className="news-header-left">
                                    <div className="news-owner">
                                        <Avatar/>
                                        <h4>Sergey Borovikov</h4>
                                    </div>
                                    <div className="news-time">
                                        <h5>5 minutes ago</h5>
                                    </div>
                                </div>
                                <svg className="news-other" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408">
                                    <g>
                                        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51 s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51 S232.05,153,204,153z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="news-content">
                                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
                                <img className='news-img' src={photo5} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-wrapper">
                    <div className="friends-online">
                        <h3>Friends online</h3>
                        <div className="friends-list">
                            <div className="friend">
                                <Avatar/>
                                <div className="user-name">
                                    <h4>Sergey Borovikov</h4>
                                    <h5 className='profile-id'>@snowzilla</h5>
                                </div>
                            </div>
                            <div className="friend">
                                <Avatar/>
                                <div className="user-name">
                                    <h4>Sergey Borovikov</h4>
                                    <h5 className='profile-id'>@snowzilla</h5>
                                </div>
                            </div>
                            <div className="friend">
                                <Avatar/>
                                <div className="user-name">
                                    <h4>Sergey Borovikov</h4>
                                    <h5 className='profile-id'>@snowzilla</h5>
                                </div>
                            </div>
                            <div className="friend">
                                <Avatar/>
                                <div className="user-name">
                                    <h4>Sergey Borovikov</h4>
                                    <h5 className='profile-id'>@snowzilla</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}