import React from 'react';
import Item from '../../components/Item';
import { SharedProps } from '../../models/SharedProperties';

const List = ({items}: {items: Array<SharedProps>}) => {

    return <>
        {
            items.map((item: SharedProps) => <Item {...item} />)
        }   
    </>
        
}

export default List;