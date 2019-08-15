<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">政府管理系统</div>
      <div class="user-info">
        <el-row>
          <el-button type="primary" class="button">反馈</el-button>
          <el-button type="primary" class="button">帮助</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.header-container{
  width: 79%;
  height: 62px;
  position: absolute;
  margin-left: 243px;
  font-size: 22px;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  background-color: #409eff;
}
.header .logo {
  display: block;
  padding: 12px;
  max-width: 180px;
  overflow: hidden;
  color: #fff;
  font-size: 24px;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
}
.user-info {
  position: absolute;
  top: 10px;
  right: 10px;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.button {
  position: relative;
  /* margin-right: 20px; */
}
</style>
