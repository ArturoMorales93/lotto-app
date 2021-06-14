import React from 'react'

const Ball = (props) => (
    <div className="ball-container">
        <span>{ props.id }</span>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
                <circle cx="50" cy="50" r="50" fill="#E9EBD6" />
            </g>
            <defs>
                <filter id="filter0_i" x="-1.5" y="-2" width="101.5" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1.5" dy="-2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
            </defs>
        </svg>
    </div>
)

export default Ball