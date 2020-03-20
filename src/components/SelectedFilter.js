import React from 'react';

function SelectedFilter({ filters, removeFilter }) {

    return (
        Object.keys(filters).map(category => {
            const filterList = filters[category].split("|");
            return (
                !!filterList[0] && filterList.map((id) => (
                    <div className="selected-filter">
                        <span>{id}</span>
                        <a href="javascript:void(0)" onClick={() => removeFilter(id, category)}>X</a>
                    </div>
                ))
            )
        })
    );
}

export default SelectedFilter;
