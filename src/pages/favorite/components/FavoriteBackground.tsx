import React from 'react';
import Image from 'ui/image/Image';

const FavoriteBackground: React.FC = () => {
    return (
        <Image
            width="100%"
            height="100%"
            objectFit="cover"
            src="/images/favoriteImage.png"
        />
    )
}

export default FavoriteBackground