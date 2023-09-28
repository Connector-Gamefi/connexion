<template>
    <div :class="['header-navigation', theme]">
        <div class="navigation Poppins-SemiBold">
            Learn
            <learn-absolute></learn-absolute>
        </div>
        <div class="navigation Poppins-SemiBold">
            Build
            <build-absolute></build-absolute>
        </div>
        <div class="navigation Poppins-SemiBold">
            Explore
            <explore-absolute></explore-absolute>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import $ from 'jquery';
import learnAbsolute from './learn-absolute';
import buildAbsolute from './build-absolute';
import exploreAbsolute from './explore-absolute';

export default {
    name: "header-nav",
    components: {
        learnAbsolute,
        buildAbsolute,
        exploreAbsolute
    },
    computed: {
        ...mapState(['theme'])
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped lang="less">
.header-navigation {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .navigation {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
        margin: 0 8px;
        color: var(--col-white);
        position: relative;
        font-size: 16px;
        line-height: 24px;
        .absolute{
            z-index: 0;
            opacity: 0;
            transition: all .5s;
            left: 50%;
            transform: translateX(-50%);
            top: 100%;
        }

        &:hover {
            .absolute {
                opacity: 1;
                z-index: 100;
            }

        }
    }
}

@media screen and(max-width: 920px) {
    .header-navigation {

    }
}

@media screen and(min-width: 920px) {
    .header-navigation {

        .navigation {
            padding: 5px 10px;
            margin: 0 3px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .header-navigation {

        .navigation {
            padding: 5px 13px;
            margin: 0 6px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .header-navigation {

        .navigation {
            padding: 5px 15px;
            margin: 0 8px;
        }
    }
}
</style>
