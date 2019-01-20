import React from 'react';
import './errorPage.css';

const errmess = (props) => {
    return(
        //Just a basic error statement
        <div className="ermessContainer">
            <h3>Oops !! seems like you've came to a wrong page, please click on the links above to navigate to particular page, or hit back button...</h3>
        </div>
    )
}

export default errmess;