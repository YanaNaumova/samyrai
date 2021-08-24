import s from './MyPosts.module.css';
import {Post} from "../Post";



export const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi how are you?' likesCount='1 likes'/>
        <Post message='It is s my first post' likesCount='23 likes'/>
      </div>
    </div>
  )
};