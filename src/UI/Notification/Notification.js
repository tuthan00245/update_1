import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NotificationAPI from '../../API/NotificationAPI'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import News from "../News/News"

function Notification() {
  const [posts,setPosts] = useState([]);
  const [DataNotice,setDataNotice] = useState([]);
  // const styles = StyleSheet.create({
  //   bigblue: {
  //     color: 'blue',
  //     fontWeight: 'bold',
  //     fontSize: 30,
  //   },
  //   red: {
  //     // color: 'red',
  //     backgroundcolor:'red',
  //   },
  // });
  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //       .then(res =>{
    //         console.log(res)
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
     (async()=>{
      const result2 = await NotificationAPI.getNotificationIdAPI(1); 
      setDataNotice(result2.data);
    })();
  })
  return (
    <div style={{display: 'flex',flexDirection:"row"}}>
      <div className="news-left" style={{width:"50%",display: 'flex',flexDirection:"column",justifyItems:"center"}}>
        {/* <News/> */}
      </div>
    </div>
  )
}

export default Notification