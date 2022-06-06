import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post" >
        <img 
        className='postImg'
        src="https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738?b=1&k=20&m=1304263738&s=170667a&w=0&h=LZ99BV0qvF5GsYw3mqyJcN5lNZPvJ5jaKcDs9dMvzmg=" 
        alt="" />
        <div className='postInfo'>
           <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
           </div>
           <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </span>
           <hr/>
           <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
        </p>
    </div>
  )
}
