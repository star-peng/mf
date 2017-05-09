<template>
<div class="block">
运营状态：<el-select class='se' v-model="value0" placeholder="请选择">
    <el-option
      v-for="item in option0"
      :key="item.value0"
      :label="item.label0"
      :value="item.value0">
    </el-option>
  </el-select>

车辆状态：<el-select class='se' v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in options1"
      :key="item.value1"
      :label="item.label1"
      :value="item.value1">
    </el-option>
  </el-select>

在线状态：<el-select class='se' v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value2"
      :label="item.label2"
      :value="item.value2">
    </el-option>
  </el-select>

    <span class="demonstration">入库时间：</span>
    <el-date-picker class='ri'
      v-model="value3"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <span class="demonstration">至</span>
    <el-date-picker class='ri'
      v-model="value4"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>

    是否已装入电池：<el-select class='se' v-model="value5" placeholder="请选择">
    <el-option
      v-for="item in options5"
      :key="item.value5"
      :label="item.label5"
      :value="item.value5">
    </el-option>
  </el-select>
  模糊搜索：<el-input  class='ints' placeholder="请输入内容"></el-input>
  <span class="wrapper">
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span>


  <template>
  <div class="bi">
  <el-table
    :data="tableData0"
    border
    style="width: 100%">
    <el-table-column
      prop="totalCount"
      label="共计">
    </el-table-column>
    <el-table-column
      prop="allOperationCount"
      label="运营车辆">
    </el-table-column>
    <el-table-column
      prop="inOperationCount"
      label="待出库">
    </el-table-column>
    <el-table-column
      prop="inReserveCount"
      label="已预订">
    </el-table-column>
    <el-table-column
      prop="inRepairCount"
      label="已出租">
    </el-table-column>
     <el-table-column
      prop="inRunningCount"
      label="维护中">
    </el-table-column>
    <el-table-column
      prop="nonOperationalCount"
      label="非运营">
    </el-table-column>
    <el-table-column
      prop="notInStorageCount"
      label="未入库">
    </el-table-column>
    <el-table-column
      prop="inStorageCount"
      label="库存中">
    </el-table-column>
    <el-table-column
      prop="waitOnlineCount"
      label="待上线">
    </el-table-column>
    <el-table-column
      prop="backRepairCount"
      label="返修中">
    </el-table-column>
    <el-table-column
      prop="isScrapCount"
      label="已报废">
    </el-table-column>
    <el-table-column
      prop="inDownlineCount"
      label="已下线">
    </el-table-column>
     <el-table-column
      prop="isLoseCount"
      label="已丢失">
    </el-table-column>
  </el-table>
  </div>
</template>

<template>
<div class="bis">
  <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      prop="code"
      label="车牌号"
      width='110'>
    </el-table-column>
    <el-table-column
      prop="state"
      label="运营状态"
      width='98'>
    </el-table-column>
    <el-table-column
      prop="boxCode"
      label="车辆终端编号"
      width='120'>
    </el-table-column>

        <el-table-column
      prop="batteryNo"
      label="电池编号"
      width='110'>
    </el-table-column>
        <el-table-column
      prop="battCode"
      label="电池终端编号"
      width='130'>
    </el-table-column>
        <el-table-column
      prop="margin"
      label="电量"
      width='60'>
    </el-table-column>
        <el-table-column
      prop="localCity"
      label="车辆位置"
      width='300'>
    </el-table-column>
        <el-table-column
      prop="batteryState"
      label="电机状态"
      width='60'>
    </el-table-column>
        <el-table-column
      prop="initInStoreTime"
      label="车辆入库时间">
    </el-table-column>
        <el-table-column
      prop="address"
      label="操作">
      <template scope="scope">
  <el-select v-model="values" placeholder="请选择">
    <el-option
      v-for="item in optionss"
      :key="item.values"
      :label="item.labels"
      :value="item.values">
    </el-option>
  </el-select>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<div class="foot">
  <el-pagination
    layout="prev, pager, next"
    :total="40">
  </el-pagination>
</div>

</div>



  
</template>

