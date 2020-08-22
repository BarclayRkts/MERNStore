import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

class Dropdown extends Component {
constructor (props) {
    super(props);
    this.state = { country: ''};
}

selectCountry (val) {
    this.setState({ country: val });
}

selectRegion (val) {
    this.setState({ region: val });
}

render () {
    const { country } = this.state;
    return (
    <div>
        <CountryDropdown
        value={country}
        country = {country}
        onChange={(val) => this.selectCountry(val)} />
    </div>
    );
}
}

export default Dropdown;