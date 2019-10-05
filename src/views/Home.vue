<template>
  <div>
    <div class="herder">
      <!-- <button type="button" class="btn btn-primary">添加</button> -->
      <!-- router-link 把 class 传给了自己内部封装的 a 标签了 -->
      <router-link class="btn btn-primary" to="/add">添加</router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">名称</th>
          <th scope="col">性别</th>
          <th scope="col">定位</th>
          <th scope="col">简介</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in adb" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.bio }}</td>
          <td>
            <a href="#" @click.prevent="handleDelete(item)">删除</a>
            <router-link :to="'/edit/' + item.id">修改</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        adb:[]
    };
  },

  created(){
      // axios({
      //     method: 'GET',
      //     url: 'http://localhost:3000/heros'
      // }).then(res => {
      //   //   console.log(res.data)
      //   this.adb = res.data
      // })
      this.loadHeros()
  },

  methods: {
    loadHeros () {
      axios({
          method: 'GET',
          url: 'http://localhost:3000/heros'
      }).then(res => {
        //   console.log(res.data)
        this.adb = res.data
      })
    },

    handleDelete(item){
      // 删除提示
      if (!window.confirm('Are you suer?')){
        return
      }

      axios({
        method: 'DELETE',
        url:`http://localhost:3000/heros/${item.id}`
      }).then(() => {
        this.loadHeros()
      })
    }
  }
};
</script>

<style scoped>
.herder {
  padding: 10px;
}
</style>
