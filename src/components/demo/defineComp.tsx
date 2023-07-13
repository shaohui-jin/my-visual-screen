import {ref, defineComponent, defineEmits, getCurrentInstance} from 'vue'
import {Events} from '@vue/runtime-dom'
import styles from "@/components/demo/demo.module.less";
export default defineComponent({
  props: {
    msg: {
      type: String,
    }
  },
  emits: ['update:msg'],
  setup(props, { emit }) {
    const { appContext : { config: { globalProperties: global } } } = getCurrentInstance()
    global.$console.info('渲染了defineComponent组件：defineComponent')
    let count = ref(0);
    const handleButton: Events = () => {
      count.value++
      emit('update:msg', `${props.msg}${count.value}`)
    };
    return { count, handleButton }
  },
  render() {
    const { $slots, $props, count, handleButton } = this
    return  (
      <div className={styles.defineComp}>
        <div className={styles.defineComp__left}>
          <span>这是defineComponent组件</span>
        </div>
        <div className={styles.defineComp__right}>
          <h2>外部的： {$props.msg}，内部的： {count}</h2>
          {$slots?.default && $slots.default()}
          {$slots?.common && $slots.common()}
          <button type="button" onClick={handleButton}>点击增加</button>
        </div>
      </div>
    )
  }
});


// <style scoped>
// .read-the-docs {
//   color: #888;
// }
// </style>
