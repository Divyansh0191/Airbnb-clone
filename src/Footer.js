import React from 'react';
import './Footer.css'

const d = new Date();
let year = d.getFullYear();
function Footer() {
    return (
        <div className='footer'>
            <p>© {year} Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer