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

    是否已装入电池：<el-select class='se' v-model="value5" placeholder="请选择">
    <el-option
      v-for="item in options5"
      :key="item.value5"
      :label="item.label5"
      :value="item.value5">
    </el-option>
  </el-select>
  模糊搜索：<el-input v-model="input" class='ints' placeholder="请输入内容"></el-input>
  <span class="wrapper">
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span>


  <template>
  <div class="bi">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="address"
      label="共计">
    </el-table-column>
    <el-table-column
      prop="address"
      label="运营车辆">
    </el-table-column>
    <el-table-column
      prop="address"
      label="待出库">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已预订">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已出租">
    </el-table-column>
     <el-table-column
      prop="address"
      label="维护中">
    </el-table-column>
    <el-table-column
      prop="address"
      label="非运营">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未入库">
    </el-table-column>
    <el-table-column
      prop="address"
      label="库存中">
    </el-table-column>
    <el-table-column
      prop="address"
      label="待上线">
    </el-table-column>
    <el-table-column
      prop="address"
      label="返修中">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已报废">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已下线">
    </el-table-column>
     <el-table-column
      prop="address"
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
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
        <el-table-column
      prop="ass"
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
        tableData: [{
          date: '1',
          name: '4',
          address: 'd'
        }],
         tableData1: [{
          date: 'w',
          name: '4',
          address: 's'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },
        {
          date: '1',
          name: '4',
          address: '6'
        },{
          date: '1',
          name: '4',
          address: '6'
        }
        ,{
          date: '1',
          name: '4',
          address: '6'
        },{
          date: '1',
          name: '4',
          address: '6',
        }],
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
         input: ''

      }
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
  text-align: center;
 }

.foot{
  margin-top: 40px;
  float: right;
}
</style>
