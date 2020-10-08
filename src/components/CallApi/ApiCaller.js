import {data} from '../Firebase/FireBase';





// get data from database while start
export const fetchDataRequest = () =>{
    return (dispatch) =>{
        data.on( 'value', function(snapshot){
            let data = []
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                data.push(childData)
              });
            dispatch(fetchData(data))
        } )
    }
}


export const fetchData = (data) =>{
    return {
        type : 'FETCH_DATA',
        data : data
    }
}