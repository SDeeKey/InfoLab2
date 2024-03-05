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
                    <div className="example1">
                        <svg width="250" height="200">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/>
                                <circle id="circle111" r="67" cx="122" cy="125"/>
                                <animate attributeName="fill" from="#333" to="#f00" dur="3s"/>
                            </g>
                        </svg>
                    </div>
                    <div className="example2">
                        <svg width="250" height="200">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)">
                                    <animate attributeName="rx" from="0" to="45" dur="3s"/>
                                    <animate attributeName="ry" from="0" to="37" dur="3s"/>
                                    <animate attributeName="cy" from="0" to="60" dur="3s"/>
                                </ellipse>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)">
                                    <animate attributeName="rx" from="0" to="45" dur="3s"/>
                                    <animate attributeName="ry" from="0" to="37" dur="3s"/>
                                    <animate attributeName="cy" from="0" to="60" dur="3s"/>
                                </ellipse>
                                <circle r="67" cx="122" cy="125">
                                    <animate attributeName="r" from="0" to="67" dur="3s"/>
                                </circle>
                            </g>
                        </svg>
                    </div>
                    <div className="example3">
                        <svg width="250" height="200">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/>
                                <circle id="circle111" r="67" cx="122" cy="125"/>
                                <rect id="rect1" width="100" height="50" fill="green">
                                    <animate attributeName="x" from="0" to="150" dur="3s"/>
                                </rect>
                            </g>
                        </svg>
                    </div>
                    <div className="example4">
                        <svg width="250" height="200">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)">
                                    <animate attributeName="cy" from="60" to="120" dur="3s" fill="freeze"/>
                                </ellipse>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)">
                                    <animate attributeName="cy" from="60" to="120" dur="3s" fill="freeze"/>
                                </ellipse>
                                <circle id="circle111" r="67" cx="122" cy="125">
                                    <animate attributeName="cy" from="125" to="250" dur="3s" fill="freeze"/>
                                </circle>
                            </g>
                        </svg>
                    </div>

                </div>
                <div className="thirdLineSvg">
                    <div className="example5">
                        <svg width="250" height="200">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)" stroke="#f00" stroke-width="2">
                                    <animate attributeName="rx" from="0" to="45" dur="3s"/>
                                    <animate attributeName="ry" from="0" to="37" dur="3s"/>
                                    <animate attributeName="cx" from="0" to="55" dur="3s"/>
                                    <animate attributeName="cy" from="0" to="60" dur="3s"/>
                                    <animate attributeName="stroke-width" from="0" to="5" dur="5s"/>
                                </ellipse>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)" stroke="#f00" stroke-width="2">
                                    <animate attributeName="rx" from="0" to="45" dur="3s"/>
                                    <animate attributeName="ry" from="0" to="37" dur="3s"/>
                                    <animate attributeName="cx" from="0" to="190" dur="3s"/>
                                    <animate attributeName="cy" from="0" to="60" dur="3s"/>
                                    <animate attributeName="stroke-width" from="0" to="5" dur="5s"/>
                                </ellipse>
                                <circle id="circleex5" r="67" cx="122" cy="125" stroke="#f00" stroke-width="2">
                                    <animate attributeName="r" from="0" to="67" dur="3s"/>
                                    <animate attributeName="cx" from="0" to="122" dur="3s"/>
                                    <animate attributeName="cy" from="0" to="125" dur="3s"/>
                                    <animate attributeName="stroke-width" from="0" to="5 " dur="5s"/>
                                </circle>
                            </g>
                        </svg>
                    </div>
                    <div className="example6">
                        <svg width="700" height="420">
                            <defs>
                                <path id="thepath1" fill="none" stroke="#000000" d= "M0, 0 c0, 0, 51, 73, 79, 166 s68, 38, 107-18c39-56, 72-92, 113-42 S335, 178, 374, 200 s82-18, 97-33" />
                            </defs>
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)">
                                    <animateMotion dur="5s">
                                        <mpath href="#thepath"/>
                                    </animateMotion>
                                </ellipse>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)">
                                    <animateMotion dur="5s">
                                        <mpath href="#thepath"/>
                                    </animateMotion>
                                </ellipse>
                                <circle id="circleex5" r="67" cx="122" cy="125">
                                    <animateMotion dur="5s">
                                        <mpath href="#thepath1"/>
                                    </animateMotion>
                                </circle>
                            </g>
                        </svg>
                    </div>
                    <div className="example7">
                        <svg width="700" height="420">
                            <g fill="#333">
                                <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)" stroke="#f00" stroke-width="2">
                                    <animateTransform attributeName="transform" type="scale" from="0" to="1" dur="3s"/>
                                </ellipse>
                                <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)" stroke="#f00" stroke-width="2">
                                    <animateTransform attributeName="transform" type="scale" from="0" to="1" dur="3s"/>
                                </ellipse>
                                <circle id="circleex5" r="67" cx="122" cy="125" stroke="#f00" stroke-width="2">
                                    <animateTransform attributeName="transform" type="scale" from="0" to="1" dur="3s"/>
                                </circle>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AniSvg;