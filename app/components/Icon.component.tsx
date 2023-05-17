import Image from 'next/image';
import { FC } from 'react';

interface IconProps {
    src: string;
    alt: string;
    dimensions: number;
}

const Icon: FC<IconProps> = ({ src, alt, dimensions}) => {
    return (
        <Image src={src} alt={alt} width={dimensions} height={dimensions} style={{marginLeft: '10px', marginRight: '10px'}} />
    );
}

export default Icon;