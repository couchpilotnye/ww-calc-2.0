import React, { Component } from 'react';

class Socials extends Component {
	render() {
		return(
			<div className="social-icons">
				{/* Twitter */}
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
				{/* Facebook */}
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
				{/* LinkedIn */}
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
				{/* InstaGram */}
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z"/></svg>
				{/* Mail Icon */}
				{/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
				 width={this.props.size} height={this.props.size} viewBox="0 0 24 24"
				 preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,24.000000) scale(0.24,-0.100000)"
				fill="#000000" stroke="none">
				<path d="M1778 9984 c-344 -50 -704 -204 -978 -417 -96 -75 -272 -250 -350
				-347 -231 -289 -384 -644 -434 -1009 -14 -99 -16 -463 -16 -3211 0 -2748 2
				-3112 16 -3211 50 -365 203 -720 434 -1009 78 -97 254 -272 350 -347 217 -169
				496 -305 766 -374 249 -63 32 -59 3434 -59 2748 0 3112 2 3211 16 365 50 720
				203 1009 434 97 78 272 254 347 350 169 217 305 496 374 766 63 249 59 32 59
				3434 0 3402 4 3185 -59 3434 -68 266 -200 539 -370 761 -64 84 -252 276 -341
				348 -226 182 -514 326 -796 398 -250 63 -30 59 -3447 58 -2613 -1 -3128 -3
				-3209 -15z m6422 -2518 c0 -8 -3212 -2621 -3218 -2618 -12 4 -3212 2613 -3212
				2618 0 2 1447 4 3215 4 1768 0 3215 -2 3215 -4z m-4841 -2017 c1505 -1213
				1595 -1284 1636 -1287 l43 -3 1558 1267 c858 697 1578 1283 1602 1302 l42 34
				0 -2086 0 -2086 -3255 0 -3255 0 0 2087 c0 1986 1 2085 18 2071 9 -8 734 -593
				1611 -1299z"/>
				</g>
				</svg> */}
			</div>
		);
	}
};

export default Socials;