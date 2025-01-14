import { defineComponent, defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('@/layout/component/header.tsx'))
const Main = defineAsyncComponent(() => import('@/layout/component/main.tsx'))

export default defineComponent({
  render() {
    return (
      <>
        <el-container class={['layout-container', 'flex-center', 'layout-backtop']}>
          <Header />
          <Main />
          <el-backtop target=".layout-backtop .el-main .el-scrollbar__wrap"></el-backtop>
        </el-container>
      </>
    )
  }
})