<script>
  export default {
    data() {
      return {
        tableData0:[],
         tableData1: [],
        option0: [{
          value0: '0',
          label0: '全部'
        }, {
          value0: '1',
          label0: '运营中'
        }, {
          value0: '2',
          label0: '非运营'
        }],
        options1: [{
          value1: '0',
          label1: '全部'
        }, {
          value1: '1',
          label1: '未入库'
        }, {
          value1: '2',
          label1: '库存中'
        }, {
          value1: '3',
          label1: '待上线'
        }, {
          value1: '4',
          label1: '待出租'
        }, {
          value1: '5',
          label1: '已预订'
        }, {
          value1: '6',
          label1: '已出租'
        }, {
          value1: '7',
          label1: '维护中'
        }, {
          value1: '8',
          label1: '返修中'
        }, {
          value1: '9',
          label1: '已报废'
        }, {
          value1: '10',
          label1: '已下线'
        }, {
          value1: '11',
          label1: '已暂时丢失'
        }],
        options2: [{
          value2: '0',
          label2: '全部'
        }, {
          value2: '1',
          label2: '在线'
        }, {
          value2: '2',
          label2: '离线'
        }],
        options5: [{
          value5: '0',
          label5: '全部'
        }, {
          value5: '1',
          label5: '是'
        }, {
          value5: '2',
          label5: '否'
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
        optionss: [{
          values: '选项1',
          labels: '黄金糕'
        }, {
          values: '选项2',
          labels: '双皮奶'
        }, {
          values: '选项3',
          labels: '蚵仔煎'
        }, {
          values: '选项4',
          labels: '龙须面'
        }, {
          values: '选项5',
          labels: '北京烤鸭'
        }],
        values: '',

        value0: '',
        value1: '',
        value2:'',
        value3:'',
        value4:'',
        value5:'',

      }
    },
    mounted(){
      var json={
    "allOperationCount":335,
    "authorityList":[
        {
            "id":1,
            "name":"查询"
        }
    ],
    "backRepairCount":0,
    "code":0,
    "inDownlineCount":0,
    "inOperationCount":227,
    "inRepairCount":0,
    "inReserveCount":0,
    "inRunningCount":0,
    "inStorageCount":0,
    "isLoseCount":0,
    "isScrapCount":0,
    "message":"成功获取车辆报表",
    "nonOperationalCount":0,
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
            "hasBattery":"",
            "onlineState":"",
            "pageNo":"1",
            "pageSize":"10",
            "researchWord":"",
            "resourceId":"8",
            "startTime":"",
            "state":"",
            "userId":"24",
            "yunyingState":"1"
        },
        "prePage":1,
        "result":[
            {
                "batteryNo":"B00000705",
                "batteryState":1,
                "code":"106499074",
                "initInStoreTime":"2017-05-02 00:10:09",
                "isOnline":1,
                "localCity":"",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000736",
                "batteryState":1,
                "code":"106499097",
                "initInStoreTime":"2017-05-02 00:12:12",
                "isOnline":1,
                "localCity":"",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000676",
                "batteryState":1,
                "code":"000000161",
                "initInStoreTime":"2017-04-03 23:49:19",
                "isOnline":1,
                "localCity":"安徽省芜湖市无为县无城镇鸿运花园",
                "margin":0.8,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000733",
                "batteryState":1,
                "code":"000000135",
                "initInStoreTime":"2017-03-28 23:11:55",
                "isOnline":1,
                "localCity":"安徽省芜湖市无为县无城镇铁山西路",
                "margin":0.4,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000058",
                "batteryState":1,
                "code":"000000088",
                "initInStoreTime":"2017-03-06 03:54:34",
                "isOnline":1,
                "localCity":"北京市朝阳区望京街道阜通东大街",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000391",
                "batteryState":1,
                "code":"000000246",
                "initInStoreTime":"2017-03-26 08:47:33",
                "isOnline":1,
                "localCity":"安徽省芜湖市无为县无城镇畔庄小区",
                "margin":0.8,
                "motorLockState":1,
                "state":5,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000551",
                "batteryState":1,
                "code":"106499198",
                "initInStoreTime":"2017-05-02 00:09:41",
                "isOnline":1,
                "localCity":"",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000700",
                "batteryState":1,
                "code":"000000402",
                "initInStoreTime":"2017-04-09 11:39:32",
                "isOnline":1,
                "localCity":"",
                "margin":0.9,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000805",
                "batteryState":1,
                "code":"000000400",
                "initInStoreTime":"2017-04-05 14:20:00",
                "isOnline":1,
                "localCity":"安徽省芜湖市无为县无城镇御景苑",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            },
            {
                "batteryNo":"B00000701",
                "batteryState":1,
                "code":"106499120",
                "initInStoreTime":"2017-05-02 00:37:37",
                "isOnline":1,
                "localCity":"",
                "margin":1,
                "motorLockState":1,
                "state":4,
                "updateTime":"2017-05-02 11:25:47"
            }
        ],
        "startRow":1,
        "totalItems":335,
        "totalPages":34
    },
    "toBeOutOfTheLiberyCont":0,
    "totalCount":335, 
    "waitOnlineCount":0
};
console.log(json.page.result);

this.tableData1=json.page.result;
this.tableData0.push(json)
console.log(this.tableData0)


    }
  }
</script>
<style lang="scss">

  .block{
    margin-top: 20px;
  }
 .se{
  width: 92px;
 }
 .ri{
  width: 80px
 }
 .ints{
  width: 130px
 }
 .ca{
  margin-left: 40px;
 }
 .bi{
  margin-top: 20px;
 }
  .bis{
  margin-top: 20px;

 }

.foot{
  margin-top: 40px;
  float: right;
}
</style>
