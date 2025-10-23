import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase.config.js';

const loginBtn = document.getElementById('googleLoginBtn');

loginBtn.addEventListener('click', async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('Usuario autenticado:', user);
    // Redirigir a la página de inicio
    window.location.href = '/inicio';
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión: ' + error.message);
  }
});