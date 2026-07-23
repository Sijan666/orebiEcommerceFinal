import React from 'react';

const Images = ({ imgSrc, className, alt, ...props }) => {
    return (
        <img 
            src={imgSrc} 
            className={`${className}`} 
            alt={alt || ""}
            loading="lazy"
            {...props}
        />
    )
}

export default Images;