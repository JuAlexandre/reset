import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
       <FormGroup>
          <Input type="select" name="musique" id="musique">
            <option>Pluie</option>
            <option>Ronron</option>
            <option>Vent</option>
            <option>Zen</option>
          </Input>
        </FormGroup>
    );
  }
}