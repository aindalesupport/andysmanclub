import React, { Component } from 'react';
import connect from './connector';

class Places extends Component {

  createRef = (c) => (this.element = c);

  componentDidMount() {

    if (typeof window !== 'undefined') {

      const { refine, defaultRefinement } = this.props;

      const autocomplete = new window.google.maps.places.Autocomplete(this.element, {
        types: ['geocode'],
        componentRestrictions: { country: 'uk' },
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        place.geometry && refine({
          lat: parseFloat(place.geometry.location.lat().toFixed(7)),
          lng: parseFloat(place.geometry.location.lng().toFixed(7)),
        });
      });

      this.element.addEventListener('mouseup', () => {
        setTimeout(() => {
          if (this.element.value === '') {
            refine(defaultRefinement);
          }
        }, 100);
      });
    }

  }

  render() {
        
    return (
        <div className="bg-white shadow-md">
            <input
            ref={this.createRef}
            type="search"
            id="address-input"
            placeholder="Enter your town/city (eg - Huddersfield)"
            className="block w-full shadow-input mx-auto bg-white px-6 py-10 focus:text-black !border-0 focus:shadow-none focus:ring-0 focus:ring-transparent focus:outline-none text-[16px] md:text-[18px] text-darkgrey tracking-tight"
            />
        </div>
    );
  }
}

export default connect(Places);