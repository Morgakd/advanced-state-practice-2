import React from "react";


// 174

function CarListing(props) {
  const car=props.cars;
    return (<div className="col-md-4 grid_listing">
            <div className="product-listing-m gray-bg">
              <div className="product-listing-img"> <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
              <img src={car.imgUrl} className="img-responsive" alt="image" /> </a>
                <div className="label_icon">{car.isNew}</div>
                <div className="compare_item">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="compare10" />
                    <label for="compare10">Compare</label>
                  </div>
                </div>
              </div>
              <div className="product-listing-content">
                <h5><a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">{car.make} {car.model}, V6, ABS, Sunroof </a></h5>
                <p className="list-price">{car.price}</p>
                <div className="car-location"><span><i className="fa fa-map-marker" aria-hidden="true"></i> {car.city}, USA</span></div>
                <ul className="features_list">
                  <li><i className="fa fa-road" aria-hidden="true"></i>{car.km} km</li>
                  <li><i className="fa fa-tachometer" aria-hidden="true"></i>{car.miles} miles</li>
                  <li><i className="fa fa-calendar" aria-hidden="true"></i>{car.year} model</li>
                  <li><i className="fa fa-car" aria-hidden="true"></i>{car.fuel}</li>
                </ul>
              </div>
            </div>
          </div>);
}

export default CarListing;
