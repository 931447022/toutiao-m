module.exports = {
  plugins: {
    //配置使用 autoprefixer 插件
    autoprefixer: {
      // 配實使用autoprefixer 插件
      // 作用:生成润览器css 样武规利前领
      // VueCLI 内部已经配置了autoprefixer插件
      // 所以又配置一次，所以产生冲突
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
      //配置使用 postcss-pxtorem 插件
      //作用 ： 把px 转为 rem
    'postcss-pxtorem': {
      // lib-flexibel 的 rem 适配方案： 把一行分成 10 份 ，每份就是十分之一
      // 所以rootValue 应该设置为你的设计稿的宽度的十分之一
      // 我们的设计稿是 750 ，所以应该设置为 750 / 10 = 75
      // 但是Vant 建议设置为 37.5 为什么？ 因为Vant 是基于 375 写的
      // 所以必须设置为 37.5 ，唯一的缺点就是我们的设计稿的尺寸都必须 /2
      // 如果是Vant 的样式， 就按照37.5来转换
      // 如果是我们自己的样式 ，就按照 75 来转换
      // 查阅文档 rootvalue 支持两种类型
      // 数字：固定的数值
      // 函数：可以动态处理返回
      // postcss-pxtorem 处理每个css文件的时候都会来调用这个函数
      // 它会把被处理的css文件相关的信息通过函数传递给该js
      rootValue({ file }){
        return file.indexOf('vant') !== -1 ? 37.5 :75
      },

      //配置要转换的 css 属性
      // * 表示所有
      propList: ['*'],

      //配置不要转换的样式资源
      exclude:'github-markdown'
    }
  }
}
