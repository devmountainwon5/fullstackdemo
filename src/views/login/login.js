import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    login = (event) => {
        debugger
        //Disables html functionality of form inputs. 
        event.preventDefault(); 
        // This will be body in the backend.
        const dataObj = {
            email:this.state.email,
            password:this.state.password
        }
        //Send request to login as a post. 
        axios.post('/api/login', dataObj)
            //Response from backend
            .then((responseFromBackEnd)=>{
                debugger
                // This checks to makes sure it was a successful login. 
                if(responseFromBackEnd.data.success){
                    // Dispatches user object to redux store. 
                    this.props.dispatch({
                        type:'user',
                        payload: responseFromBackEnd.data.user,
                    })
                    // Push them to home view. 
                    this.props.history.push('/home');
                }else{
                    alert('bad credentials')
                }
            })
    }

    handleChange = (e) => {
        // handle user input in input tags. 
        this.setState({
            // Name will match the name prop on input
            // Value will be what the user types
            // https://reactjs.org/docs/forms.html
            [e.target.name]: e.target.value
        })
        
    }
	render() {
		return (
			<div>
                <form onSubmit={this.login}>
                    {/* How to setup an input in react */}
					<input type="text" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email}/>
					<input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password}/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}
// connecting a component to state see line 2 for imports
export default connect(state => state)(Login);
