<template>
    <div>

        <el-menu
                default-active="/"
                class="el-menu-demo" mode="horizontal"
                router
        >
            <el-menu-item  style="height: auto">
                <img src="./../../assets/logo.png" alt="">
            </el-menu-item>
            <el-menu-item index="/">
                首页
            </el-menu-item>
            <el-submenu index="2" style="height: auto">
                <template slot="title">桥堰知识</template>
                <el-menu-item index="2-1">杭州</el-menu-item>
                <el-menu-item index="2-2">嘉兴</el-menu-item>
                <el-menu-item index="2-3">宁波</el-menu-item>
                <el-menu-item index="2-4">湖州</el-menu-item>
                <el-menu-item index="/StudyBridge/DetailPage?name=白沙堰&imageNum=2&pinyin=BaiShaYan&article=%20白沙堰是指位于金华市白沙溪上的白沙溪三十六堰，%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20三十六堰古水利工程自东汉建武年（公元27年）开建，%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20覆盖了白沙溪的全部流域，受益农田27.8万亩，%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20至今仍有19座堰在发挥作用。2020年12月08日，入选2020年世界灌溉工程遗产名录。">金华</el-menu-item>
            </el-submenu>
            <el-menu-item index=""><a href="https://szx.zjweu.edu.cn/gqgy/main.psp" style="text-decoration: none" target="_blank">返回旧版</a></el-menu-item>
            <el-menu-item index="/about">关于博物馆</el-menu-item>


        </el-menu>

    </div>



</template>

<script lang="ts" setup>

</script>

<style>
    .Bar {
        background-color: aqua;
    }

    .flex-grow {
        flex-grow: 1;
    }

    .logo {
        width: 80%
    }

    .searchBox {
        border-radius: 50px;
        width: 50%;

    }

    .routerLink {
        text-decoration: none;
        width: auto;
        height: auto;
    }
</style>
