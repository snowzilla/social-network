import React from "react";
import {UserStatistics} from "../../components";
import './FunctionalWrapper.css'

export function FunctionalWrapper () {
    return (
        <div className="functional-wrapper">
            <UserStatistics/>
            <div className="nav-list">
                <div className="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <circle cx="6.18" cy="17.82" r="2.18"/>
                        <path
                            d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
                    </svg>
                    <a>Feed</a>
                </div>
                <div className="nav-button">
                    <svg fill="none" height="32" viewBox="0 0 24 24" width="32"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 6C1.5 5.72386 1.72386 5.5 2 5.5H22C22.2761 5.5 22.5 5.72386 22.5 6V13C22.5 13.2522 22.3122 13.4649 22.062 13.4961L14.062 14.4961L13.938 13.5039L21.5 12.5586V6.5H2.5V12.5586L10.062 13.5039L9.93798 14.4961L1.93798 13.4961C1.68777 13.4649 1.5 13.2522 1.5 13V6Z"
                            fill="black"/>
                        <path
                            d="M9.5 11.5C9.5 11.2239 9.72386 11 10 11H14C14.2761 11 14.5 11.2239 14.5 11.5V16.5C14.5 16.7761 14.2761 17 14 17H10C9.72386 17 9.5 16.7761 9.5 16.5V11.5ZM10.5 12V16H13.5V12H10.5Z"
                            fill="black"/>
                        <path
                            d="M8.5 4.5C8.5 3.39543 9.39543 2.5 10.5 2.5H13.5C14.6046 2.5 15.5 3.39543 15.5 4.5V6H14.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5C9.94772 3.5 9.5 3.94772 9.5 4.5V6H8.5V4.5Z"
                            fill="black"/>
                        <path
                            d="M2.5 21V13.5H3.5V20.5H20.5V13.5H21.5V21C21.5 21.2761 21.2761 21.5 21 21.5H3C2.72386 21.5 2.5 21.2761 2.5 21Z"
                            fill="black"/>
                    </svg>
                    <a>Jobs</a>
                </div>
                <div className="nav-button">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 62.583 62.583">
                        <g>
                            <g id="group-70svg">
                                <path id="path-1_66_"
                                      d="M52.69,52.824c-0.829,0-1.501-0.671-1.501-1.5c0-9.578-7.792-17.371-17.371-17.371s-17.372,7.793-17.372,17.371c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5c0-11.232,9.139-20.371,20.372-20.371s20.371,9.139,20.371,20.371C54.189,52.153,53.518,52.824,52.69,52.824z"/>
                                <path id="path-2_66_"
                                      d="M33.818,33.393c-6.516,0-11.817-5.301-11.817-11.817c0-6.515,5.301-11.816,11.817-11.816s11.817,5.301,11.817,11.816C45.635,28.092,40.334,33.393,33.818,33.393z M33.818,12.76c-4.862,0-8.817,3.955-8.817,8.816c0,4.862,3.955,8.817,8.817,8.817s8.817-3.955,8.817-8.817C42.635,16.715,38.68,12.76,33.818,12.76z"/>
                                <path id="path-3_54_"
                                      d="M13.045,48.51H1.5c-0.828,0-1.5-0.672-1.5-1.5c0-9.665,7.319-16.953,17.025-16.953c2.963,0,5.893,0.825,8.708,2.453c0.717,0.415,0.962,1.332,0.548,2.05c-0.415,0.717-1.333,0.962-2.05,0.548c-2.353-1.362-4.777-2.051-7.206-2.051c-7.484,0-13.247,5.256-13.952,12.453h9.972c0.828,0,1.5,0.672,1.5,1.5S13.873,48.51,13.045,48.51z"/>
                                <path id="path-4_33_"
                                      d="M17.095,32.811c-5.529,0-10.026-4.498-10.026-10.026S11.566,12.76,17.095,12.76c2.678,0,5.195,1.043,7.089,2.936c0.586,0.586,0.586,1.537,0,2.122c-0.586,0.586-1.536,0.586-2.121,0c-1.328-1.327-3.091-2.058-4.968-2.058c-3.874,0-7.026,3.151-7.026,7.025c0,3.873,3.152,7.026,7.026,7.026c2.303,0,4.464-1.133,5.778-3.029c0.472-0.681,1.406-0.85,2.087-0.378c0.681,0.472,0.851,1.407,0.378,2.087C23.463,31.194,20.382,32.811,17.095,32.811z"/>
                                <path id="path-5_16_"
                                      d="M61.083,48.51h-8.038c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h6.456c-0.705-6.411-5.881-11.581-12.588-12.307c-0.735-0.079-1.304-0.683-1.337-1.422c-0.034-0.739,0.476-1.393,1.201-1.539c3.345-0.675,5.681-3.466,5.681-6.789c0-3.819-3.603-7.297-7.56-7.297c-0.828,0-1.5-0.671-1.5-1.5c0-0.829,0.672-1.5,1.5-1.5c5.625,0,10.56,4.812,10.56,10.297c0,3.166-1.466,5.993-3.845,7.818c6.482,2.469,10.97,8.626,10.97,15.739C62.583,47.838,61.911,48.51,61.083,48.51z"/>
                            </g>
                        </g>
                    </svg>
                    <a>Groups</a>
                </div>
                <div className="nav-button">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/>
                        <g>
                            <path
                                d="M28.5,9.53v0a.36.36,0,0,0-.06-.2s0,0,0,0L25,3.74a.51.51,0,0,0-.43-.24H7.43A.51.51,0,0,0,7,3.74L3.57,9.28v0a.33.33,0,0,0-.06.19v0h0v2.33a1.86,1.86,0,0,0,.86,1.6V28a.5.5,0,0,0,.5.5H27.14a.5.5,0,0,0,.5-.5V13.46a1.85,1.85,0,0,0,.86-1.59V9.54ZM7.71,4.5H24.29L27.1,9H4.9ZM24.07,10v1.83a.79.79,0,0,1-.7.86h-1c-.41,0-.57-.12-.64-.22a2.27,2.27,0,0,1-.06-.64V10Zm-3.43,0v1.83a.79.79,0,0,1-.7.86h-1c-.54,0-.6-.22-.66-.43l0-.07c0-.11,0-.24,0-.36V10Zm-3.43,0v1.83a.79.79,0,0,1-.7.86h-1a.79.79,0,0,1-.7-.86V10Zm-3.42,0v1.83a.8.8,0,0,1-.7.86h-1a.79.79,0,0,1-.7-.86V10Zm-3.43.8v1a.91.91,0,0,1-.33.71,1,1,0,0,1-.37.15h-1a.79.79,0,0,1-.7-.86V10h2.43ZM5.14,12.71a.8.8,0,0,1-.64-.84V10H6.93v1.83a.88.88,0,0,1-.32.7,1.93,1.93,0,0,1-.9.16H5.25ZM13.71,27.5H8.79V18.35h5Zm12.93,0H14.71l.08-9.65a.55.55,0,0,0-.15-.36.5.5,0,0,0-.35-.14h-6a.5.5,0,0,0-.5.5V27.5H5.36V13.73h.87a1.6,1.6,0,0,0,1-.39.67.67,0,0,0,.11-.07,1.64,1.64,0,0,0,1.26.46h1a1.54,1.54,0,0,0,1-.38.67.67,0,0,0,.14-.09,1.84,1.84,0,0,0,1.25.47h1a1.34,1.34,0,0,0,.4-.06,1.8,1.8,0,0,0,.8-.32,1.71,1.71,0,0,0,.79.32,1.35,1.35,0,0,0,.41.06h1a1.76,1.76,0,0,0,.4-.06,1.51,1.51,0,0,0,.74-.32,1.81,1.81,0,0,0,1.25.38h1a1.86,1.86,0,0,0,1.18-.35,1.61,1.61,0,0,0,.81.32,2.54,2.54,0,0,0,.41,0H23.4l.33,0a1.92,1.92,0,0,0,.89-.31,1.85,1.85,0,0,0,.49.2,1.49,1.49,0,0,0,.66.15h.87Zm.86-15.63a.8.8,0,0,1-.65.84c-.05,0-.1,0-.05,0h-.54a3.51,3.51,0,0,1-.78-.08.89.89,0,0,1-.41-.78V10H27.5Z"/>
                            <path
                                d="M23.71,17.35H16.93a.5.5,0,0,0-.5.49l-.07,4.61a.47.47,0,0,0,.14.36.48.48,0,0,0,.36.15h6.85a.5.5,0,0,0,.5-.5V17.85A.5.5,0,0,0,23.71,17.35ZM23.21,22H17.37l.06-3.61h5.78Z"/>
                        </g>
                    </svg>
                    <a>Marketplace</a>
                </div>
                <div className="nav-button">
                    <svg height="32px" version="1.1" viewBox="0 0 64 64" width="32px"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs id="defs19"/>
                        <path
                            d="m 60.001379,20.000165 c 0,-4.966682 -4.033812,-9.000028 -9.000028,-9.000028 0,0 -38.001718,0 -38.001718,0 -4.9662156,0 -9.0000281,4.033346 -9.0000281,9.000028 0,0 0,24.000075 0,24.000075 0,4.966682 4.0338125,9.000028 9.0000281,9.000028 0,0 38.001718,0 38.001718,0 4.966216,0 9.000028,-4.033346 9.000028,-9.000028 0,0 0,-24.000075 0,-24.000075 z m -2.001606,0 V 44.00024 c 0,3.864012 -3.13561,7.000022 -6.998422,7.000022 H 12.999633 c -3.8628121,0 -6.9984219,-3.13601 -6.9984219,-7.000022 V 20.000165 c 0,-3.864012 3.1356098,-7.000022 6.9984219,-7.000022 h 38.001718 c 3.862812,0 6.998422,3.13601 6.998422,7.000022 z"
                            id="path4"/>
                        <path
                            d="m 41.447634,32.894031 c 0.339159,-0.168858 0.553265,-0.515144 0.553265,-0.894003 0,-0.378858 -0.214106,-0.725144 -0.553265,-0.894002 L 23.447576,22.106003 c -0.309791,-0.155144 -0.678318,-0.138858 -0.972951,0.04371 -0.294632,0.181715 -0.474633,0.504001 -0.474633,0.850288 v 18.000047 c 0,0.346286 0.180001,0.668573 0.474633,0.850288 0.294633,0.182572 0.66316,0.198857 0.972951,0.04371 z m -2.682956,-0.894003 -14.763837,7.381734 c 0,0 0,-14.763467 0,-14.763467 z"/>
                    </svg>
                    <a>Video</a>
                </div>
            </div>
        </div>
    )
}