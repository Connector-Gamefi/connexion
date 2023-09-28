<template>
    <video :src="videoLink"
           :id="id"
           class="guilder-video"
           autoplay="autoplay"
           playsinline
           muted
           property="none"
           preload=none
           loop="loop">
    </video>
</template>

<script>
import {mapState} from 'vuex';
import {WOW} from "wowjs";

export default {
    name: "guilder-video",
    props:['id'],
    data() {
        return {
            video: {
                dark: 'Connector_Part_B03.mp4',
                light: 'Connector_Part_W03.mp4'
            },
        }
    },
    computed: {
        ...mapState(['theme']),
        videoLink() {
            return this.$link + this.video[this.theme];
        }
    },
    mounted() {
        this.$nextTick(() => {
            new WOW().init();
            let myVideo = document.getElementById(this.id);
            if (myVideo.paused) {
                myVideo.play();
            } else {
                myVideo.pause();
            }
        })
    }
}
</script>

<style scoped lang="less">
.guilder-video {
    width: 100%;
    height: 100%;
}
</style>
