import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showModal } from './Firebase/Users/index'

class Report extends Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(){
        this.props.isshowModal()
    }
    render() {
        return (
            <Modal
                show={this.props.isShowModal}
                onHide={this.handleClose}
                backdrop= {true}
                keyboard={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.props.contentModal}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        isshowModal : () =>{
            dispatch( showModal() )
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        isShowModal : state.isShowModal,
        contentModal : state.contentModal
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Report)