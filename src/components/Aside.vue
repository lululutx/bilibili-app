<template>
  <div class="aside">
    <ChannelSearch />
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>
        <!-- 给title具名插槽传递内容 -->
        发现频道
      </template>
      <template v-slot:icon>
        <!-- 给icon具名插槽传递内容 -->
        >
      </template>
    </TitleMenu>
    <ChannelList
      :columns="2"
      :activeId="activeId"
      @active="activeId = $event"
    />
  </div>
</template>

<script>
import TitleMenu from "./TitleMenu.vue";
import ChannelList from "./ChannelList.vue";
import ChannelSearch from "./ChannelSearch.vue";
export default {
  components: {
    TitleMenu,
    ChannelList,
    ChannelSearch,
  },
  data() {
    return {
      select: false,
      activeId: 100, //默认选择的热门
    };
  },
};
</script>

<style scoped>
.aside {
  width: 100%;
  width: 100%;
  overflow: auto;
}
</style>