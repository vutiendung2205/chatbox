import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendmessage } from './Firebase/Users/index';

class FormInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            message : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        if( this.state.message.trim() !== '' ){
            this.props.sendMess(this.props.username, this.state.message)
        }
        this.setState({
            message : ''
        })
    }
    render() {
        return (
            <form className="form_input" onSubmit={ (e)=>this.onSubmit(e)}>
                <div className="row w-100">
                    <div className="col-lg-11 col-md-11 col-sm-10 col-10 pr-0">
                        <input placeholder="Nhập tin nhắn..." maxLength='1000' value={this.state.message} type="text" onChange={ (e)=> this.onChange(e) } />
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <button className="button btn btn-light" type='submit' >
                            <i className="far fa-paper-plane" />
                        </button>
                    </div>
                </div>
            </form>
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
        sendMess : (username, message) =>{
            dispatch( sendmessage(username, message) )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormInput)
