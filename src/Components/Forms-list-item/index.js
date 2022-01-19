import React from 'react';

function FormListItem({item}) {
    return (
        <div>
            <li>
                <p>{item.formtitle}</p>
                <p>{item.date}</p>
            </li>
        </div>
    )
}

export default FormListItem;
