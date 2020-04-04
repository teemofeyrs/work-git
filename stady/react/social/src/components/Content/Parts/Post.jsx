import React from "react";
import classesPost from './Post.module.css';

const Post = () => {
    return (
        <div className={classesPost.post}>
            <div className={classesPost.profileDetails}>
                <div className={classesPost.postTopbar}>
                    <div className={classesPost.profile}>
                        <div>
                            <h3>John Doe</h3>
                            <span>3 min ago</span>
                        </div>
                    </div>
                    <div className={classesPost.toggle}>
                        <a href="#" title="">...</a>
                        <ul className={classesPost.ulToggle}>
                            <li><a href="#" title="">Edit Post</a></li>
                            <li><a href="#" title="">Unsaved</a></li>
                            <li><a href="#" title="">Unbid</a></li>
                            <li><a href="#" title="">Close</a></li>
                            <li><a href="#" title="">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classesPost.postContent}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                <span>view more</span>
            </div>
            <div className={classesPost.postStatus}>
                <ul className={classesPost.likeCom}>
                    <li>
                        <span>Like</span>
                        <span>25</span>
                    </li>
                    <li><span>Comment 15</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Post;