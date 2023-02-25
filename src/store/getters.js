//类似vue.js的计算属性，即获取state中状态，但是不做修改
//当需要从store的state中派生出一些状态就需要使用getter
//getter接受state作为第一个参数
//getter的返回值会根据它的依赖被缓存起来
//只有getter中的依赖值（state中的某个需要派生状态的值）
//发生改变的时候才会被重新计算