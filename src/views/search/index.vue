<template>
  <!-- 搜索栏 -->
  <!-- tips:在 van-search 外层增加 form 标签
    且 action 不为空 ，即可在ios键盘上显示搜索按钮 -->
  <div class="search-container">
    <form action="/">
      <!-- show-action显示取消按钮 -->
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
    </form>

     <!-- 搜索结果 -->
    <search-result  v-if="isResultShow"/>
    <!-- /搜索结果 -->

   <!-- 联想建议 -->
    <search-suggestion v-else-if="searchText"
    :search-text="searchText" />
    <!-- /联想建议 -->

    <!-- 搜索历史记录 -->
    <search-history  v-else />
    <!-- /搜索历史记录 -->
  </div>
  <!-- /搜索栏 -->
</template>

<script>
import SearchHistory from "./components/search-history";
import SearchResult from "./components/search-result";
import SearchSuggestion from "./components/search-suggestion";
export default {
  name: "SearchIndex",
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggestion
  },
  data() {
    return {
      searchText: "",
      isResultShow:false //控制搜索结果的展示
    };
  },
  methods: {
    onSearch(val) {
      this.isResultShow =true
    },
    onCancel() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
.search-container {
  /deep/ .van-search__action {
    color: #fff;
  }
}
</style>
