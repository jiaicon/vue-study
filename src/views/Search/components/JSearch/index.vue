<template>
  <van-tabs v-model:active="active" class="JSearch">
    <van-tab
        v-for="item in tabs"
        :key="item.category_id"
        :title="item.category_name"
        class="tab-list-content"
    >{{item.category_name}}</van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
import { ref } from 'vue';

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
  },
  data: () => {
    return {
      tabs: [
        {
          category_name : '综合',
          category_id: 1,
        },
        {
          category_name : '文章',
          category_id: 2,
        },
        {
          category_name : '课程',
          category_id: 3,
        },
        {
          category_name : '标签',
          category_id: 4,
        },
        {
          category_name : '用户',
          category_id: 5,
        },
      ]
    }
  },
  setup() {
    const active = ref(0);
    return { active };
  },
}
</script>

<style>
.JSearch .van-tabs__line {
  background-color: #1e80ff;
}
.tab-list-content{
  margin-top:10px;
}
</style>
