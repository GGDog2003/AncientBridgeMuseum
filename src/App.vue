<script>
    import IndexBar from "@/components/HomePage/Index-Bar.vue";



    export default {
        components: {
            IndexBar,

        }
    }

</script>

<template>
    <div>
        <IndexBar></IndexBar>


        <router-view></router-view>
        <!--        <h1>导入Obj模型测试 20230321 21:47</h1>-->
        <!--        <iframe src="./static/Modules/Obj.html" width="500" height="300px" scrolling="auto"></iframe>-->
    </div>


</template>

<style scoped>

</style>
