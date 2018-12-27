import React, { Component } from 'react';
import facebookLogin from '../actions/auth/facebookLogin';

class LoginPage extends Component {
    loginWithFacebook() {
        facebookLogin().then(console.log).catch(err => console.log("error:", err));
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <a href=""></a>
                <button
                    onClick={() => this.loginWithFacebook()}
                >Facebook Login</button>
            </div >
        );
    }
}

export default LoginPage;