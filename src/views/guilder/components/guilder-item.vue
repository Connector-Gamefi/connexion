<template>
    <div class="guilder-item">
        <div :class="['title', 'Poppins-ExtraBold', data.isLink ? 'pointer' : '']" @click="view">
            {{ data.title }}
            <a-icon v-if="data.isLink" class="icon-link" type="icon-link"></a-icon>
        </div>
        <div class="content Poppins-Regular">
            {{ data.content }}
        </div>
    </div>
</template>

<script>
export default {
    name: "guilder-item",
    props: ['data'],
    methods:{
        view(){
            if (this.data.isLink){
             window.open('https://connexion.games/defi/index.html#/')
            }
        }
    }
}
</script>

<style scoped lang="less">
.guilder-item {
    width: 280px;
    border-top: 1px solid var(--col-white);

    .title {
        padding: 15px 0 20px 0;
        font-size: 20px;
        line-height: 100%;
        color: var(--col-white09);
        display: flex;
        align-items: end;
        .icon-link{
            font-size: 8px;
            margin-bottom: 3px;
            margin-left: 5px;
        }
        &.pointer{
            cursor: pointer;
        }
    }

    .content {
        font-size: 14px;
        line-height: 23px;
        color: var(--col-white67);
    }
}
@media screen and(max-width: 720px) {
  .guilder-item {
    width: 100%;
    border-top: 1px solid var(--col-white);

    .title {
      padding: 16px 0 14px 0;
      font-size: 18px;
      text-align: center;
    }

    .content {
      text-align: center;
      font-size: 12px;
      line-height: 23px;
      padding-bottom: 30px;
    }
  }
}

@media screen and(min-width: 720px) {
  .guilder-item {
    width: 180px;
    border-top: 1px solid var(--col-white);

    .title {
      padding: 8px 0 8px 0;
      font-size: 12px;
    }

    .content {
      font-size: 12px;
      line-height: 15px;
    }
  }
}

@media screen and(min-width: 920px) {
  .guilder-item {
    width: 210px;
    border-top: 1px solid var(--col-white);

    .title {
      padding: 8px 0 8px 0;
      font-size: 12px;
    }

    .content {
      font-size: 12px;
      line-height: 15px;
    }
  }
}

@media screen and(min-width: 1080px) {
  .guilder-item {
    width: 240px;
    border-top: 1px solid var(--col-white);

    .title {
      padding: 10px 0 10px 0;
      font-size: 14px;
    }

    .content {
      font-size: 13px;
      line-height: 17px;
    }
  }
}

@media screen and(min-width: 1220px) {
    .guilder-item {
        width: 260px;
        border-top: 1px solid var(--col-white);

        .title {
            padding: 13px 0 18px 0;
            font-size: 14px;
        }

        .content {
            font-size: 14px;
            line-height: 20px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .guilder-item {
        width: 280px;
        .title {
            padding: 15px 0 20px 0;
            font-size: 20px;
        }

        .content {
            font-size: 14px;
            line-height: 23px;
        }
    }
}
</style>
