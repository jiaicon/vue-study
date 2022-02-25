<template>
  <van-nav-bar>
    <template #left>
      <van-icon name="arrow-left" size="18" v-on:click="goBack" />
    </template>
    <template #title>
      <van-search placeholder="搜索稀土掘金" disabled />
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
  },
  methods: {
    goBack() {
      this.$router.go(-1)
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
