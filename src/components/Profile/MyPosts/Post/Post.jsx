import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpGdJw8wuHSUgzEIoeDoK86p_akIzZf2ohg&usqp=CAU"
                alt="Avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;