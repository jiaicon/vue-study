<template>
  <van-nav-bar>
    <template #left>
      <router-link to="/">
        <van-image :src="logo" round />
      </router-link>
    </template>
    <template #title>
      <router-link to="/search">
        <van-search placeholder="搜索稀土掘金" disabled />
      </router-link>
    </template>
    <template #right>
      <van-icon name="sign" size="28" />已签
    </template>
  </van-nav-bar>
</template>

<script>
import { NavBar, Image, Search, Icon } from 'vant';
import logo from '@/assets/logo.svg';

export default {
  components: {
    [NavBar.name]: NavBar,
    [Image.name]: Image,
    [Search.name]: Search,
    [Icon.name]: Icon,
  },
  data: () => {
    return {
      logo: logo,
    }
  }
}
</script>

<style>
.van-search{
  background-color: #f4f4f4;
  padding:0 !important;
}
.van-search__content{
  background:#f4f4f4 !important;
  border-radius:8px !important;
}
</style>
