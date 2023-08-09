import { defineComponent } from 'vue'
import { Route } from '@/types'

export default defineComponent({
  name: 'MenuItem',
  props: {
    menu: { type: Object as () => Route, required: true }
  },
  render() {
    const { menu } = this.$props
    return (
      <el-menu-item
        index={menu.path}
        v-slots={{
          title: () => (
            <>
              <span>{menu.name}</span>
            </>
          )
        }}
      >
        {menu.meta.icon ? <el-icon>{menu.meta.icon.render()}</el-icon> : <div></div>}
      </el-menu-item>
    )
  }
})
