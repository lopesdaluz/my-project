import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// /importerar från vue, från npm paketet och anropar creae app. Här behöver vi inte ändra i. Den använder vue filen app.vue och säger här finns vår applikation. Det är i app.vue som allting börjar.
