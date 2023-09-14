import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
function Home() {
  const [agent, setAgent] = useState('');
  const [password, setPassword] = useState('');
  const [isAllowed, setIsAllowed] = useState(false);
  console.log(isAllowed);
  const handleSubmit = () => {
    if (agent === 'codybanks' && password === 'qwerty123') {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
      setAgent('');
      setPassword('');
    }
  };

  let pageContent;
  if (isAllowed) {
    pageContent = (
      <>
        <Image src="/logo.png" alt="Logo" width={200} height={200} />

        <h1>Welcome Agent Codybanks</h1>
      </>
    );
  } else {
    pageContent = (
      <>
        <Image src="/logo.png" alt="Logo" width={200} height={200} />

        <h1>CIA LOGIN</h1>
        <div className={styles.inputContainer}>
          <span>AGENT ID</span>
          <input
            type="text"
            onChange={(e) => setAgent(e.target.value)}
            value={agent}
          />
        </div>

        <div className={styles.inputContainer}>
          <span>PASSWORD</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={() => handleSubmit()}>LOGIN</button>
      </>
    );
  }

  return <div className={styles.container}>{pageContent}</div>;
}

export default Home;

/*
CONSIGNES :

👉 Dans le composant Home, ajoutez la mécanique permettant de récupérer les valeurs
 des deux champs de saisie et exploitez les pour gérer la connexion. 

👉 Lors du clic sur le bouton "login" et si l’utilisateur saisit les bonnes informations, le contenu de la page
 sera modifié pour afficher uniquement le message "Welcome, agent Cody Banks.", sinon, rien ne se passe.

 Les informations de connexion (sensibles à la casse) à vérifier sont les suivantes :

Agent ID : codybanks

Mot de passe : qwerty123

*/
