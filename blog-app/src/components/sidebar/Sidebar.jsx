import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className="sidebarTitle">ABOUT ME</span>
        <img src='https://images.unsplash.com/photo-1589156215870-a324614b3fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
         alt="" />
         <p>Lorem ipsum dolor sit amet consectetur 
           adipisicing elit. Architecto iure modi, dolores saepe aut,
            </p>
      </div>
      <div className='sidebarItem'>
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
      <li className="sidebarListItem">Life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>      
      <li className="sidebarListItem">Tech</li>
      <li className="sidebarListItem">Cinema</li>
      </ul> 
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className='sidebarIcon fab fa-facebook-square'></i>
        <i className='sidebarIcon fab fa-instagram-square'></i>
        <i className='sidebarIcon fab fa-twitter-square'></i>
        <i className='sidebarIcon fab fa-pinterest-square'></i>
        </div>
      </div>
    </div>
  )
}
