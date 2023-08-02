import styles from './PostStyle.module.css';
import { useState } from 'react';

export function Post(props){
    let [count,setCount] = useState(0);
    const user = props;
    console.log(props)
    return (<><div className={styles['article']}>
                <img src={user.author.avatar} className="" alt="" />
                <span><b>{user.author.name}</b>   {user.author.nickname}   {user.date}</span><br/>
                <span><bold>{user.content}</bold></span>
                <img src={user.photo} className="" alt="" /><br/>
                <button className={styles['reactions']} onClick={()=>{
                    setCount(count + 1);
                }}> Likes:  {count}</button> 
            </div>
    </>)
}