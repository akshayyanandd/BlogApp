import React from 'react'

const Menu = () => {

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
    
    <div className="menu">
              <h1>Other posts you may like</h1>
                {
                    posts.map((post)=>(
                        <div className="post" key={post.id}>
                            <img src={post?.img} alt=""/>
                            <h2>{post.title}</h2>
                            <button>Read More</button>
                        </div>
                    ))
                }
    </div>
  )
}

export default Menu
