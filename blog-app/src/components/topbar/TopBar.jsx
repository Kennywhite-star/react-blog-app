import './topbar.css';
import { Link } from 'react-router-dom';
 
export default function TopBar(){
    const user = false;
    return(

        <div className='top'>   
        <div className='topLeft'> 
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>

        </div>
        <div className='topCenter'>  
         <ul className='topList'>
             <li className='topListItem'>
             <Link className='link' to='/'>HOME </Link></li>
             <li className='topListItem'>
             <Link className='link' to='/'>ABOUT</Link></li>
             <li className='topListItem'><Link className='link' to='/'>CONTACT</Link></li>
             <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
             <li className='topListItem'>{user && 'LOGOUT'}</li>


         </ul>
         </div>
        <div className='topRight'> 
        {
            user ? (
                <img 
                className='topImg'
                src ='https://images.unsplash.com/photo-1589156215870-a324614b3fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt ='' />

            ) : (
                <ul className='topList'>
                     <li className='topListItem'> 
                        <Link className='link' to='/login'>LOGIN</Link> 
                        </li>
                     <li className='topListItem'> 
                    <Link className='link' to='/register'>REGISTER</Link> 
                    </li>
                </ul>

            )
        }
       
        <i class='topSearchIcon fas fa-search'></i>
          </div>
        </div>

    )
}