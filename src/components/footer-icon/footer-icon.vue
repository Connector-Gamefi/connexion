<template>
    <div class="footer-icon">
        <a href="#" target="_blank">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/footer/twitter-dark.png" alt="">
        </a>
        <a href="#" target="_blank">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/footer/github-dark.png" alt="">
        </a>
        <a href="#" target="_blank">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/footer/telegram-dark.png" alt="">
        </a>
        <a href="#" target="_blank">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/footer/messenger-dark.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: "footer-icon"
}
</script>

<style scoped lang="less">
.footer-icon {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 48px;
        height: 48px;
        margin-right: 30px;
    }
}

@media screen and(max-width: 720px) {
    .footer-icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 25px;
        }
    }
}

@media screen and(min-width: 720px) {
    .footer-icon {
        img {
            width: 36px;
            height: 36px;
            margin-right: 26px;
        }
    }
}

@media screen and(min-width: 920px) {
    .footer-icon {
        img {
            width: 40px;
            height: 40px;
            margin-right: 26px;
        }
    }
}

@media screen and(min-width: 1080px) {
    .footer-icon {
        img {
            width: 40px;
            height: 40px;
            margin-right: 26px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .footer-icon {
        img {
            width: 44px;
            height: 44px;
            margin-right: 28px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .footer-icon {
        img {
            width: 48px;
            height: 48px;
            margin-right: 30px;
        }
    }
}
</style>
