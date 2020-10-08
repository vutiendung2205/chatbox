import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getData } from './CallApi/ApiCaller';
import { signout } from './Firebase/Users/index'

class Header extends Component {
    constructor(props){
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    signOut(){
        this.props.sign_Out()
    }
    render() {
        let pos;
        let username = this.props.username.split('@')[0];
        let username_length = this.props.username.split('@')[0].length;
        if(username_length <= 10){
            pos = username;
        }else{
            pos = `${username.slice(0,11)}...`
        }
        return (
            <div className="box_header">
                <h4 >{pos}</h4>
                <button className='btn btn-info' type="button" onClick={this.signOut} > Đăng xuất </button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        username : state.username
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sign_Out : ()=>{
            dispatch( signout() )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
