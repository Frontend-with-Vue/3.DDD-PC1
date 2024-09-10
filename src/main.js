import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
/*Import all prime vue components*/
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import Card from "primevue/card";

const app = createApp(App);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-toast', Toast);
app.component('pv-card', Card);

app.mount('#app');
