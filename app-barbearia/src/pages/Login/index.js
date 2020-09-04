import React, { Component } from 'react';
import {navigate} from 'gatsby';


import './styles.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: '',
          password: '',
          isAuth: false
        };
        this.handleChangeuser = this.handleChangeuser.bind(this);
        this.handleChangepassword = this.handleChangepassword.bind(this);
    }
    handleChangeuser(event) {
        this.setState({ user: event.target.value});
      }
    handleChangepassword(event) {
        this.setState({ password: event.target.value});
      }
      handleLogin= e => {
        e.preventDefault();
          // alert(this.state.user);
          // alert(this.state.password)

          if(this.state.user==='lorena'&& this.state.password ==='123'){
            this.state.isAuth=true;
            return navigate('/Home');
          }
          else{
            alert('Usuário e/ou senha inválidos')
          }
          alert(this.state.isAuth)
      }

render() {

return (
<>
    <img className="img" src="https://lucasbarbearia.com.br/site/wp-content/uploads/logo-branco.png"></img>
    <h1>  LOGIN </h1> <br/>
    <form className="form" onSubmit={this.handleLogin}>
        <div>
            <p className="campos"> Usuário: </p> 
                <input 
                    type="text" 
                    name="user" 
                    className="Login-Field"
                    value={this.state.user}  
                    onChange={this.handleChangeuser} 
                    required >
                </input>
            <p className="campos"> Senha: </p> 
                <input 
                    type="password" 
                    name="password" 
                    className="Login-Field" 
                    value={this.state.password}
                    onChange={this.handleChangepassword}
                    required >
                </input>
        </div>
        <button className="Login-Btn" type="submit" >Login</button>
    </form>
    </>
);
}
}

export default Login;