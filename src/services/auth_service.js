import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor(firebaseApp) {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}

export default AuthService;
