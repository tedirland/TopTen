//Action Creator 
 export const selectPost = post => {
// Return an Action
    return {
        type:'POST_SELECTED',
        payload: post


    };
};

