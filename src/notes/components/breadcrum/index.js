import React from 'react';

export const Breadcrum = (props) => {
    console.log('--== Breadcrum --== ', props);
    const {location} = props;

    return (
        <div className="d-flex">
            <div>
                <a href="#/">Home</a>
            </div>
            <div>
                {location.displayName}
            </div>
        </div>
    )
}
