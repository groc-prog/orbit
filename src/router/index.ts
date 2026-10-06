import DefaultView from '@/views/DefaultView.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [{ path: '/', component: DefaultView }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
