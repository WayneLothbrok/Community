<template>
  <div class="SignContainer-inner">
    <el-form ref="SignFormRef" :model="SignForm" class="SignFlow Login-content">
      <el-tabs v-model="sign_type">
        <el-tab-pane label="免密码登录" name="0">
          <el-form-item>
            <el-input placeholder="手机号" v-model="SignForm.phone_number" class="input-with-select">
              <el-select v-model="SignForm.area_code" slot="prepend" placeholder="请选择">
                <el-option v-for="(item,index) in areaCodeData" :label="item.name" :key="index" :value="item.value"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="密码登录" name="1">密码登录</el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SignContainer',
  data () {
    return {
      SignForm: {
        area_code: '',
        phone_number: ''
      },
      sign_type: 0,
      areaCodeData: [
        {name: '中国 +86', value: 86}
      ]
    }
  },
  created () {
    this.SignForm.area_code = this.areaCodeData[0].value
  }
}
</script>

<style scoped>
.SignContainer-inner {
  position: relative;
  overflow: hidden;
}

.Login-content {
  padding: 0 24px 84px;
}

.SignFlow {
  overflow: hidden;
}

.input-with-select .el-select {
  width: 120px;
}
</style>
