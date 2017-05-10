<template>
<div class="top">
模糊搜索：<el-input  class='int' placeholder="电话编号"></el-input>
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
      prop="logId"
      label="日志ID"
      width="250">
    </el-table-column>
    <el-table-column
      prop="batteryId"
      label="电池ID"
      width="182">
    </el-table-column>
    <el-table-column
      prop="operateUser"
      label="操作人"
      width="100">
    </el-table-column>
        <el-table-column
      prop="operateRole"
      label="角色"
      width="100">
    </el-table-column>
        <el-table-column
      prop="logContext"
      label="操作日志"
      width="700">
    </el-table-column>
     <el-table-column
      prop="createTime"
      label="入库时间"
      width="300">
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
      	 tableData: [],
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
  },
  mounted(){
    var json={
    "authorityList":[
        {
            "id":1,
            "name":"查询"
        }
    ],
    "code":0,
    "message":"成功获取车辆报表",
    "page":{
        "endRow":10,
        "firstPage":true,
        "hasNextPage":true,
        "hasPrePage":false,
        "lastPage":false,
        "nextPage":2,
        "offset":0,
        "orderBySetted":false,
        "pageNo":1,
        "pageSize":10,
        "pd":{
            "endTime":"",
            "pageNo":"1",
            "pageSize":"10",
            "researchWord":"",
            "resourceId":"8",
            "startTime":"",
            "userId":"24"
        },
        "prePage":1,
        "result":[
            {
                "batteryId":106,
                "code":"B00000153",
                "createTime":"2017-04-19 17:32:50",
                "logContext":"电池【B00000153】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72ec24515c629de68187d",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":105,
                "code":"B00000127",
                "createTime":"2017-04-19 17:32:29",
                "logContext":"电池【B00000127】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72ead4515c629de68187b",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":104,
                "code":"B00000186",
                "createTime":"2017-04-19 17:32:11",
                "logContext":"电池【B00000186】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72e9b4515c629de681879",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":103,
                "code":"B00000126",
                "createTime":"2017-04-19 17:31:51",
                "logContext":"电池【B00000126】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72e874515c629de681877",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":101,
                "code":"B00000198",
                "createTime":"2017-04-19 17:26:37",
                "logContext":"电池【B00000198】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72d4d4515785d9a8ae2c5",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":101,
                "code":"B00000198",
                "createTime":"2017-04-19 17:26:16",
                "logContext":"电池【B00000198】已经被初始化为新电池,之前的业务数据全部删除!",
                "logId":"58f72d384515785d9a8ae2c3",
                "operateAction":"【电池初始化数据】",
                "operateRole":"地勤人员"
            },
            {
                "batteryId":859,
                "code":"B22222224",
                "createTime":"2017-04-18 11:03:36",
                "logContext":"电池【B22222224】由地勤【张三】账号：15111111111退回到仓库【昌平电站仓库】中.",
                "logId":"58f5820845158a841b1f51d3",
                "operateAction":"【电池退库】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            },
            {
                "batteryId":857,
                "code":"B22222222",
                "createTime":"2017-04-18 11:03:36",
                "logContext":"电池【B22222222】由地勤【张三】账号：15111111111退回到仓库【昌平电站仓库】中.",
                "logId":"58f5820845158a841b1f51d2",
                "operateAction":"【电池退库】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            },
            {
                "batteryId":856,
                "code":"B22222221",
                "createTime":"2017-04-18 11:03:36",
                "logContext":"电池【B22222221】由地勤【张三】账号：15111111111退回到仓库【昌平电站仓库】中.",
                "logId":"58f5820845158a841b1f51d1",
                "operateAction":"【电池退库】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            },
            {
                "batteryId":860,
                "code":"B22222225",
                "createTime":"2017-04-18 11:03:36",
                "logContext":"电池【B22222225】由地勤【张三】账号：15111111111退回到仓库【昌平电站仓库】中.",
                "logId":"58f5820845158a841b1f51d0",
                "operateAction":"【电池退库】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            }
        ],
        "startRow":1,
        "totalItems":998,
        "totalPages":100
    }
};
  this.tableData=json.page.result;
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