import React from 'react'
import './Searchresult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
function Searchresult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchresult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresult_heart" />

            <div className='searchresult_info'>
                <div className="searchresult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchresult_infoBottom">
                    <div className="searchresult_stars">
                        <StarIcon className="searchresult_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchresult_price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchresult
