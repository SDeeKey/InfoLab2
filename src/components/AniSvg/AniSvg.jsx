import React from 'react';
import './AniSvg.scss'

const AniSvg = () => {
    return (
        <div className='svg'>
            <div className="mainContentSvg">
                <div className="firstLineSvg">
                    <div className="svg1">
                        <svg>
                            <circle id="my-circle" r="50" cx="100" cy="100" fill="orange">
                                <animate attributeName="r" from="0" to="50" dur="3s"/>
                            </circle>
                        </svg>
                    </div>
                    <div className="svg2">
                        <svg>
                            <rect width="200" height="200" fill="slategrey">
                                <animate attributeName="height" from="0" to="200" dur="3s"/>
                            </rect>
                        </svg>
                    </div>
                    <div className="svg3">
                        <svg>
                            <rect width="200" height="200" fill="slategrey">
                                <animate attributeName="x" from="0" to="200" dur="3s" fill="freeze"/>
                            </rect>
                        </svg>
                    </div>
                    <div className="svg4">
                        <svg width="400" height="400">
                            <rect width="200" height="200" fill="slategrey">
                                <animate attributeName="x" from="0" to="200" dur="3s" fill="freeze"/>
                            </rect>
                        </svg>
                    </div>
                    <div className="svg5">
                        <svg width="400" height="400">
                            <circle r="100" cx="100" cy="100" fill="slategrey">
                                <animate attributeName="cy" from="100" to="300" dur="3s" fill="freeze"/>
                            </circle>
                        </svg>
                    </div>
                    <div className="svg6">
                        <svg width="400" height="400">
                            <circle r="100" cx="110" cy="110" fill="red" stroke="#000" stroke-width="7">
                                <animate attributeName="r" from="0" to="100" dur="3s"/>
                                <animate attributeName="stroke-width" from="0" to="10" dur="7s"/>
                            </circle>
                        </svg>
                    </div>
                    <div className="svg7">
                        <svg width="500" height="400">
                            <defs>
                                <path id="thepath" fill="none" stroke="#000000"
                                      d="M0, 0 c0, 0, 51, 73, 79, 166 s68, 38, 107-18c39-56, 72-92, 113-42 S335, 178, 374, 200 s82-18, 97-33"/>
                            </defs>
                            <circle r="15" cx="15" cy="15" fill="slategrey">
                                <animateMotion dur="5s">
                                    <mpath href="#thepath"/>
                                </animateMotion>
                            </circle>
                        </svg>
                    </div>
                </div>
                <div className="secondLineSvg">
                    <div className="svg8">
                        <svg width="400" height="400">
                            <rect width="200" height="200" fill="slategrey">
                                <animateTransform attributeName="transform" type="scale" from="0" to="1" dur="3s"/>
                            </rect>
                        </svg>
                    </div>



                </div>
                <div className="thirdLineSvg">

                </div>
            </div>
        </div>
    );
};

export default AniSvg;