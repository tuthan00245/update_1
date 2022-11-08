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
        <div style={{backgroundColor:"blue",borderRadius:"0% 48%",width:"80%"}}>
            <div className="title" style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{color:"white",fontSize:"4rem"}}> Thông tin</h1>
            </div>
            {/* <ul>
              {
              <li>{DataNotice.id}</li>
              }{
              <li>{DataNotice.title}</li>
              }
            </ul> */}
          </div>
          <div style={{border: '1px',display: 'flex'}}>
            <div style={{height:"7rem",width:"33%",margin:"20px 20px",border: '1px solid blue'}}>
            </div>
            <div style={{height:"7rem",width:"33%",margin:"20px 20px",border: '1px solid red'}}>
            </div>
            <div style={{height:"7rem",width:"33%",margin:"20px 20px",border: '1px solid green'}}>
            </div>
          </div>
          <div style={{borderTop: '3px solid black',margin:"0px 10px ",}}>
            
          </div>
          <div>
            <News/>
          </div>
        </div>
      <div className="col-linear" style={{borderRight:"2px solid black"}}>
        
      </div>
      <div className="news-right">

      </div>
      

    </div>
  )
}

export default Notification