
import { bloggerFirebaseRef } from "./../firebase/firebase";
import { 
    FETCH_BLOGGER_POSTS, 
    INSERT_BLOGGER_POST_SUCCESS, 
    INSERT_BLOGGER_POST_FAILURE 
  } from "./blogger-posts-types";

export const addNewBloggerPost = newBloggerPost => async dispatch => {
    bloggerFirebaseRef.push().set(newBloggerPost).then((snapshot)=>{
      console.log('--- addNewBloggerPost snapshot --==> ', snapshot);
      dispatch({
        type: INSERT_BLOGGER_POST_SUCCESS,
        payload: {status: 200, message:'success', snapshot}
      })
    }, (error)=>{
      console.log('--- addNewBloggerPost error --==> ', error);
      dispatch({
        type: INSERT_BLOGGER_POST_FAILURE,
        payload: {status: 500, message:'failure', error}
      })
    });
    
  };
  
  export const removeBloggerPost = newBloggerPost => async dispatch => {
    bloggerFirebaseRef.child(newBloggerPost).remove();
  };
  
  export const fetchBloggerPosts = () => async dispatch => {
    bloggerFirebaseRef.on("value", snapshot => {
      dispatch({
        type: FETCH_BLOGGER_POSTS,
        payload: snapshot.val()
      });
    });
  };