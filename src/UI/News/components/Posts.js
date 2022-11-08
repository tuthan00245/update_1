// import React from 'react'

// export const Posts = ({posts,loading}) => {
//     if(loading){
//         return <h2>loading...</h2>
//     }
//     return <ul>
//         {posts.map(post =>(<li>{post.content}</li>))}
//     </ul>
// }
import React from 'react'


const Posts = ({posts,loading}) => {
    if(loading){
        return <h2>loading...</h2>
    }
    return <ul>
        {
            1
        // posts.map(
        //     post =>(<li>{post.content}</li>)
        //     )
            }
    </ul>
}

export default Posts