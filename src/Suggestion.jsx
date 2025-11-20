import { useState,useEffect } from "react";

function Suggestion() {
  const [profile,setProfile]=useState(null);
  const [suggestion,setSug]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:3000/profile')
      .then(data=>data.json())
      .then(data=> setProfile(data))
      .catch(err=>console.log(err));

    fetch('http://localhost:3000/Suggestion')
      .then(data=>data.json())
      .then(data=> setSug(data))
      .catch(err=>console.log(err))
     },[]);
  return (
    <div>
      <div className='suggestion w-60 m-4'></div>
      {
        profile?
      
     <div className="d-flex" >
          <div  className="image" img="" alt="profile"></div>
          <p className='m-2'>{profile[0].username}
            </p>
            <small className='ms-auto text-primary'>switch</small>
    </div>
    :<p>Loading</p>
      }
      <div className=' d-flex m-4'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See All</b>
      </div>
      {suggestion.length>0?(
       <div> {suggestion.map((suggest)=>
       (
       <div className="my-1 m-4" key={suggest.id}>
        <div className="d-flex" >
          <div  className="image" img="" alt="profile"></div>
          <h6>{suggest.username}
            </h6>
            <p className='text-primary ms-auto'>Follow</p>


        </div>
      
       </div>
       )
      )
       }
       </div>
        
        
      ):
      (
        <div>
          Loading.....
        </div>
      )
    }
    </div>
  );
    
 
}
export default Suggestion;