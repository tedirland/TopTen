import { combineReducers } from 'redux';

const PostsReducer = () => {
    return [
        { author : 'Kirving420FlatEarf', headline: 'Holla', content: "I'm Joe's Favorite Player", comments: [], category: 'sports' },
        { author : 'RealDJT2024', headline: 'FAKE NEWS', content: "MUST STOP THE STEAL", comments: [], category: 'politics' },
        { author : 'cLauper', headline: "Girls", content: "Just wanna have fun", comments: [], category: 'music' },
        { author : 'BuseyontheLusey', headline: 'AHHHH', content: "I'm better than Jake", comments: [], category: 'TV/Movies' },
        { author : 'OGGordonRamsay', headline: 'Mind The Scallops', content: "You Twat", comments: [], category: 'Food' },
        { author : 'RealAdamSilver', headline: 'Happy New Year', content: "To Our Fans Around the World", comments: [], category: 'NBA' },
        { author : 'GhostofBobMarley', headline: "Jammin'", content: "Yeah, we Jammin", comments: [], category: 'Rastafarian' },
        { author : 'JonOliver', headline: "Adam Driver", content: "Enough Said", comments: [], category: 'Off Topic' },
        { author : '&$', headline: 'Dolla Dolla Bills', content: "Y'all", comments: [], category: 'test' },
        { author : 'DariusBlazely', headline: "I can't shoot over 30%!", content: "Why Can't I Shoot?", comments: [], category: 'test' },
        
        
      
    ];
};

const selectedPostReducer = (selectedPost = null, action) => {
    if (action.type === 'POST_SELECTED') {
        return action.payload;
    }
    return selectedPost;

};

export default combineReducers({
    posts: PostsReducer,
    selectedPost: selectedPostReducer
});