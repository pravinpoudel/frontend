import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:""
  };
  this.changeHandler = this.changeHandler.bind(this);
  this.submitHandler = this.submitHandler.bind(this);
  }

 changeHandler(event){
    let name = event.target.name;
    this.setState({[name]:event.target.value});
  }

 submitHandler(event){
    event.preventDefault();
    axios.post("http://localhost:4000/things/user", {data: this.state}).then((response)=>{console.log(`we have this response ${response}`)});    
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} class="form-control" id="inputEmail3"></input>
            </div>
          </div>
         <div class="row mb-3">
             <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
             <div class="col-sm-10">
                <input type="password" name="password" value={this.state.password} onChange= {this.changeHandler} class="form-control" id="inputPassword3"></input>
             </div>
             </div>
             <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    );
  }
}

