import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ82Y4ZbLWvA0gIWU8gBxKMxUFqKyyrWo",
  authDomain: "freelencepwa.firebaseapp.com",
  projectId: "freelencepwa",
  storageBucket: "freelencepwa.appspot.com",
  messagingSenderId: "992324593466",
  appId: "1:992324593466:web:44cc2fccd51e6d19c0d203",
  measurementId: "G-4585LC3D76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  defaultItens: any[] = [
    {"name":"Maça","price":0.6,"stock":0,"type":"Fruta","imageUrl":"https://feiradoceasa.com.br/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/m/a/maca03_1_1.jpg"},
    {"name":"Cenoura","price":1,"stock":15,"type":"Verdura","imageUrl":"https://hiperideal.vteximg.com.br/arquivos/ids/167688-1000-1000/47058.jpg?v=636615816233100000"},
    {"name":"Banana","price":2.5,"qtd":0,"type":"Fruta","imageUrl":"https://hiperideal.vteximg.com.br/arquivos/ids/171306-1000-1000/12696.jpg?v=636626179776100000","stock":25},
    {"name":"Pimentão","price":7.25,"stock":30,"type":"Verdura","imageUrl":"aa"}]
    
  constructor() {}
}
