<template>
    <div>
        <img v-if="theme==='dark'" @click="view" class="view"
             src="https://d2svbor5ih31il.cloudfront.net/images/header/view.png">
        <img v-if="theme==='light'" @click="view" class="view"
             src="https://d2svbor5ih31il.cloudfront.net/images/header/light-view.png">
        <el-drawer
            class="__el-drawer"
            :visible.sync="drawer"
            :size="'100%'"
            :with-header="false"
        >
            <div class="drawer-body">
                <div class="drawer-header">
                    <a-dark-logo></a-dark-logo>
                    <img @click="drawer=false" class="close-view"
                         src="https://d2svbor5ih31il.cloudfront.net/images/header/close.png" alt="">
                </div>
                <el-collapse v-model="activeNames" @change="handleChange" class="__el-collapse">
                    <el-collapse-item title="Learn" name="1">
                        <div class="wrap">
                            <learnAbsolute

                                @close="close"
                                :arrow="true"
                                style="width: 100%; background-image: none;
                                padding: 40px;
                                color: white!important;"
                            ></learnAbsolute>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Build" name="2">
                        <div class="wrap">
                            <buildAbsolute :arrow="true" style="width: 100%;
                            padding: 40px;
                            background-image: none; color: white!important;"></buildAbsolute>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Explore" name="3">
                        <div class="wrap">
                            <exploreAbsolute :arrow="true" style="width: 100%;
                            padding: 40px;
                            background-image: none; color: white!important;"></exploreAbsolute>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-drawer>
    </div>

</template>

<script>

import {headerNavList} from "../../../assets/js/header-nav";
import {mapState} from 'vuex';
import learnAbsolute from './learn-absolute';
import buildAbsolute from './build-absolute';
import exploreAbsolute from './explore-absolute';

export default {
    name: "drawer-view",
    components: {
        learnAbsolute,
        buildAbsolute,
        exploreAbsolute
    },
    computed: {
        ...mapState(['theme'])
    },
    data() {
        return {
            drawer: false,
            list: headerNavList,
            activeNames: []
        }
    },
    methods: {
        view() {
            this.drawer = true;
        },
        handleClose(done) {
            done();
        },
        handleChange(val) {
            console.log(val);
        },
        close(){
            this.drawer = false;
        }
    }
}
</script>

<style scoped lang="less">

.wrap {
    width: 100%;
    height: 340px;
    position: relative;
}


.view {
    width: 30px;
    margin-left: 15px;
    display: none;
}

@media screen and(max-width: 920px) {
    .view {
        width: 30px;
        margin-left: 15px;
        display: block;
    }
}

@media screen and(min-width: 920px) {
    .view {
        display: none;
    }
}

@media screen and(min-width: 1220px) {
    .view {
        display: none;
    }
}

@media screen and(min-width: 1440px) {
    .view {
        display: none;
    }
}

</style>
