<template>
  <body id="login-page">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <br>
      <el-input
        type="text"
        v-model="loginForm.loginName"
        auto-complete="off"
        placeholder="账号"
      ></el-input>
    </el-form-item>
    <br>
    <el-form-item>
      <el-input
        type="password"
        v-model="loginForm.password"
        auto-complete="off"
        placeholder="密码"
      ></el-input>
    </el-form-item>
    <br>
    <el-form-item style="width: 100%">
      <el-row>
        <el-col>
          <el-button
            type="primary"
            style="width: 100%;  border: none"
            @click="login(1)"
          >登录
          </el-button>
        </el-col>
        <el-col>
          <el-button
            type="primary"
            style="width: 100%;  border: none"
            @click="login(2)"
          >管理员登录
          </el-button>
        </el-col>
      </el-row>
    </el-form-item>
    <br>
  </el-form>
  </body>
</template>

<script>
import {userLogin} from '../api/user'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        loginName: '',
        password: '',
      },
      responseResult: [],
    }
  },
  methods: {
    login (type) {
      var _this = this
      userLogin({
        loginName: this.loginForm.loginName,
        password: this.loginForm.password,
      }).then((resp) => {
        console.log("到then的部分")
        let code = resp.data.retcode
        if (code === 'ok') {
          let data = resp.data.data
          let token = data.token
          let user = data.user
          //存储token
          _this.$store.commit('SET_TOKENN', token)
          //存储user，优雅一点的做法是token和user分开获取
          _this.$store.commit('SET_USER', user)
          console.log(_this.$store.state.token)
          var path = this.$route.query.redirect
          if (type === 1) {
            this.$router.replace({path: path === '/' || path === undefined ? '/choose' : path})
          } else if (type === 2) {
            if (_this.$store.state.user.authority === '管理员') {
              this.$router.push({path: '/usermanagement'})
            } else {
              alert('无管理员权限！')
            }
          }
        }
      })
    },
  },
}

</script>

<style scoped>
#login-page {
  background: url("../assets/bg.png") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 250px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

