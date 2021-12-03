// import { useState, useEffect } from 'react'
// import { getSession } from 'next-auth/react'
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  
  // const [isLoading, setIsLoading] = useState(true)
  
  // useEffect(() => {
  //   getSession().then(session => {
  //     if(!session) {
  //       window.location.href = '/auth'
  //     }  else {
  //       setIsLoading(false)
  //     }
  //   })
  // }, [])

  // const { data: session, status: loading } = useSession()

  // if(isLoading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
