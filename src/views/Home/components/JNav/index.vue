<template>
  <van-config-provider :theme-vars="themeVars">
    <div ref="van-tabs-container">
      <van-sticky :container="container">
        <van-tabs
            v-model:active="active"
            class="JNav"
            :swipeable="true"
            @change="onChange"
            :container="container"
        >
          <van-tab
              v-for="item in tabs"
              :key="item.category_id"
              :title="item.category_name"
              :to="item.source_key"
              class="tab-list-content"
          />
        </van-tabs>
      </van-sticky>
    </div>
  </van-config-provider>
</template>

<script>
import {Tab, Tabs, Sticky} from 'vant';
import {ref} from "vue";
import { useRoute } from 'vue-router';

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Sticky.name]: Sticky,
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          category_name: '综合',
          category_id: 1,
          source_key: "recommended"
        },
        {
          category_name: '关注',
          category_id: 2,
          source_key: "following"
        },
        {
          category_name: '热榜',
          category_id: 3,
        },
        {
          category_name: '后端',
          category_id: 4,
        },
        {
          category_name: '前端',
          category_id: 5,
        },
        {
          category_name: 'Android',
          category_id: 6,
        },
        {
          category_name: 'iOS',
          category_id: 7,
        },
        {
          category_name: '人工智能',
          category_id: 8,
        },
        {
          category_name: '开发工具',
          category_id: 9,
        },
        {
          category_name: '代码人生',
          category_id: 10,
        },
        {
          category_name: '阅读',
          category_id: 11,
        },
      ]
    }
  },
  setup: () => {
    const themeVars = {
      tabsBottomBarColor: '#1e80ff'
    };
    const container = ref(null);
    return {
      themeVars,
      container,
    };
  },
  mounted() {
    const route = useRoute();
    this.tabs.forEach((item, index) => {
      if (route.path.indexOf(item.source_key) > 0) {
        this.active = index;
      }
    })
  },
  methods: {
    onChange() {
      this.$emit('getContainerList', [
        {id: 1, title: 'abc', content: 'dasdas'},
        {id: 2, title: 'abc', content: 'dasdas'},
        {id: 3, title: 'abc', content: 'dasdas'},
        {id: 4, title: 'abc', content: 'dasdas'},
        {id: 5, title: 'abc', content: 'dasdas'},
        {id: 6, title: 'abc', content: 'dasdas'},
      ])
    }
  }
}
</script>

<style>
.tab-list-content {
  margin-top: 10px;
}
</style>
