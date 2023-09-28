<template>
    <div class="header-wrap">
        <div class="__container">
            <div class="header">
                <a-logo></a-logo>
                <div class="center">
                    <header-nav></header-nav>
                </div>
                <div class="right">
                    <language-app></language-app>
                    <switch-skin></switch-skin>
                    <drawer-view @view="drawer=true"></drawer-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import launchApp from './components/launch-app';
import switchSkin from './components/switch-skin';
import drawerView from './components/drawer-view';
import headerNav from './components/header-nav';
import languageApp from './components/language-app';

export default {
    name: "header-comp",
    components: {
        launchApp,
        switchSkin,
        drawerView,
        headerNav,
        languageApp
    },
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style scoped lang="less">
.header-wrap {
    width: 100%;
    background-color: var(--col-body-bg-first);
}

.header {
    height: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .center {
        display: block;
        height: 100%;
    }

    .right {
        display: flex;
        align-items: center;
    }
}

@media screen and(max-width: 720px) {
    .header {
        .center {
            display: none;
        }
    }
}

@media screen and(min-width: 720px) {
    .header {
        .center {
            display: none;
        }
    }
}

@media screen and(min-width: 920px) {
    .header {
        .center {
            display: none;
        }
    }
}

@media screen and(min-width: 920px) {
    .header {
        .center {
            display: block;
        }
    }
}

@media screen and(min-width: 1220px) {
    .header {
        .center {
            display: block;
        }
    }
}

@media screen and(min-width: 1440px) {
    .header {
        .center {
            display: block;
        }
    }
}
</style>
