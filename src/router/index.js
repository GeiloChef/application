import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CVView from '../views/CVView.vue'
import LoginView from '../views/LoginView.vue'
import ImpressView from '../views/ImpressView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'

// import jwt_decode from "jwt-decode";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cv',
    name: 'cv',
    component: CVView
  },
  {
    path: '/impress',
    name: 'impress',
    component: ImpressView
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicyView
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  /**
   * Redirect a User if his JWT Token is not valid
   */
  if (to.name !== 'Login') {
    if (!window.localStorage.getItem("jwt") || !window.localStorage.getItem("userbasedContent")) {
      next({ 'name': 'Login' });
      return;
    }
    
    let loginExpires = window.localStorage.getItem("login_expires");

    if(loginExpires >= Date.now()){
      next();
    }else{
      next({ 'name': 'Login'});
    }
  } else {
    next();
  }
});


export default router
