<template>
  <van-button
    @click="onFollow"
    v-if="isFollowed"
    class="follow-btn"
    round
    size="small"
    :loading="loading"
    >已关注</van-button>
  <van-button
    v-else
    :loading="loading"
    @click="onFollow"
    class="follow-btn"
    type="info"
    color="#3296fa"
    round
    size="small"
    icon="plus"
    >关注</van-button>
</template>
<script>
import { addFollow, deleteFollow } from "@/api/user";
export default {
  name: "FollowUser",
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    },
    userId:{
      type:[Number,String,Object],
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async onFollow() {
      this.loading = true; //展示关注按钮的 loading 状态
      try {
        if (this.is_Followed) {
          //已关注，取消关注
          await deleteFollow(this.userId);
          // console.log(data);
        } else {
          // 没有关注，添加关注
          await addFollow(this.userId);
          // console.log(data);
        }
        // 更新视图状态
        // this.article.is_followed = !this.article.is_followed;
        this.$emit('update-is_followed', !this.isFollowed)
      } catch (err) {
        let message = "操作失败，请重试！";
        if (err.response && err.response.status === 400) {
          message = "你不能关注你自己！";
        }
        this.$toast(message);
      }
      this.loading = false; //关闭关注按钮的 loading 状态
    }
  }
};
</script>
<style lang=""></style>
