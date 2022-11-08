import React, { Component,useState,useEffect } from 'react'
import NewsAPI from '../../API/NewsListPageAPI'
import Loader from "../loader/Loader"


// const NewsPage = () => {
//   const [posts,setPosts] = useState([]);
//   const [loading,setLoading] = useState(false);
//   const [currentPage,setCurrentPage] = useState(1);
//   const [postsPerPage,setPostsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async (page) => {
//       setLoading(true);
//       const res = await fetch(NewsAPI.getNewsPageAPI(1)
//       .then(res => {
//         const data = res.data;fetch(
//           NewsAPI.getNewsPageAPI(1)
//           .then(res => {
//               const data = res.data;
//               this.setState({
//                   data: data.data,
//                   totalRecords : data.totalItem ? data.totalItem : 0,
//                   limit : data.size ? data.size : 6
//               })
//           })
//         )

//         setPosts(data.data);
//     })
//       );

//       setLoading(false);
//     }
//     fetchPosts();
//   },[]);


//   return (
//     <div className="container mt-5">
      
//     </div>
//   )

// }



export class NewsPage extends Component {
  state = {
    data: [],
    totalRecords:0,
    limit: 10
}
componentDidMount(){
  this.loadData(1);
}
getPaginatedData = page =>{
  this.loadData(page);
}
loadData = async(page) =>{
  await fetch(
    NewsAPI.getNewsPageAPI(1)
    
    .then(res => {
        const data = res.data;
        this.setState({
            data: data.data,
            totalRecords : data.totalItem ? data.totalItem : 0,
            limit : data.size ? data.size : 6
        })
    })
    .delay(1000)
  )
}
  render() {
    const { data, totalRecords, limit } = this.state;
    return (
      <div className="m-0 p-0 border-box">
        {
          data && data.length > 0 ?
          data.map((item,index)=>(
            <a href={"news/"+item.id}>
              <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
                <div className="bg-blue-50 ">
                  <section className="container-1">
                    <div className="p-1">
                        <h4 className="text-xl">{item.title}</h4>
                        <p className="text-xs">{item.shortDescription}</p>
                        <p className="text-xs text-right pt-[1rem]">{item.createdDate}</p>
                    </div>
                  </section>
                </div>
              </div>
            </a>
          )) :
          <Loader/>
        }
      
          
        </div>
    )
  }
}

export default NewsPage