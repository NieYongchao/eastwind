<template>
  <div class="userinfo">
    <h1>个人信息</h1>
    <button class="btn" @click="$router.back()">返回</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .userinfo {
    width: 100%;
    height: 50px;
    background-color: #fff;
  }
  .btn {
    width: 60px;
    height: 30px;
  }
</style>