import React from 'react';

function SortBox({ handleSort }) {
    return (
        <div className="sort-dropdown col-4 float-right">
            <select name="sort-order" className="float-right" onChange={handleSort}>
                <option>Sort By ID</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </div>
    );
}

export default SortBox;
