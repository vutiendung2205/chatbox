import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div className="user animate__animated animate__lightSpeedInLeft">
                <div className="row w-100">
                    <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                        <p className="user_content">{this.props.message}</p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-2 col-2">
                        <div className="avatar">
                            <p>{this.props.username.slice(0,1).toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
