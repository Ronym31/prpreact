import React, { useEffect, useState } from 'react'

const Apiget = () => {
    const [posts , setPosts] = useState([])
    const [loading  , setLoading] = useState(true);
    

    
    useEffect(() => {
        fetch("https://dummy-json.mock.beeceptor.com/posts")
        // can use axios 
        .then((res) => res.json())
        .then((data) => {
            console.log(data , 'data');
            setPosts(data);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err , "Error");
            setLoading(false)
        })
    }, [])

    if (loading) return (<>Loading ....</>)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>S.No.</td>
                    <td>User id</td>
                    <td>Title</td>
                    <td>Comment Count</td>
                </tr>
            </thead>

            <tbody>
                {posts.map((post , index) => 
                <tr key = {index}>
                    <td>{index + 1}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.comment_count}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Apiget
