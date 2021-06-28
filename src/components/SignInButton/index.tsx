import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/client';

export function SignInButton() {
  const [session] = useSession();

  function handleSignIn() {
    // É uma promisse
    signIn('github');
  }

  function handleSignOut() {
    signOut();
  }

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={handleSignOut}
    >
      <FaGithub color="#04d361" />
      {session.user?.name}
      <FiX color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={handleSignIn}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
