import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'ui/image/Image'

const Logo: React.FC = () => {
    return (
        <Link to="/">
            <Image
                width="auto"
                height="220px"
                objectFit="contain"
                src="/images/PngItem_6781246.png"
            />
        </Link>
    )
}

export default Logo