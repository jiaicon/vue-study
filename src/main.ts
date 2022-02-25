import { createApp } from 'vue';
import Layout from './layouts/index.vue';
import Vant, { ConfigProvider } from 'vant';
import router from './router';

const app = createApp(Layout);

app
  .use(router)
  .use(Vant)
  .use(ConfigProvider)
  .mount('#app');
