import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="23"/>
                <Post message="It's my first post" likesCount="0"/>
                <Post message="Hello world!" likesCount="3"/>
            </div>
        </div>
    );
}

export default MyPosts;