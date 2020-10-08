import React from 'react';
import { Redirect } from 'react-router-dom';
// import * as firebase from 'firebase';
// import 'firebase/auth';
import { db, data } from '../FireBase';



// đăng ký
// Sign up new user
 export const signup = (username,password) =>{
    return (dispatch) =>{
        return db.auth().createUserWithEmailAndPassword(username, password)
        .then( (res) =>{
            dispatch( errorMessage('Account registration is successful') );
            dispatch( showModal() );
            dispatch( getUserName(res.user.email) )
        } )
        .catch(function(error) {
            dispatch( errorMessage(error.message) );
            dispatch( showModal() )
          });
    }
 }

//   đăng nhập
//  Sign in 
export const signin = (email,password) =>{
    return (dispatch) =>{
        db.auth().signInWithEmailAndPassword(email, password)
        .then( res => {
            // console.log(res);
          dispatch( getUserName(res.user.email) )
          return res
        } )
        .then( res => {
          dispatch( redirect() )
          return res
        } ).catch(function(error) {
            dispatch( errorMessage(error.message) )
            dispatch( showModal() );
          })
          ;
    }
}
export const redirect = () => {
    return{
        type : 'IS_REDIRECT_TO_HOME'
    }
}
export const notredirect = () => {
    return{
        type : 'IS_REDIRECT_TO_LOGIN'
    }
}


// sign out
export const signout = () =>{
    return (dispatch) =>{
        return db.auth().signOut().then(function() {
            // Sign-out successful.
            // console.log('Sign-out successful');
            dispatch( getUserName('') )
          }).catch(function(error) {
            // An error happened.
            // console.log(error);
          });
    }
}

// kiểm tra trạng thái người dùng
// State of auth
export const onAuthState = () =>{
    return (dispatch) =>{
        return db.auth().onAuthStateChanged(function(user) {
            // console.log(user);
            if (user) {
              // User is signed in.
    
            //   var displayName = user.displayName;
            //   var email = user.email;
            //   console.log(user.email);
              // ...
              dispatch( getUserName(user.email) )
            } else {
              // User is signed out.
              // ...
            //   console.log('User is signed out');
            }
          });
    }
}

// get username
// nhận tên người dùng và lưu vào store
const getUserName = (username) => {
    return {
        type : 'GET_USER_NAME',
        username : username
    }
}


// gửi tin nhắn
// send message
export const sendmessage = (username, message) =>{
    return (dispatch) => {
        // A post entry.
    var postData = {
        username: username,
        message : message
      };
    
      // Get a key for a new Post.
      var newMessageKey = data.push().key;
    // console.log(data.push());
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/' + newMessageKey] = postData;
      // updates['/user-posts/' + uid + '/' + newMessageKey] = postData;
    
      return data.update(updates);
    }
  }


//  thông báo lỗi
// hiện hộp thoại thông báo lỗi
export const showModal = () =>{
    return {
        type : 'IS_SHOW_MODAL'
    }
}
// tin nhắn thông báo lỗi
export const errorMessage = (message) =>{
    return {
        type: 'CONTENT_MODAL',
        contentModal : message
    }
}