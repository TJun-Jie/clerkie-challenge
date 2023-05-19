import Image from 'next/image';
import { FC } from 'react';

interface IconProps {
    title: string;
    dimensions: number;
    spaced: boolean;
}

const Icon: FC<IconProps> = ({ title, dimensions, spaced}) => {
    return (
        <Image src={`/${title}.svg`} alt={title} width={dimensions} height={dimensions} style={spaced ? {marginLeft: '10px', marginRight: '10px'} : {}} />
    );
}

export default Icon;