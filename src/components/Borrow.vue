<template>
  <div class="container">
    <div class="title">图书借阅</div>
    <div class="form-content">
      <div class="formItem">
        <span class="input-title">图书名称</span>
        <span>
          <el-col :span="6">
            <el-autocomplete class="inline-input" v-model="state" 
            :fetch-suggestions="querySearch" placeholder="请选择" @select="handleSelect"></el-autocomplete>
          </el-col>
        </span>
      </div>
      <div class="formItem">
        <span class="input-title">借阅/归还</span>
        <el-radio v-model="radio" label="1">借阅</el-radio>
        <el-radio v-model="radio" label="2">归还</el-radio>
      </div>
      <div class="formItem">
        <span class="input-title">借阅证</span>
        <el-input v-model="input" placeholder="请输入借阅证号码"></el-input>
      </div>
      <div class="formItem">
        <span class="input-title">借阅时间</span>
        <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <el-button type="primary" size="small">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      state: "",
      radio: "1",
      input: "",
      value: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var books = this.books;
      var results = queryString
        ? books.filter(this.createFilter(queryString))
        : books;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return book => {
        return (
          book.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "史蒂夫·乔布斯传" },
        { value: "大数据供应链" },
        { value: "深度学习" },
        { value: "裂变" },
        { value: "归属感" },
        { value: "沉默的大多数" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.books = this.loadAll();
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>