<template>
<div class="block">
运营状态：<el-select class='se' v-model="value0" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
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

  模糊搜索：<el-input v-model="input" class='int' placeholder="姓名/手机号/发送人员"></el-input>
  <span class="wrapper">
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span>


  <template>
  <div class="bi">
  <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="totalCount"
      label="共计">
    </el-table-column>
    <el-table-column
      prop="allOperationCount"
      label="运营中">
    </el-table-column>
    <el-table-column
      prop="inUsingCount"
      label="使用中">
    </el-table-column>
    <el-table-column
      prop="isLoseCount"
      label="暂时丢失">
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
      prop="address"
      label="待充电">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已充满">
    </el-table-column>
    <el-table-column
      prop="inCollarCount"
      label="领用中">
    </el-table-column>
    <el-table-column
      prop="inRecyclingCount"
      label="回收中">
    </el-table-column>
    <el-table-column
      prop="inRepairCount"
      label="维修中">
    </el-table-column>
    <el-table-column
      prop="isScrapCount"
      label="已报废">
    </el-table-column>
  </el-table>
  </div>
</template>
  <el-select v-model="values" class='qxx' placeholder="请选择">
    <el-option
      v-for="item in optionss"
      :key="item.values"
      :label="item.labels"
      :value="item.values">
    </el-option>
  </el-select>
<template>
<div class="bis">
  <el-table
    :data="tableData1"
    border>
    <el-table-column
      prop="code"
      label="电池编号">
    </el-table-column>
    <el-table-column
      prop="state"
      label="运营状态">
    </el-table-column>
    <el-table-column
      prop="battCode"
      label="电池终端编号">
    </el-table-column>
        <el-table-column
      prop="isOnline"
      label="在线状态">
    </el-table-column>
        <el-table-column
      prop="margin"
      label="电量">
    </el-table-column>
        <el-table-column
      prop="updateTime"
      label="上报时间">
    </el-table-column>
        <el-table-column
      prop="gpsName"
      label="电池位置">
    </el-table-column>
        <el-table-column
      prop="inStoreUserName"
      label="入库人员">
    </el-table-column>
        <el-table-column
      prop="ass"
      label="操作">
      <template scope="scope">
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
        options: [{
          value: '选项1',
          label: '黄金'
        }, {
          value: '选项2',
          label: '双皮'
        }, {
          value: '选项3',
          label: '蚵仔'
        }],
        options1: [{
          value1: '选项1',
          label1: '黄金'
        }, {
          value1: '选项2',
          label1: '双皮'
        }, {
          value1: '选项3',
          label1: '蚵仔'
        }, {
          value1: '选项4',
          label1: '龙须'
        }, {
          value1: '选项5',
          label1: '北京'
        }],
        options2: [{
          value2: '选项1',
          label2: '黄金'
        }, {
          value2: '选项2',
          label2: '双皮'
        }, {
          value2: '选项3',
          label2: '蚵仔'
        }, {
          value2: '选项4',
          label2: '龙须'
        }, {
          value2: '选项5',
          label2: '北京'
        }],
        options5: [{
          value5: '选项1',
          label5: '黄金'
        }, {
          value5: '选项2',
          label5: '双皮'
        }, {
          value5: '选项3',
          label5: '蚵仔'
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
        tableData: [],
         tableData1: [],
        optionss: [{
          values: '选项1',
          labels: '电池日志'
        }],
        values: '',

        value0: '',
        value1: '',
        value2:'',
        value3:'',
        value4:'',
        value5:'',
         input: ''

      }
    },
    mounted(){
      var json={"allOperationCount":363,"authorityList":[{"id":1,"name":"查询"}],"code":0,"inCollarCount":1,"inRecyclingCount":1,"inRepairCount":0,"inStorageCount":364,"inUsingCount":363,"isLoseCount":0,"isScrapCount":0,"message":"成功获取电池报表","nonOperationalCount":440,"notInStorageCount":23,"page":{"endRow":10,"firstPage":true,"hasNextPage":true,"hasPrePage":false,"lastPage":false,"nextPage":2,"offset":0,"orderBySetted":false,"pageNo":1,"pageSize":10,"pd":{"endTime":"","onlineState":"","pageNo":"1","pageSize":"10","researchWord":"","resourceId":"8","startTime":"","state":"","userId":"24","yunyingState":""},"prePage":1,"result":[{"battCode":"695502000448766","code":"B00000817","id":"826","inStoreUserName":"周晓松","isOnline":1,"margin":0.6,"state":5,"updateTime":"2017-04-28 21:05:49","useNum":10},{"battCode":"695502000446786","code":"B00000876","id":"831","inStoreUserName":"周晓松","isOnline":1,"margin":0.6,"state":5,"updateTime":"2017-04-28 21:05:45","useNum":11},{"battCode":"695502000447701","code":"B00000662","id":"460","inStoreUserName":"周晓松","isOnline":1,"margin":0.4,"state":5,"updateTime":"2017-04-28 21:05:43","useNum":13},{"battCode":"695502000448568","code":"B00000721","id":"403","inStoreUserName":"周晓松","isOnline":1,"margin":0.4,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":13},{"battCode":"695502000444641","code":"B00000343","id":"584","inStoreUserName":"周晓松","isOnline":1,"margin":0.5,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":14},{"battCode":"695502000444849","code":"B00000399","id":"553","inStoreUserName":"周晓松","isOnline":1,"margin":0.4,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":7},{"battCode":"695502000445275","code":"B00000456","id":"662","inStoreUserName":"周晓松","isOnline":1,"margin":0.5,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":8},{"battCode":"695502000444658","code":"B00000351","id":"555","inStoreUserName":"周晓松","isOnline":1,"margin":0.8,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":14},{"battCode":"695502000438700","code":"B00000096","id":"178","inStoreUserName":"郑州运输地勤1","isOnline":1,"margin":0,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":0},{"battCode":"695502000447420","code":"B00000699","id":"658","inStoreUserName":"周晓松","isOnline":1,"margin":0.3,"state":5,"updateTime":"2017-04-28 21:05:37","useNum":8}],"startRow":1,"totalItems":803,"totalPages":81},"toBeIssuedCount":51,"totalCount":803
    };
      this.tableData1=json.page.result;
      this.tableData.push(json)
    }
  }
</script>
<style lang="scss">
.clearfix:after{
  display:block;
  content: '';
  clear:both; 
}
  .block{
    margin-top: 20px;
  }
 .se{
  width: 92px;
 }
 .ri{
  width: 80px
 }
 .int{
  width: 240px
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
.qxx{
  width: 120px;
position:absolite;
top:100px;
left:1460px;
z-index:100;
}
.foot{
  margin-top: 40px;
  float: right;
}
</style>
