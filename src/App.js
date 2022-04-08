import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
      }).catch((error) => {
        console.error(error)
      })
  }
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)

      })
      .catch(error => {
        console.error(error);
      })

  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setUser({})
    });
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out </button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google  Sign In</button>
            <button onClick={handleGithubLogin}>GitHub Login</button>
          </>
      }

      <h2>Login user Name:{user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
