import googleLogo from '../assets/images/icongoogle.svg';
import '../styles/homepage.scss'
import { useHistory } from 'react-router-dom';
import { auth, firebase } from '../services/firebase'


export function Home() {

  const history = useHistory();
  

  function navigateToHabitPage() {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {      
      history.push('./habitpage')
    })    
  } 




  return (
    <div id="homepage-auth">
      <main>
        <div>
          <h1 className="title">
            Habit <span>tracker</span>
          </h1>
          <p>
            mantenha o controle de seus novos habitos
          </p>
          <button onClick={navigateToHabitPage}>
            <img src={googleLogo} alt="Google Logo"/>
            Faça login com o Google
          </button>
        </div>
      </main>
      <footer>
        Created by Matheus Chen and Luiz Gustavo Frota
      </footer>
    </div>
  )
}