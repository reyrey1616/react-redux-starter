// METHOD WE USE TO GET OR ADD SOME DATA TO DATABASE OR API TO BE IMPORTED IN COMPONENTS

// dispatch is simply using JS destructuring assignment to extract dispatch from this.props object.


import { FETCH_POST , NEW_POST } from "./Types";

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts
        })).catch(err => console.log(err)); 
}



export const createPost = (postData) => dispatch => {

    console.log('submitting')
    fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        } ).then(res => res.json())
           .then(post => dispatch({
               type: NEW_POST , 
               payload: post
           }))
}