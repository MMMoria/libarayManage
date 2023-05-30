<template>
    <div>
      <!--路由的配置项中有children时，代表有二级菜单，渲染el-submenu-->
      <el-submenu :index="menu.path" v-if="menu.children">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{ menu.meta.menuName }}</span>
        </template>
        <!--在组件中调用组件自身，递归的判断是否有子级，直到最后没有子级为止-->
        <sidebar-menu-item v-for="item in menu.children" :key="item.path" :menu="item"></sidebar-menu-item>
      </el-submenu>
      <!--没有子级直接渲染这个-->
      <el-menu-item :index="menu.path" v-else>
        <i :class="menu.meta.icon"></i>
        <span slot="title">{{ menu.meta.menuName }}</span>
      </el-menu-item>
    </div>
</template>
<script type="text/javascript">
export default{
  //组件调用自身时必须加name属性
  name: "SidebarMenuItem",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
