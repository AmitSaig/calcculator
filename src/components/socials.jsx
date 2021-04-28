import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Socials(props) {
    return (
        <div className='Social-Bar'>
        	<p>Contact me!</p> 
        	<div>
           		<SocialIcon fgColor='white' target="_blank" url="https://www.linkedin.com/in/amit-saig-513549199/" />
           		<SocialIcon fgColor='white' target="_blank" url="https://github.com/Amitsaig/calcculator" />
			</div>
		</div>
    );
};

export default Socials;