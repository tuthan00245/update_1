import React, { Component} from 'react'
import NewsListAPI from '../../../API/NewsListPageAPI'
import Loader from "../../loader/Loader"

export class NewsList extends Component {
  state = {
    data: [],
    totalRecords:0,
    limit: 10
}
componentDidMount(){
  this.loadData(1,6);
}
getPaginatedData = (page,size) =>{
  this.loadData(page,size);
}
loadData = async(page,size) =>{
  await fetch(
    NewsListAPI.getNewsPageAPI(page,size)
    .then(res => {
        const data = res.data;
        this.setState({
            data: data.data,
            totalRecords : data.totalItem ? data.totalItem : 0,
            limit : data.size ? data.size : 6
        })
    })
  )
}
  render() {
    const { data} = this.state;
    return (
      <>
        {
          data && data.length > 0 ?
          data.map((item,index)=>(
            <a href={"news/"+item.id}>
              <div className="box shadow-lg h-[200px] mt-[30px]">
                  <div className="image w-[200px] h-[50%] m-[2px_auto] bg-red-100">
                    <img/>
                  </div>
                  <div className="description m-[2%_5%]" >
                    <h1 className="title">{item.title}</h1>
                    <p className="text-xs whitespace-nowrap w-[200px] text-ellipsis overflow-hidden">{item.shortDescription}</p>
                  </div>
                </div>
            </a>
          )) :
          <Loader/>
        }
      
          
        </>
    )
  }
}

export default NewsList