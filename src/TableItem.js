import React from 'react';

function TableItem({item}) {
    const {place, name, hits, shootingspeed} = item;
    return (
        <tr>
            <td>{place}</td>
            <td>{name}</td>
            <td>{hits}</td>
            <td>{shootingspeed}</td>
        </tr>
    );
}

export default TableItem;
