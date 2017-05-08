<template>
<div class="top">
模糊搜索：<el-input v-model="input" class='int' placeholder="电话编号"></el-input>
<span class="demonstration">选择时间：</span>
    <el-date-picker class='ri'
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <span class="demonstration">至</span>
    <el-date-picker class='ri'
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>

  <span class="wrapper">
    <el-button  type="primary">查询</el-button>
    <el-button  type="primary">导出</el-button>
  </span>
<div class="mr">显示1到50总数2.889条</div>
  <template>
  <div class="bo">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="日志ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="电池ID"
      width="186">
    </el-table-column>
    <el-table-column
      prop="name"
      label="操作人"
      width="100">
    </el-table-column>
        <el-table-column
      prop="name"
      label="角色"
      width="100">
    </el-table-column>
        <el-table-column
      prop="name"
      label="操作日志"
      width="700">
    </el-table-column>
     <el-table-column
      prop="name"
      label="入库时间"
      width="450">
    </el-table-column>
  </el-table>
  </div>
<div class="foot">
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
</template>

</div>
</template>
<script type="text/javascript">
	 export default {
    data() {
      return {
      	 tableData: [{
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }],
         pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        value2:'',
    }
  }
}

</script>
<style lang="scss">
.top{
	margin-top:20px;
}
.mr{
  margin-top: 60px;
  float: right;
}
.foot{
  float: right;
}

</style>