<template>
  <div
    v-loading="iframeLoading"
    class="layout-view-bg-white flex mt1"
    :style="{ height: `calc(100vh - ${setIframeHeight}`, border: 'none' }"
  >
    <iframe v-show="!iframeLoading" id="iframe" :src="iframeUrl" frameborder="0" height="100%" width="100%"></iframe>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted, nextTick, watch, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '@/store'
  export default defineComponent({
    name: 'LayoutIframeView',
    setup() {
      const route = useRoute()
      const state = reactive({
        iframeLoading: true,
        iframeUrl: ''
      })
      // 初始化页面加载 loading
      const initIframeLoad = () => {
        state.iframeUrl = route.meta.isLink as string
        nextTick(() => {
          state.iframeLoading = true
          const iframe = document.getElementById('iframe')
          if (!iframe) return false
          iframe.onload = () => {
            state.iframeLoading = false
          }
        })
      }
      // 设置 iframe 的高度
      const setIframeHeight = computed(() => {
        let { isTagView } = useStore().useThemeStore
        let { tagViewCurrenFull } = useStore().useRouteStore
        if (tagViewCurrenFull) {
          return `1px`
        } else {
          if (isTagView) return `85px`
          else return `51px`
        }
      })
      // 页面加载时
      onMounted(() => {
        initIframeLoad()
      })
      // 监听路由变化，多个 iframe 时使用
      watch(
        () => route.path,
        () => {
          initIframeLoad()
        }
      )
      return {
        setIframeHeight,
        ...toRefs(state)
      }
    }
  })
</script>
