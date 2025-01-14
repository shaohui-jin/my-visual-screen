import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
  nextTick,
  watch,
  getCurrentInstance,
  ref,
  defineAsyncComponent
} from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { setExternalResources } from '@/utils/init'
import { useStore } from '@/store'

const Setting = defineAsyncComponent(() => import('@/layout/navBar/navigation/setting.tsx'))

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const settingRef = ref()
    const route = useRoute()
    const router = useRouter()
    const themeConfig = useStore().useThemeStore
    onBeforeMount(() => {
      // 设置批量第三方 icon 图标
      setExternalResources.cssCdn()
      // 设置批量第三方 js
      setExternalResources.jsCdn()
    })
    onMounted(() => {
      nextTick(() => {
        // 监听布局配置弹窗点击打开
        proxy.mittBus.on('openSettingDrawer', () => {
          settingRef.value.openDrawer()
        })
      })
    })
    onUnmounted(() => {
      proxy.mittBus.off('openSettingDrawer', () => {})
    })

    /**
     * @desc 监听路由的变化，设置网站标题
     * @desc 设置浏览器标题国际化
     * @method const title = useTitle(); ==> title()
     */
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          let webTitle = ''
          const globalTitle: string = useStore().useThemeStore.globalTitle
          webTitle = router.currentRoute.value.meta.title as any
          document.title = `${webTitle} - ${globalTitle}` || globalTitle
        })
      }
    )
    return { themeConfig, settingRef }
  },
  render() {
    const { themeConfig, settingRef} = this
    return (
      <>
        {/*<el-config-provider locale="zh-cn">*/}
        <RouterView />
        {/*<RouterView v-show={this.themeConfig.lockScreenTime !== 0} />*/}
        {/*{themeConfig.isLockScreen && <LockScreen />}*/}
        {/*{themeConfig.lockScreenTime !== 0 && <Setting ref="settingRef" />}*/}
        <Setting ref="settingRef" />
        {/*<CloseFull />*/}
        {/*</el-config-provider>*/}
      </>
    )
  }
})
