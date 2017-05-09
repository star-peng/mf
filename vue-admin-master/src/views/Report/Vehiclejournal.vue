<template>
<div class="top">
模糊搜索：<el-input  class='int' placeholder="车牌号"></el-input>
<span class="demonstration">入库时间：</span>
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
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span>
<div class="mr">显示1到6总数6条</div>
  <template>
  <div class="bo">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="bikeId"
      label="车量ID"
      width="90">
    </el-table-column>
    <el-table-column
      prop="bikeCode"
      label="车牌号"
      width="150">
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
      prop="isOnline"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="logContext"
      label="操作日志"
      width="642">
    </el-table-column>
     <el-table-column
      prop="createTime"
      label="入库时间"
      width="400">
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
            "endTime":"2017-04-15",
            "pageNo":"1",
            "pageSize":"10",
            "researchWord":"",
            "resourceId":"8",
            "startTime":"2017-02-10",
            "userId":"24"
        },
        "prePage":1,
        "result":[
            {
                "bikeCode":"666666661",
                "createTime":"2017-04-15 16:56:43",
                "isOnline":0,
                "logContext":"新车【666666661】装配了电池【B11111111】后，由地勤【张三】账号:15111111111上线.",
                "operateAction":"【新车上线】",
                "operateRole":"地勤人员"
            },
            {
                "bikeCode":"666666661",
                "bikeId":860,
                "createTime":"2017-04-15 16:55:31",
                "isOnline":0,
                "logContext":"车辆【666666661】由地勤【张三】账号:15111111111领取",
                "operateAction":"【新车领取】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            },
            {
                "bikeCode":"666666661",
                "bikeId":860,
                "createTime":"2017-04-15 16:55:20",
                "isOnline":0,
                "logContext":"新车：【987654321】由地勤【张三】账号:15111111111入库到：【昌平电站仓库】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"张三"
            },
            {
                "bikeCode":"a00000013",
                "bikeId":272,
                "createTime":"2017-04-07 15:03:00",
                "isOnline":0,
                "logContext":"车辆【a00000013】由地勤【小马甲1】账号:13000000001领取",
                "operateAction":"【新车领取】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"a00000013",
                "bikeId":272,
                "createTime":"2017-04-07 15:02:49",
                "isOnline":0,
                "logContext":"新车：【a00000000009】由地勤【小马甲1】账号:13000000001入库到：【ffff】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"a00000012",
                "bikeId":271,
                "createTime":"2017-04-07 15:02:43",
                "isOnline":0,
                "logContext":"新车：【a00000000008】由地勤【小马甲1】账号:13000000001入库到：【ffff】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"a00000011",
                "bikeId":270,
                "createTime":"2017-04-07 15:02:37",
                "isOnline":0,
                "logContext":"新车：【a00000000007】由地勤【小马甲1】账号:13000000001入库到：【ffff】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"a00000010",
                "bikeId":269,
                "createTime":"2017-04-07 15:02:30",
                "isOnline":0,
                "logContext":"新车：【a00000000006】由地勤【小马甲1】账号:13000000001入库到：【ffff】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"a00000009",
                "bikeId":268,
                "createTime":"2017-04-07 15:02:22",
                "isOnline":0,
                "logContext":"新车：【a00000000005】由地勤【小马甲1】账号:13000000001入库到：【ffff】仓库中.",
                "operateAction":"【新车入库】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            },
            {
                "bikeCode":"000000101",
                "bikeId":106,
                "createTime":"2017-04-07 11:07:04",
                "logContext":"车辆【000000101】由地勤【小马甲1】删除,退回到仓库【ffff】中",
                "operateAction":"【新车退回库中】",
                "operateRole":"地勤人员",
                "operateUser":"小马甲1"
            }
        ],
        "startRow":1,
        "totalItems":84,
        "totalPages":9
    }
};
       // alert(json.authorityList[0].id); //获取ID

        this.tableData=json.page.result; //这是赋值给那个tabledata

     
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