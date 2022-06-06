import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img  className='singlePostImg'
        src='https://images.unsplash.com/photo-1581995763167-1979f42aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
        alt='' />

        <h1 className='singlePostTitle'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash'></i>
          </div>
        </h1>

        <div className='singlePostInfo'>
        <span className='singlePostAuthor'>Author: <b>david</b></span>
        <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae corrupti, dicta quia quis repudiandae at explicabo culpa autem consectetur'
             ea accusantium repellat! Porro aliquam, 
            delectus non molestiae quasi aspernatur incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>


      </div>

      singlePost
    </div>
  )
}
