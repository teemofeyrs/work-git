import React from "react";
import classesPost from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classesPost.post}>
            <div className={classesPost.profileDetails}>
                <div className={classesPost.postTopbar}>
                    <div className={classesPost.profile}>
                        <img src={props.posts.img} alt="user"/>
                        <div>
                            <h3>{props.posts.name}</h3>
                            <span>3 min ago</span>
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
            </div>
            <div className={classesPost.postContent}>
                <p>{props.posts.textPost}</p>
                <span>view more</span>
            </div>
            <div className={classesPost.postStatus}>
                <ul className={classesPost.likeCom}>
                    <li>
                        <span>Like</span>
                        <span>{props.posts.likes}</span>
                    </li>
                    <li>
                        <span>Comment</span>
                        <span>{props.posts.comments}</span>
                    </li>
                    <li>
                        <span>Views</span>
                        <span>{props.posts.views}</span>
                    </li>
                </ul>
            </div>
        </div>
        );
    };

export default Post;