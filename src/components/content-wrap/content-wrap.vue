<template>
    <div class="content-wrap">
        <div class="row">
            <div class="img-wrap">
                <img :src="data.src" alt="">
            </div>
            <div class="title Poppins-ExtraBold">
                {{ data.title }}
            </div>
        </div>
        <div class="row" v-if="data.content">
            <div class="img-wrap"></div>
            <div :class="['content', 'Poppins-Regular', data.isLink ? 'pointer' : '']" @click="view">
                {{ data.content }}
                <a-icon v-if="data.isLink" class="icon-link" type="icon-link"></a-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "content-wrap",
    props: ['data'],
    mounted() {

    },
    methods:{
        view(){
            if (this.data.isLink){
                window.open('https://www.safeheron.com/security?lang=en')

            }
        }
    }
}
</script>

<style scoped lang="less">
.content-wrap {
    width: 281px;

    .row {
        display: flex;
        align-items: center;

        .img-wrap {
            width: 48px;
            height: 48px;
            display: flex;
            margin-right: 10px;

            img {
                margin: auto;
                width: 100%;
                height: 100%;
            }
        }
    }

    .title {
        color: var(--col-white09);
        font-size: 20px;
        line-height: 120%;
        flex: 1;
    }

    .content {
        font-size: 20px;
        line-height: 120%;
        //padding-top: 20px;
        color: var(--col-white67);
        display: flex;
        align-items: end;
        &.pointer{
            cursor: pointer;
        }
        .icon-link{
            font-size: 8px;
            margin-bottom: 3px;
            margin-left: 5px;
        }
    }
}

@media screen and(max-width: 720px) {
    .content-wrap {
        width: 100%;
        margin-bottom: 15px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {

                img {

                }
            }
        }

        .title {
            font-size: 14px;
            width: 200px;
        }
        .content {
            font-size: 14px;
            //padding-top: 10px;
        }
    }
}

@media screen and(min-width: 720px) {
    .content-wrap {
        width: 200px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {


            }
        }

        .title {
            font-size: 12px;
        }
        .content {
            font-size: 12px;
            //padding-top: 10px;
        }
    }
}

@media screen and(min-width: 920px) {
    .content-wrap {
        width: 241px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {

            }
        }

        .title {
            font-size: 14px;
        }
        .content {
            font-size: 14px;
            //padding-top: 12px;
        }
    }
}

@media screen and(min-width: 1080px) {
    .content-wrap {
        width: 271px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {

            }
        }

        .title {
            font-size: 16px;
        }
        .content {
            font-size: 16px;
            //padding-top: 14px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .content-wrap {
        width: 271px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {

            }
        }

        .title {
            font-size: 18px;
        }
        .content {
            font-size: 18px;
            //padding-top: 16px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .content-wrap {
        width: 281px;

        .row {
            display: flex;
            align-items: center;

            .img-wrap {

            }
        }

        .title {
            font-size: 20px;
        }
        .content {
            font-size: 20px;
            padding-top: 0px;
        }
    }
}
</style>
