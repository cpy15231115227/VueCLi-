<template>
  <div>
    <form class="for">
      <div class="form-group">
        <label for="exampleInputEmail1">名称</label>
        <input 
          type="email" 
          class="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" placeholder="Enter email"
          v-model="formData.name"
        >
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">性别</label>
        <input type="radio" value="男" v-model="formData.gender"> 男
        <input type="radio" value="女" v-model="formData.gender"> 女
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">定位</label>
        <select v-model="formData.type">
          <option value="刺客">刺客</option>
          <option value="法师">法师</option>
          <option value="战士">战士</option>
          <option value="辅助">辅助</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">简介</label>
        <textarea cols="30" rows="10" style="resize:none;" v-model="formData.bio"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">提交</button>
    </form>
  </div>
</template>

<script>
// 加载引入 axios
// 哪里需要就在哪里加载
import axios from 'axios'

export default {
  data () {
    return {
      formData: {
        name: '',
        gender: '',
        type: '',
        bio: ''
      }
    }
  },

  methods: {
    handleSubmit () {
      if (!window.confirm('确定添加？')){
        return
      }
      // console.log(this.formData) // 输出 测试下

      axios({
        method: 'POST',
        url:'http://localhost:3000/heros',
        data: this.formData  // 请求体 ，发送请求，携带的数据放到 data
      }).then(() => {
        // console.log(res.data) // 输出 测试下

        // 跳转到指定路径
        // VueRouter 提供的 API，专门用于 JavaScript 导航
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
.for {
  padding: 10px
}
</style>
