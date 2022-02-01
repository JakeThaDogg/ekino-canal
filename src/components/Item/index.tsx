import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMG_URL } from '../../Constants';
import { SharedProps } from '../../models/SharedProperties';
import Movie from '../Movie';
import Show from '../Show';

interface ItemWrapper {
    isHovered: boolean,
    background: string,
}

const Wrapper = styled.section<ItemWrapper>`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    max-height: 320px;
    max-width: 270px;
    overflow: hidden;
    
    ${({isHovered, background}: ItemWrapper) => isHovered && `
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            
            background: url(${background});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0.2;
            
        }
    `}

    h3 {
        position: asolute;
        top: 0;
    }

    h3, p {
        color: #FFF;
    }
`

const Item: React.FC<SharedProps> = ({media_type, poster_path, ...rest}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [itemPoster, setItemPoster] = useState('');

    const handleHover = (value: boolean) => setIsHovered(value);
    
    useEffect(() => {
        setItemPoster(`${IMG_URL}${poster_path}`);
    }, [setItemPoster, poster_path]);

    return (
        <Wrapper
            isHovered={isHovered}
            background={itemPoster}
            onMouseEnter={() => handleHover(true)} 
            onMouseLeave={() => handleHover(false)}
        >
            {
                media_type === 'tv' ? (
                    <Show {...rest}  isHovered={isHovered} poster={itemPoster} />
                    ) : (
                    <Movie {...rest} isHovered={isHovered} poster={itemPoster} />
                )
            }
        </Wrapper>
    )
}

export default Item;