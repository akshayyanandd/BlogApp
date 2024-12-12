import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => { 
  const posts=[
    {
      id:1,
      title:"loremlorm lorem",
      desc:"soaf ao dfoijfo o iaoidjfois o asoisdjfoi oao j fosajfojosdjfo oij fo siodfjoasdjfo osj o",
      img:"https://images.pexels.com/photos/15539380/pexels-photo-15539380/free-photo-of-a-great-white-shark-swimming-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },{
      id:2,
      title:"loremlorm lorem",
      desc:"soaf ao dfoijfo o iaoidjfois o asoisdjfoi oao j fosajfojosdjfo oij fo siodfjoasdjfo osj o",
      img:"https://images.pexels.com/photos/29660145/pexels-photo-29660145/free-photo-of-stylish-young-adult-on-industrial-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },{
      id:3,
      title:"loremlorm lorem",
      desc:"soaf ao dfoijfo o iaoidjfois o asoisdjfoi oao j fosajfojosdjfo oij fo siodfjoasdjfo osj o",
      img:"https://images.pexels.com/photos/27573929/pexels-photo-27573929/free-photo-of-a-van-parked-on-the-street-next-to-palm-trees.jpeg"
    },{
      id:4,
      title:"loremlorm lorem",
      desc:"soaf ao dfoijfo o iaoidjfois o asoisdjfoi oao j fosajfojosdjfo oij fo siodfjoasdjfo osj o",
      img:"https://images.pexels.com/photos/26690662/pexels-photo-26690662/free-photo-of-interior-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  return (
    
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className='content'>
              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
               </Link>
              <p>{post.desc.length>50?post.desc.slice(47)+"...":post.desc}</p>
              <button>Read More</button>
              </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Home
