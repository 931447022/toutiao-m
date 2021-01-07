<template>
  <div class="search-suggestion">
    <van-cell
      v-for="(text, index) in suggestions"
      :title="text"
      :key="index"
      icon="search"
    ></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from "@/api/search";
export default {
  name: "SearchSuggestion",
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestions: [] //联想建议数据列表
    };
  },
  watch: {
    searchText: {
      //当searchText 发生改变的时候就会调用 handler 函数
      // 注意：handler 函数名称是固定的
      handler(value) {
        this.loadSearchSuggestions(value);
      },
      immediate: true //该回调将会在侦听开始之后立即调用
    }
  },
  methods: {
    async loadSearchSuggestions(q) {
      try {
        const { data } = await getSearchSuggestions(q);
        this.suggestions = data.data.options;
      } catch (err) {
        this.$toast("数据获取失败,请稍后重试");
      }
    }
  }
};
</script>

<style></style>
