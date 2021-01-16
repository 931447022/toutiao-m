<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    >
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 个人信息 -->
    <van-cell title="头像" value="内容" is-link>
      <van-image
        round
        class="avatar"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-cell>
    <van-cell title="昵称" value="内容" is-link></van-cell>
    <van-cell title="性别" value="内容" is-link></van-cell>
    <van-cell title="生日" value="内容" is-link></van-cell>

    <!-- /个人信息 -->
  </div>
</template>
<script>
import getUserProfile from "@/api/user";
export default {
  name: "UserProfile",
  data() {
    return {
      user: {} //个人信息
    };
  },
  created() {
    this.loadUserProfile();
  },
  methods: {
    async loadUserProfile() {
      try {
        const { data } = await getUserProfile();
        console.log(data);
      } catch (err) {
        this.$toast("数据获取失败");
      }
    }
  }
};
</script>
<style lang="less">
.user-profile {
  .avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
