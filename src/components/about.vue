<template>
  <div class="dialog-wrap">
      <div class="dialog-cover"></div>
      <div class="dialog-content">
         <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
      <div class="close" @click="close2">关闭</div>
      </div>
      
  </div>
</template>
<script>
export default {
  props: {
    isshow2: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    close2:function(){
        this.$emit("close2");
    }      
  }
}
</script>
<style scoped>
.close{
    text-align: center;
}
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
</style>

