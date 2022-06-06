import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
          <span className="headerTitleSm" >Grass and  Climate</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className='headerImg' src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
    </div>
  )
}

export default Header
