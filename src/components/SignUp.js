import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup, showModal, errorMessage } from './Firebase/Users/index'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            repassword : '',
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

        if(this.state.password == this.state.repassword){
            this.props.signUp(this.state.username, this.state.password);
            this.setState({
                username: '',
                password: '',
                repassword : ''
            })
        } else {
            const errMes = 'Mật khẩu và xác nhận mật khẩu phải trùng nhau';
            this.props.errModal(errMes);
            this.props.showmodal();
            this.setState({
                password: '',
                repassword: '',
            })
        }
    }
    render() {
        if( this.props.username != ''){
            return <Redirect to='/home' />
        }
        return (
            <div className="form_login animate__animated animate__fadeIn">
                <form className="box" method="post" onSubmit={ (e)=>this.onSubmit(e) }>
                    <h1> Tạo tài khoản mới </h1>
                    <input type="text" name='username' value={this.state.value} placeholder="Nhập email" onChange={ (e)=> this.onChange(e) } />
                    <input type="password" name='password' value={this.state.password} placeholder="Mật khẩu" onChange={ (e)=> this.onChange(e)} />
                    <input type="password" name='repassword' value={this.state.repassword} placeholder="Xác nhận lại mật khẩu" onChange={ (e)=> this.onChange(e)} />
                    <button type="submit" > Đăng ký </button>
                    <p>Bạn đã có tài khoản ? <Link to='/'>Đăng nhập</Link> </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        username : state.username
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signUp : (username,password) =>{
            dispatch( signup(username,password) )
        },
        errModal: (message) => {
            dispatch( errorMessage(message) )
        },
        showmodal : () =>{
            dispatch( showModal() )
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(SignUp)