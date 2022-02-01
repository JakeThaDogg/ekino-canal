import React from 'react';
import { IMovie } from '../../models/Movie';

const Movie: React.FC<IMovie> = ({adult, isHovered, poster, overview, title}) => (
    <div>
        <h3>
            {title}
            {adult && <img alt='+18' src='https://img.icons8.com/ios/50/000000/18-plus.png'/>}
        </h3>
        {
            isHovered ? (
                <p>{overview}</p>
            ) : (
                <img src={poster} alt={title} />
            )
        }
    </div>
)
export default Movie;