<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :error="error"
    error-text="加载失败，请点击重试"
    @load="onLoad"
  >
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :title="item.content"
    />
  </van-list>
</template>
<script>
import { getComments } from "@/api/comment";
export default {
  name: "CommentList",
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    }
  },
  data() {
    return {
     list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页数据的标记
      limit: 10,
      error: false
    };
  },
  methods: {
    async onLoad() {
      try {
        // 1.请求获取数据
        const { data } = await getComments({
          type: 'c', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
          source: this.source, // 源id，文章id或评论id
          offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
          limit: this.limit // 每页大小
        });
        // 2.将数据添加到列表中
        const { results } = data.data;
        this.list.push(...results);

        // 把文章评论的总数量传递到外部
        this.$emit('onload-success',data.data)

        // 3.将loading 设置为false
        this.loading = false;
        // 4.判断是否还有数据
        if (results.length) {
          // 有就更新获取下一页的数据页码
          this.offset = data.data.last_id;
        } else {
          // 没有就将 finished 设置结束
          this.finished = true;
        }
      } catch (err) {
        this.error = true;
        this.loading = false;
      }
    }
  }
};
</script>
<style lang="less"></style>
