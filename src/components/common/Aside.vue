<template>
    <div class="aside-content">
        <div class="logo">LOGO</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff" router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">图书管理</span>
      </el-menu-item>
      <el-menu-item index="/borrow">
        <i class="el-icon-menu"></i>
        <span slot="title">图书借阅</span>
      </el-menu-item>
      <el-menu-item index="/recommend">
        <i class="el-icon-menu"></i>
        <span slot="title">图书推荐</span>
      </el-menu-item>
      <el-menu-item index="/contribute">
        <i class="el-icon-menu"></i>
        <span slot="title">图书捐赠</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.aside-content{
  display: block;
  position: absolute;
  width: 243px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  padding-top: 10px;
  
}
.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #3080fe;
    font-weight: 700;
    font-size: 36px;
    background: #fff;
}
.aside-content > ul {
  height: 100%;
}

</style>

