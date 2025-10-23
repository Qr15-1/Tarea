import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.config.js';

// Verificar si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario autenticado - mostrar solo su primer nombre
    const firstName = user.displayName ? user.displayName.split(' ')[0] : 'Usuario';
    document.getElementById('userName').textContent = firstName;
  } else {
    // No hay usuario - redirigir al login
    window.location.href = '/';
  }
});

// Cerrar sesión
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', async () => {
  try {
    await signOut(auth);
    window.location.href = '/';
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    alert('Error al cerrar sesión');
  }
});

