

  ## 我们的团队
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '尤雨溪',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  // ...
]
</script>


向我们出色的团队问好。

<VPTeamMembers size="medium" :members="members" />
