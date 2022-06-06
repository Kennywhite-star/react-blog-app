import './write.css'

export default function Write(){
    return(
       <div className='write'>
           <img 
           className='writeImg'
           src='https://media.istockphoto.com/photos/young-man-laying-grass-sod-on-ground-at-backyard-closeup-space-for-picture-id1326059941?b=1&k=20&m=1326059941&s=170667a&w=0&h=YX6oZ2uuwElWoJfkDtaWePVfyCudAoDilhwMu1xA7Xw='
           alt=''/>
           <form className='writeForm'>
               <div className='writeFormGroup'>
                   <label htmlFor='fileInput'>
                       <i className='writeIcon fas fa-plus'></i>
                   </label>
                   <input type='file' id='fileInput' style={{display:'none'}}/>
                   <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
               </div>
               <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' 
                type='text' 
                className='writeInput writeText'></textarea>
               </div>
               <button className='writeSubmit'>Publish</button>
           </form>
       </div>
    )
}