import React from 'react';

import './AppHeader.styles.scss';

const AppHeader = () => {
    return (
        <div className="appHeaderContainer">
            <div className="appHeaderLogoBlock">
                <a href="/">
                    <svg className="appHeadelLogoIcon" width="60" height="60" viewBox="50 0 250 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M165.66 10C161.811 3.33333 152.189 3.33333 148.34 10L102.44 89.5C98.5914 96.1667 103.403 104.5 111.101 104.5H131V301V333C131 338.523 135.477 343 141 343H173H203H235C240.523 343 245 338.523 245 333V301V187H272V199H265C259.477 199 255 203.477 255 209V241C255 246.523 259.477 251 265 251H282H298H314C319.523 251 324 246.523 324 241V177V145C324 139.477 319.523 135 314 135H282H235H203C197.477 135 193 139.477 193 145V177V291H183V104.5H202.899C210.597 104.5 215.409 96.1667 211.56 89.5L165.66 10ZM15 199C9.47715 199 5 203.477 5 209V241C5 246.523 9.47715 251 15 251H111C116.523 251 121 246.523 121 241V209C121 203.477 116.523 199 111 199H15Z" fill="url(#paint0_linear)"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0" y="0" width="339" height="358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="5" dy="5"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="410" y1="-105" x2="515.487" y2="103.055" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A142B5"/>
                        <stop offset="0.091068" stop-color="#A142B5"/>
                        <stop offset="0.424233" stop-color="#7C1DC9"/>
                        <stop offset="0.6346" stop-color="#7926CB"/>
                        <stop offset="0.6973" stop-color="#703ED1"/>
                        <stop offset="0.779807" stop-color="#6165DB"/>
                        <stop offset="0.8686" stop-color="#4C9CE9"/>
                        <stop offset="0.9709" stop-color="#32E1FA"/>
                        <stop offset="1" stop-color="#2AF6FF"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </a>
                {/* <span className="appHeaderLogoTitle">LOGO</span> */}
            </div>
        </div>
    )
}

export default AppHeader;