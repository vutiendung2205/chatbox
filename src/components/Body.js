import React, { Component } from 'react'
import FormInput from './FormInput'
import Header from './Header'
import Otheruser from './messengers/Otheruser'
import User from './messengers/User';
import { connect } from 'react-redux';
import { fetchDataRequest } from './CallApi/ApiCaller';
import { Redirect } from 'react-router-dom';

class Body extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchData();
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth",  });
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

    render() {
        if( this.props.username == ''){
            return <Redirect to='/' />
        }
        return (
            <section className="box animate__animated animate__fadeIn">
                <div className="container">
                    <div className="box__body">
                        <Header />
                        <div className="box_content">
                            {
                                this.props.data.map( (val,index) => {
                                    return (val.username === this.props.username ) ? <User key={index} username={val.username} message={val.message} /> : <Otheruser username={val.username} message={val.message} key={index} />
                                } )
                            }
                            <div style={{ float:"left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>

                        <FormInput />
                    </div>
                </div>
            </section>

        )
    }
}
function mapStateToProps(state){
    return {
        username : state.username,
        data : state.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchData : () =>{
            dispatch(fetchDataRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Body)
