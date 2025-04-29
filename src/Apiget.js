import React, { useEffect, useState } from 'react'

const Apiget = () => {
    const [posts , setPosts] = useState([])
    const [loading  , setLoading] = useState(true);
    

    
    useEffect(() => {
        fetch("https://gitprp.vercel.app/finduser")
        // can use axios 
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data , 'data');
            setPosts(data.data);
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
                    <td>Reg no </td>
                    <td>name</td>
                    <td>marks </td>
                </tr>
            </thead>

            <tbody>
                {posts.map((post , index) => 
                <tr key = {index}>
                    <td>{index + 1}</td>
                    <td>{post.regno}</td>
                    <td>{post.name}</td>
                    <td>{post.marks}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Apiget
