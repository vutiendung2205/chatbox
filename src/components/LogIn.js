import React, { Component } from 'react';
import { onAuthState } from './Firebase/Users/index';
import { Link, Redirect } from 'react-router-dom';
import { signin, signout } from './Firebase/Users/index';
import { connect } from 'react-redux'

class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state.username, this.state.password);
    }
    componentDidMount(){
        this.props.isAuthState()
    }
    render() {
        if( this.props.username != '' ){
            return <Redirect to='/home' />
        }
        return (
            <div className="form_login animate__animated animate__fadeIn">
                <form className="box" method="post" onSubmit={ (e)=>this.onSubmit(e) }>
                    <h1>Đăng nhập</h1>
                    <input type="text" name='username' placeholder="Nhập tên tài khoản" onChange={ (e)=> this.onChange(e) } />
                    <input type="password" name='password' placeholder="Nhập mật khẩu" onChange={ (e)=> this.onChange(e)} />
                    <button type="submit" > Đăng nhập </button>
                    <p>Bạn chưa có tài khoản? <Link to='signup'>Đăng ký</Link> </p>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signIn : (user, password) =>{
            dispatch( signin(user, password) )
        },
        isAuthState : () =>{
            dispatch( onAuthState() )
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        redirect : state.redirect,
        username : state.username
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogIn)
