import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/Post/MyPosts";

export const Profile=()=>{
  return(
  <div ><img
    src='https://st.depositphotos.com/1000970/2847/i/600/depositphotos_28473595-stock-photo-couple-on-a-beach.jpg'/>
    <div>
      ava+discription
    </div>
  <MyPosts hey='yo'/>
    </div>
  );
}