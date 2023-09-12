function UserCard({name,email,avatarURL}){

      return(
          <>
           <p>My name is : {name}</p>
           <p>My email address is : {email}</p>
           <img src={avatarURL} alt="BigCo Inc. logo" style={{width:'150px'}}/>
           </>

      ) ;

}
export default UserCard ;