import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings(){
    return(
        <div className='settings'>
            <div className='settingsWrapper'>
               <div className='settingsTitle'>
               <span className='settingsUpdateTitle'>Update Your Account</span>
               <span className='settingsDeleteTitle'>Delete Account</span>

              </div>
              <form className='settingsForm'>
                  <label>Profile Picture</label>
                  <div className='settingsPP'>
                      <img 
                       src ='https://images.unsplash.com/photo-1589156215870-a324614b3fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                       alt=''
                      />
                      <label htmlFor='fileInput'>
                          <i className='settingsPPIcon far fa-user-circle'></i>
                      </label>
                      <input type='file' id='fileInput' style={{display:'none'}} />
                  </div>
                  <label>Username</label>
                  <input type='text' placeholder='david'/>
                  <label>Email</label>
                  <input type='email' placeholder='kwhite@gmail.com'/>
                  <label>Password</label>
                  <input type='password'/>
                  <button className='settingsSubmit'>Update</button>

              </form>
            </div>
            <Sidebar />

        </div>
    )
}