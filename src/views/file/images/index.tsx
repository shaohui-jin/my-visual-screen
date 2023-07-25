import { defineComponent, onBeforeMount, reactive, ref } from 'vue'
import FileApi from '@/api/modules/file.ts'
import type { Artwork } from '@/api/types/file.ts'
import { STATUS, Response } from '@/types'

export default defineComponent({
  setup() {
    let artworks = reactive<Artwork[]>([])
    const tabPosition = ref<'top' | 'bottom' | 'right' | 'left'>('left')
    onBeforeMount(() => {
      getArtworks()
    })
    const getArtworks = async () => {
      const res: Response<Artwork[]> = await FileApi.getArtworks()
      if (res.resultCode === STATUS.SUCCESS) {
        Object.assign(artworks, res.data)
        console.log(artworks)
      }
    }
    return { tabPosition, artworks }
  },
  render() {
    return (
      <>
        <div>
          <el-tabs tab-position={this.tabPosition} style={{ height: '100%' }} class="demo-tabs">
            {this.artworks.map((image: Artwork) => {
              return (
                <>
                  <el-tab-pane label={image.name}>
                    <div>
                      {image.artworksInfo.map((img: any) => {
                        return (
                          <>
                            <el-image
                              key={img.cover_url}
                              style={{ width: '200px', height: '200px' }}
                              src={img.cover_url}
                              preview-src-list={[img.cover_url]}
                              lazy
                            />
                          </>
                        )
                      })}
                    </div>
                  </el-tab-pane>
                </>
              )
            })}
          </el-tabs>
        </div>
      </>
    )
  }
})