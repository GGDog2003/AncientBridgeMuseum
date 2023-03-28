<template>

    <div>
        <el-col :span=4>
            <el-menu
                    id="menu"
                    default-active="1-1"
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    style="overflow-y: auto;height: 90.5vh"
                    :default-openeds="['1']"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>古桥目录</span>
                      </template>
                    <el-menu-item-group>
                        <template slot="title">金华</template>
                        <el-menu-item v-for="item in jinhuaList" :key="item.name" :index="`/StudyBridge/DetailPage?name=${item.name}&imageNum=${item.imageNum}&pinyin=${item.pinyin}&article=${item.article}`">{{item.name}}</el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
            </el-menu>
        </el-col>

            <router-view :key="new Date().getTime()"></router-view>



    </div>
</template>

<script>

    import {pinyin} from "pinyin-pro";

    export default {
        name: "StudyBridge",
        data(){
            return{
               jinhuaList:[
                   {    name:'白沙堰',
                       pinyin:'',

                       imageNum:2,
                        article:' 白沙堰是指位于金华市白沙溪上的白沙溪三十六堰，\n' +
                            '                三十六堰古水利工程自东汉建武年（公元27年）开建，\n' +
                            '                覆盖了白沙溪的全部流域，受益农田27.8万亩，\n' +
                            '                至今仍有19座堰在发挥作用。2020年12月08日，入选2020年世界灌溉工程遗产名录。'
                   },
                   {
                       name:'熟溪桥',
                       pinyin:'',
                       imageNum: 3,
                       article: '熟溪桥，位于武义江上。现存建筑系1946年按清乾隆时重建之原样修建。木石结构廊桥。南北走向，横跨熟溪。全长140米，桥面宽4.80米，通高13.40米。九孔十墩，迎水面砌分水尖。墩高4.40米。最大桥孔净空约12米。桥屋49间，中设重檐歇山顶的亭阁三间。两端设垂带踏道。2000年6月23日，因连降暴雨、水流湍急，遇到了百年不遇的大水，熟溪桥坍塌。2001年5月，熟溪桥修复工程竣工。'
                   },
                   {
                       name:'席场桥',
                       pinyin:'',
                       imageNum: 3,
                       article: '席场桥位于浙江省金华市浦江县虞宅二十五都，建于南宋宝庆三年（公元1227年）占地面积约233平方米\n' +
                           '席场桥位于浦江县虞宅乡虞宅村，离县城约15公里。据历史记载，席场桥为4孔梁墩式的廊屋桥，建于南宋宝庆三年（公元1227年），横跨壶源江，桥上建有桥屋17间，盖着小青瓦，左右栏栅配有条木座凳，桥长60余米，宽3.9米。该桥经过多次修葺，至今保存完好。\n' +
                           '人文故事：传说席场桥首创者毛日严，三次造桥，前两次都被富春江篾缆精所毁。镇守壶源江的圭溪龙看后不服，带着虾兵蟹将去富春江找篾缆精评理，结果双方相斗，一直斗到天庭。观音菩萨得知后，为民除害，和韦陀一起消灭了篾缆精。随后，观音菩萨又扮成村姑化缘了五千两银子，帮助日严公造桥，三年桥成。为感谢观音菩萨，毛日严遂在桥中央设神龛一个，以祀供奉。\n' +
                           '\n'
                   },
                   {
                       name:'通洲桥',
                       pinyin:'',
                       imageNum: 3
                   },
                   {
                       name:'湖山桥',
                       pinyin:'',
                       imageNum: 3
                   },
                   {
                       name:'古月桥',
                       pinyin:'',
                       imageNum: 2
                   },
                   {
                       name:'亘古桥',
                       pinyin:'',
                       imageNum: 3
                   },
                   {
                       name:'金华万善浮桥',
                       pinyin:'',
                       imageNum: 3
                   },
                   {
                       name:'金华古桥',
                       pinyin:'',
                       imageNum: 0
                   },


               ]
            }

        },
        mounted() {
            this.readPinyin();
        }
        ,
        methods:{
            readPinyin(){
                for (let i = 0; i < this.jinhuaList.length; i++) {



                    for (let j = 0; j < this.jinhuaList[i].name.length; j++) {
                        var tempPinYin=pinyin(this.jinhuaList[i].name[j],{toneType:'none'})
                        var temp=tempPinYin.charAt(0)
                        temp=temp.toUpperCase()
                        var sub=tempPinYin.substring(1)
                        this.jinhuaList[i].pinyin=this.jinhuaList[i].pinyin+temp+sub
                    }

                    console.log(this.jinhuaList[i].pinyin )
                }


            }
        }





    }

</script>

<style scoped>
.sideBar{
    display: flex;
    flex-direction: column;

    flex: 1;
}
</style>