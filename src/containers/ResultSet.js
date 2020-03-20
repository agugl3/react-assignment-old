import React from 'react';
import { connect } from 'react-redux'

let ResultSet = ({ list, sortValue }) => {
  let listArr = [];
  const sortVal = sortValue;
  if (list && list.results) {
    listArr = [...list.results];
    if (sortVal === "Descending") {
      // console.log("Name deces", list.results);  
      listArr = listArr.sort(function (ele1, ele2) { return ele2.id - ele1.id; });
    }
    // console.log("Name", list.results);
  }
  //console.log("sort", sortValue);

  return listArr.length ? (
    listArr.map(({ id, image, name, status, species, gender, origin, location }) => (
      <div className="col-md-4 col-3 tile" key={id}>
        <div className="tile-inner">
          <figure>
            <img src={image} />
            <div className="top-text">
              <h4>{name}</h4>
              <p>id: {id} - created 2 years ago</p>
            </div>
          </figure>

          <ul>
            <li>
              <span className="left-ele">STATUS</span>
              <span className="right-ele">{status}</span>
            </li>
            <li>
              <span className="left-ele">Species</span>
              <span className="right-ele">{species}</span>
            </li>
            <li>
              <span className="left-ele">Gender</span>
              <span className="right-ele">{gender}</span>
            </li>
            <li>
              <span className="left-ele">Origin</span>
              <span className="right-ele">{origin.name}</span>
            </li>
            <li>
              <span className="left-ele">Last loaction</span>
              <span className="right-ele">{location.name}</span>
            </li>
          </ul>
        </div>
      </div>
    ))

  ) : (<div className="no-results">
    No results Found...
  </div>);
}

export default ResultSet;
