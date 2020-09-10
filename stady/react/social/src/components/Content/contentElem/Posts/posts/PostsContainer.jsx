import {connect} from "react-redux";
import Posts from "./Posts";
import {getPosts} from "../../../../../redux/selectors/selectors";


let mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
