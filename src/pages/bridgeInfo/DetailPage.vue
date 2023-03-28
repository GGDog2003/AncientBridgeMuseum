<template>
    <div >
        <div style="overflow-y: auto;height: 90vh" class="articleDiv">
            <el-col :span="20">
                <h2 class="headCenter">{{ $route.query.name }}</h2>
                <label class="timeCenter">发布时间：2023年03月24日</label>
                <p style="text-indent:2em;" class="paraCenter">
                    {{ $route.query.article }}
                </p>
<!--                <p v-for="p in imageNums" :key="p">fdsa</p>-->
                <div >
                    <img  v-for="imgs in imageNums" :key="imgs" class="imgCenter"  :src="require(`../../assets/BridgeImage/JinHua/${pinyin}/${imgs}.png`)"
                    >
<!--                    <img  v-for="imgs in imageNums" :key="imgs" class="imgCenter"  src="/static/BridgeImage/JinHua/BaiShaYan/1.png"-->
<!--                    >-->

                </div>
                <h3 class="headCenter">图 {{ $route.query.name }}</h3>
                <h2>stl模型导入test</h2>
                <iframe src="./static/Modules/Obj.html" width="1000px" height="600px" scrolling="auto"
                        class="objCenter"
                ></iframe>
            </el-col>
        </div>
    </div>
</template>
<script>

    export default {
        name: "DetailPage",
        data() {
            return {
                imageNums:0,
                pinyin:'',
                imgRefresh:true
            }
        },
        mounted:function (){
            this.getImgNum();
            this.getPinyin()
        },
        methods:{
            getImgNum(){
               this.imageNums=parseInt(this.$route.query.imageNum)
            },
            getPinyin(){
                this.pinyin=this.$route.query.pinyin
            },

        }

    }
</script>
