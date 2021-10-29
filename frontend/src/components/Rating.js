import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/fontawesome-free-solid'
import {faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";


function Rating({value, text, color, colorEmpty}) {
    return (
        <div className="rating">
            <span>
                {
                    value >= 1
                        ? <FontAwesomeIcon icon={faStar} style={{color}}/>
                        : value >= 0.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} style={{color}}/>
                        : <FontAwesomeIcon/>
                }
            </span>
            <span>
                {
                    value >= 2
                        ? <FontAwesomeIcon icon={faStar} style={{color}}/>
                        : value >= 1.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} style={{color}}/>
                        : <FontAwesomeIcon/>
                }
            </span>
            <span>
                {
                    value >= 3
                        ? <FontAwesomeIcon icon={faStar} style={{color}}/>
                        : value >= 2.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} style={{color}}/>
                        : <FontAwesomeIcon/>
                }
            </span>
            <span>
                {
                    value >= 4
                        ? <FontAwesomeIcon icon={faStar} style={{color}}/>
                        : value >= 3.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} style={{color}}/>
                        : <FontAwesomeIcon/>
                }
            </span>
            <span>
                {
                    value >= 5
                        ? <FontAwesomeIcon icon={faStar} style={{color}}/>
                        : value >= 4.5
                        ? <FontAwesomeIcon icon={faStarHalfAlt} style={{color}}/>
                        : <FontAwesomeIcon/>
                }
            </span>
            <span>{text && text}</span>
        </div>
    );
}

export default Rating;