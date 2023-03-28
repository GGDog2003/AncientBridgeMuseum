<template>
    <div>

        <el-carousel height="500px">
            <el-carousel-item v-for="item in Images" :key="item.src">
                <img :src="item.src" alt="轮播图" class="img" style="width: 100%;margin-top:-200px"/>
            </el-carousel-item>

        </el-carousel>
        <br>
        <router-link to="/studyBridge">
            <el-button
                    type="primary"
                    class="btn"

            >了解古桥</el-button>
        </router-link>


    </div>



</template>

<script>
    export default {
        name: "Bridge-Carousel",
        data(){
            return{
                Images:[
                    {
                    src:new URL('../../assets/Carousel/1.jpg',import.meta.url).href,
                     },
                    {
                        src:new URL('../../assets/Carousel/2.jpg',import.meta.url).href,
                    },
                    {
                        src:new URL('../../assets/Carousel/3.jpg',import.meta.url).href,
                    },
                    {
                        src:new URL('../../assets/Carousel/4.jpg',import.meta.url).href,
                    }


                ]

            }

        },

    }




</script>

<style scoped>

    .img{
        width: 900px;

    }
    .btn{
        position: absolute;
        left: 50%;
        margin-left: -5%;
        border-radius: 50px;
        height: 100px;
        width: 200px;
        font-size: 24px;
    }

</style>