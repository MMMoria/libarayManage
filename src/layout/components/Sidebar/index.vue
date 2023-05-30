<template>
    <div>
      <el-menu
          :default-active="$route.path"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
      >
        <sidebar-menu-item v-for="item in menus" :key="item.path" :menu="item">
        </sidebar-menu-item>
      </el-menu>
    </div>
</template>
<script type="text/javascript">
import SidebarMenuItem from "@/layout/components/Sidebar/SidebarMenuItem";
export default {
  components: { SidebarMenuItem },
  data() {
    return {
      menus: "",
    };
  },
  methods: {
    loadData() {
      this.menus = JSON.parse(sessionStorage.getItem("asyncRoutes"));
    },
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>
</style>
