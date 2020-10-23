import React from 'react';

const ImageCard = ({title, url}) => (
    <div>
        <h2>{title}</h2>
        <img src={url} alt={title}/>
    </div>
)

export default ImageCard;