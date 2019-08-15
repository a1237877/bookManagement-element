<template>
    <div class="container">
        <div class="title">图书捐赠</div>
        <div class="form-content">
            <div class="formItem">
                <span class="input-title">图书名称</span>
                <el-input v-model="input" placeholder="请输入图书名称"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">ISBN</span>
                <el-input v-model="input" placeholder="图书背面右下角条纹码处"></el-input>
            </div>
            <div class="formItem">
                <span class="input-title">书目类别</span>
                <span><el-col :span="6">
                    <el-autocomplete class="inline-input" v-model="state" 
                    :fetch-suggestions="querySearch" placeholder="请选择" @select="handleSelect"></el-autocomplete>
                </el-col></span>    
            </div>
            <div class="formItem">
                <span class="input-title">捐赠人</span>
                <el-input v-model="input" placeholder="请输入"></el-input>
            </div> 
            <div class="formItem">
                <span class="input-title">借阅时间</span>
                <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
            </div> 
            <div class="formItem">
                <span class="input-title">状态</span>
                <el-radio-group v-model="radio">
                <el-radio :label="3">待入库</el-radio>
                <el-radio :label="6">在库</el-radio>
                <el-radio :label="9">外借</el-radio>
                <el-radio :label="12">遗失</el-radio>
            </el-radio-group>
            </div>
        </div>
        <p class="remind">提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架上</p>
        <el-button type="primary" size="small">提交</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choose: [],
            state: "",
            input: "",
            value: "",
            radio: 4
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
.remind{
    margin: 20px 15px;
    color: #f37327;
    font-size: 12px;
    font-weight: 400;
}
</style>