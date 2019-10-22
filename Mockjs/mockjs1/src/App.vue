<template>
  <div id="app">

    <div class="btn">
      <el-button size="small" type="primary" @click="dialogFormVisible = true">增加</el-button>
      <el-button size="small" type="primary">编辑</el-button>
      <el-button size="small" type="primary">查看</el-button>
      <el-button size="small" type="danger" @click="deleteList">删除</el-button>
    </div>



    <!--弹出新增模态框-->

    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="numberValidateForm">
        <el-form-item
                label="姓名"
                prop="name"
                :rules="[
                { required: true, message: '不能为空'}
                ]"
        >
          <el-input type="name" v-model.number="form.name" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item
                label="地址"
                prop="address"
                :rules="[
                { required: true, message: '不能为空'}
                ]"
        >
          <el-input type="address" v-model.number="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addForm('numberValidateForm')">确 定</el-button>
      </div>
    </el-dialog>





    <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            ref="multipleTable"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @select="currentIndex"
            @select-all="allIndex"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              label="日期"
              width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
              prop="author_name"
              label="姓名"
              width="120">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
      </el-table-column>
    </el-table>


    <el-pagination
            style="margin-top: 20px;"
            background
            layout="prev, pager, next"
            :page-size="pagesize"
            @current-change="handleCurrentChange"
            :total="totalNum"
            >
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios';
  import "./Mock/mock";
export default {
  data() {
    return {
      totalNum: 0,    //数据总条数
      currentPage: 1,   //第几页
      pagesize: 4,    //    每页的数据
      tableData: [],  // 表格数据
      multipleSelection: [],
      id: [],

      form: {
        name: '',
        address: ''
      },
      formLabelWidth: '120px',

      dialogFormVisible: false,
    }
  },
  name: 'app',
  components: {

  },
  methods: {

    //新增
    addForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('insert',{id: this.totalNum+1, date: this.fmtDate(new Date()), author_name: this.form.name, address: this.form.address})
                  .then(res => {
                    this.tableData = res.data;
                    this.dialogFormVisible = false
                  })
          this.$refs['numberValidateForm'].resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },


    // add() {
    //   axios.post('insert',{id: this.totalNum+1, date: this.fmtDate(new Date()), author_name: this.form.name, address: this.form.address})
    //           .then(res => {
    //             this.tableData = res.data;
    //             this.dialogFormVisible = false
    //           })
    // },


    // 删除列表数据
    deleteList(){
      let tid = this.id
      axios.post('delete',{id: tid}).then(res=>{
        // console.log(res);
        this.tableData = res.data;
      })

    },

    fmtDate(obj){   //事件转换为yyyy-mm-dd
      let date =  new Date(obj);
      let y = 1900+date.getYear();
      let m = "0"+(date.getMonth()+1);
      let d = "0"+date.getDate();
      return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
    },

    currentIndex(row) {   //单选的id值存放在数组中
      this.id = [];  //数组先清空
      for (let i = 0; i < row.length; i++) {
        // console.log(row[i].id);
        if (this.id.indexOf(row[i].id) == -1 ) {
          this.id.push(row[i].id)
        }
      }
      // console.log(this.id);
      // console.log(selection);
    },
    allIndex(select) {    //全选id获取  存放数组中
      this.id = [];  //数组先清空
      for (let i = 0; i< select.length; i++) {
        if (this.id.indexOf(select[i].id) == -1 ) {
          this.id.push(select[i].id)
        }
      }
      // console.log(this.id);
    },


    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      // console.log(this.currentPage)  //点击第几页
    },



    handleSelectionChange(val) {
      this.multipleSelection = val;
    },


  },
  mounted() {
    axios.get('msg').then(res=>{

      // this.data1 = res.data;
      this.tableData = res.data.articles;
      // console.log(res.data.articles)
    })
  },

  watch: {
    tableData(){    //监听数据变化，删除数据后同时变化数据总数
      this.totalNum = this.tableData.length;
      // console.log(this.totalNum);
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }
  #app {
    background-color: #fff;
    padding: 15px;
    margin: 15px;
    box-shadow: 0px 2px 3px rgba(133,133,133,.3);
  }
  .btn {
    margin-bottom: 20px;
  }
</style>
