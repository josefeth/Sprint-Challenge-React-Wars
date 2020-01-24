import React from 'react';
import styled from "styled-components"

const Form= styled.form`
margin: 2%;
`;

const Input = styled.input`
border-radius: 10px;
width:100px;
height:30px;
background:black;
color:white;
`;

const Select= styled.select`
margin: 1%;
background:black;
color:white;
`;


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert("Your favorite Star Wars character is " + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        
        <Form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite Star Wars character:<br></br>
          <Select value={this.state.value} onChange={this.handleChange}>
            <option value="Han Solo">Han Solo</option>
            <option value="Luke Skywalker">Luke Skywalker</option>
            <option value="Darth Vader">Darth Vader</option>
            <option value="Chewbacca">Chewbacca</option>
            <option value="Yoda">Yoda</option>
            <option value="Tony Romo">Tony Romo</option>
          </Select>
        </label><br></br>
        <Input type="submit" value="Submit" />
      </Form>
      );
    }
  }
  
  export default NameForm;