
<!-- App.vue -->
<template>
  <div>
    <div style="width: 250px">
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
      <ChannelList :columns="2" :activeId="activeId" @active="activeId = $event" />
    </div>
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu.vue";
import ChannelList from "./components/ChannelList.vue";
export default {
  components: {
    TitleMenu,
    ChannelList,
  },
  data() {
    return {
      select: false,
      activeId: 100, //默认选择的热门
    };
  },
  methods: {},
};
</script>


