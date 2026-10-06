import App from '@/App.vue';
import { router } from '@/router/index.ts';
import { pinia } from '@/stores/index.ts';
import { createApp } from 'vue';

createApp(App).use(router).use(pinia).mount('#app');
