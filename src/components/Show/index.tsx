import React from 'react';
import { IShow } from '../../models/Show';

const Show: React.FC<IShow> = ({adult, isHovered, name, poster, overview}) => (
    <div>
        <h3>
            {name}
            {adult && <img alt='+18' src='https://img.icons8.com/ios/50/000000/18-plus.png'/>}
        </h3>
        {
            isHovered ? (
                <p>{overview}</p>
            ) : (
                <img src={poster} alt={name} />
            )
        }
    </div>
)
export default Show;