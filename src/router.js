/* 
    使用路由步骤
    1.npm install vue-router
    2.在 src 目录中创建 router.js
    3.写入以下基本内容
        // 加载引入
        import Vue from 'vue'
        import VueRouter from 'vue-router'
        // 配置路由表
        export default new VueRouter({
            routes:[]
        })
    4.配置路由表，根据需要配置
        import 路由组件
        配置路由表对象 { path:'', component: 组件 }

*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// 将所有路由组件打包到一起，初始的时候一次性加载好
// import Home from './views/Home.vue'
// import Add from './views/Add.vue'
// import Edit from './views/Edit.vue'


// 将不同的路由组件打包不同的资源文件，看哪里，加载哪里
const Home = () => import('./views/Home.vue')
const Add = () => import('./views/Add.vue')
const Edit = () => import('./views/Edit.vue')

Vue.use(VueRouter)

// 等价于 module.exports = new VueRouter({...})
export default new VueRouter({
    routes: [ // 路由表
        { // 首页
            path: '/', // 路径, 访问 / 就要渲染 Home组件
            component: Home // 组件
        },
        { // 添加
            path: '/add',
            component: Add
        },
        { // 修改
            /* 
            类似 Node.js 中，/edit/数据id
            这个组件现在可以被 /edit/数据id 匹配到
            /edit/数据id 是什么？符合这个规则
            /edit/1、/edit/2、/edit/3、/edit/123、/edit/*、
            /edit/:id  就是个 *     /edit/*   任意的，/edit/:abc    也可以，随便起的名字，
            然后我们就可以在路由组件中通过 this.$route.params 来获取 :xxx 的这个 动态路由参数
            也就是说 :xxx 是任意的
            如果你是 :a     那么它的获取方式就是 this.$route.params.a
            如果你是 :id    那么它的获取方式就是 this.$route.params.id
            说白了 :xxx    是动态路径参数，任意的，xxx 是起的名字，通过 this.$router.params.xxx 来获取的
            */
            path: '/edit/:id',
            component: Edit
        }
    ]
})