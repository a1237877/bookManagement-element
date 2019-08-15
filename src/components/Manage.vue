<template>
  <div class="container">
    <div class="title">图书信息</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部图书" name="first">
        <!-- 搜索框 -->
        <div class="search">
          <div class="inputItem">
            <span class="itemTitle">图书名称：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">作者名称：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">ISBN号：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">图书分类：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">出版社：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
        </div>
        <!-- 表单部分 -->
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="ISBN" label="ISBN号" width="90"></el-table-column>
            <el-table-column prop="type" label="图书类型" width="90"></el-table-column>
            <el-table-column prop="name" label="图书名称" width="90"></el-table-column>
            <el-table-column prop="author" label="作者名称" width="90"></el-table-column>
            <el-table-column prop="publisher" label="出版社" width="90"></el-table-column>
            <el-table-column prop="date" label="日期" width="90"></el-table-column>
            <el-table-column prop="total" label="总数量" width="90"></el-table-column>
            <el-table-column prop="current" label="在馆数量" width="90"></el-table-column>
            <el-table-column prop="price" label="价格" width="90"></el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleRead(scope.$index, scope.row)">查看</el-button>
                <el-button size="mini" type="primary" @click="handleBorrow(scope.$index, scope.row)">借阅</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 底部分页 -->
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="借阅信息" name="second">
        <div class="search">
          <div class="inputItem">
            <span class="itemTitle">图书名称：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">ISBN号：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
          <div class="inputItem">
            <span class="itemTitle">出版社：</span>
            <span>
              <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
          </div>
        </div>
        <div class="table">
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="number" label="借阅编号" width="110"></el-table-column>
            <el-table-column prop="ISBN" label="ISBN号" width="110"></el-table-column>
            <el-table-column prop="name" label="图书名称" width="110"></el-table-column>
            <el-table-column prop="type" label="图书类型" width="110"></el-table-column>
            <el-table-column prop="ID" label="读者证件号" width="110"></el-table-column>
            <el-table-column prop="author" label="读者名称" width="110"></el-table-column>
            <el-table-column prop="date" label="借阅日期" width="110"></el-table-column>
            <el-table-column prop="return" label="归还日期" width="110"></el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="handleRead(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      input: "",
      tableData: [
        {
          ISBN: "00000",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00001",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00002",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00003",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00004",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00005",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00006",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        },
        {
          ISBN: "00007",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publisher: "某出版社",
          date: "2018-10-01",
          total: "1000",
          current: "300",
          price: "22.0"
        }
      ],
      tableData2: [
        {
            number: "0",
            ISBN: "10000",
            name: "软件工程导论",
            type: "计算机",
            ID: "123450",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
        {
            number: "1",
            ISBN: "10001",
            name: "软件工程导论",
            type: "计算机",
            ID: "123451",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
        {
            number: "2",
            ISBN: "10002",
            name: "软件工程导论",
            type: "计算机",
            ID: "123452",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
        {
            number: "3",
            ISBN: "10003",
            name: "软件工程导论",
            type: "计算机",
            ID: "123453",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
        {
            number: "4",
            ISBN: "10004",
            name: "软件工程导论",
            type: "计算机",
            ID: "123454",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
        {
            number: "5",
            ISBN: "10005",
            name: "软件工程导论",
            type: "计算机",
            ID: "123455",
            author: "淘小宝",
            date: "2018-10-01",
            return: "2019-10-01"
        },
      ],
      currentPage: 1
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleRead(val){},
    handleBorrow(val){}
  }
};
</script>

<style scoped>
.container {
  flex: 1;
  width: 79%;
  margin-left: 243px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #fff;
}
.title {
  font-weight: 500;
  font-size: 18px;
  float: left;
}
.el-tabs {
  margin-top: 30px;
  box-sizing: border-box;
  width: 100%;
}

/* search */
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.itemTitle {
  height: 40px;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 10px;
}
.el-input {
  width: 200px;
  height: 40px;
  border-radius: 3px;
  margin-top: 10px;
  margin-right: 15px;
}

/* table */
.el-table {
  padding-left: 20px;
}
.el-table__header {
  background: grey;
}
.el-table td,
.el-table th {
  text-align: center !important;
}
/* 分页 */
.el-pagination {
  float: right;
  margin-top: 20px;
}
.btn-prev {
  border: 1px solid #dcdfe6;
}
.el-pager li.active + li {
  border: 1px solid #dcdfe6;
}
</style>
