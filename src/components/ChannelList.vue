<!-- ChannelList.vue -->
<template>
  <div>
    <div
      class="channel-list"
      :style="{
        height: `${height}px`
      }"
    >
      <div
        v-for="item in channels"
        :key="item.id"
        class="item"
        :style="{
          width: `${100 / columns}%`,
        }"
      >
        <Channel
          @active="$emit('active', item.id)"
          :isActive="item.id == activeId"
          :data="item"
        />
      </div>
    </div>
    <div class="collapse" @click="isExspan = !isExspan">
      <span>{{ isExspan ? "折叠" : "展开" }}</span>
      <i
        class="iconfont"
        :class="isExspan ? 'icon-shangjiantou' : 'icon-jiantou9'"
      ></i>
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import channelServ from "../services/channel";
export default {
  components: {
    Channel,
  },
  props: {
    activeId: {
      type: Number,
      required: true, //必须传递
    },
    columns: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      channels: [],
      isExspan: true, //是否是展开状态
    };
  },
  computed: {
    height() {
      var rows = 3;
      if (this.isExspan) {
        rows = Math.ceil(this.channels.length / this.columns);
      }
      return rows * 40;
    },
  },
  async created() {
    var datas = await channelServ.getChannels();
    this.channels = datas.filter((item) => {
      return item.name !== "热门";
    });
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2745060_s3fdbkatij.css";
.channel-list {
  overflow: hidden;
  transition: .3s;
}
.item {
  float: left;
}
.collapse {
  clear: both;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer; /*鼠标移上去会有小手*/
}
.iconfont {
  font-size: 12px;
  margin-left: 5px;
}
</style>