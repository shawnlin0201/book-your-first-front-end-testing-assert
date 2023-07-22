import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <template v-for="info in infoList" :key="info.name">
        <details>
          <summary>
            <slot name="title" :cat="info">
              猜猜{{ info.name }}喜歡吃什麼
            </slot>
          </summary>
          <slot name="body" :cat="info">
            {{ info.love }}
          </slot>
        </details>
      </template>
    `,
  data() {
    return {
      infoList: [
        {
          name: '黑黑',
          love: '魚乾',
          hate: '黑色的線'
        },
        {
          name: '阿橘',
          love: '罐罐',
          hate: '臭臭的東西'
        }
      ]
    }
  }
})