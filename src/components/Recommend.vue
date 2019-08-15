<template>
    <div class="container">
        <div class="title">图书推荐</div>
        <div class="form-content">
            <div class="formItem">
                <span class="input-title">图书名称</span>
                <el-input v-model="input" placeholder="请输入图书名称"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">出版社</span>
                <el-input v-model="input" placeholder="图书出版社"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">作者</span>
                <el-input v-model="input" placeholder="图书作者"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">参考价格</span>
                <el-input v-model="input" placeholder="请输入数字"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">书目类别</span>
                <span><el-col :span="6">
            <el-autocomplete class="inline-input" v-model="state" 
            :fetch-suggestions="querySearch" placeholder="请选择" @select="handleSelect"></el-autocomplete>
          </el-col></span>    
            </div>
            <div class="formItem">
                <span class="input-title">推荐人</span>
                <el-input v-model="input" placeholder="请输入数字"></el-input>
            </div>
            <el-button type="primary" size="small">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            choose: [],
            value: "",
            state: "",
            input: ""
        }
    },
    methods: {
    querySearch(queryString, cb) {
      var chooses = this.chooses;
      var results = queryString
        ? chooses.filter(this.createFilter(queryString))
        : chooses;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return choose => {
        return (
          choose.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "技术领域" },
        { value: "专业领域" },
        { value: "管理沟通" },
        { value: "其他" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
      this.chooses = this.loadAll();
  }
}
</script>

<style scoped>
@import "../assets/index.css";

</style>