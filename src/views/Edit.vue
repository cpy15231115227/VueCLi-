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

  created () {
    // console.log(this.$route.params.id)
    // 不建议在生命周期中写大量的业务代码，最好都封装成 methods 函数
    // 需要的时候直接调用
    this.loadHero()
  },

  methods: {
    loadHero () {
      const id = this.$route.params.id
      axios({
        method: 'GET',
        url: `http://localhost:3000/heros/${id}`
      }).then(res => {
        // console.log(res.data) 输出 测试下
        this.formData = res.data
      })
    },

    handleSubmit () {
      const id = this.$route.params.id

      if (!window.confirm('确定添加？')){
        return
      }
      // console.log(this.formData) // 输出 测试下
      axios({
        method: 'PATCH',
        url:`http://localhost:3000/heros/${id}`,
        data: this.formData
      }).then(() => {
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
