<template>
    <p :class="['body-content', 'animate__animated', 'animate__backInLeft', 'Poppins-Bold',right ? 'text-right' : '']">
        {{ content }}
    </p>
</template>

<script>
export default {
    name: "body-content",
    props: ['content', 'right']
}
</script>

<style scoped lang="less">
.body-content {
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--col-white09);
    padding: 16px 0 22px 0;

    &.text-right {
        text-align: right;
        line-height: 29px;
    }
}

@media screen and(max-width: 720px) {
    .body-content {
        font-size: 12px;
        line-height: 12px;
        padding: 8px 0 14px 0;
        text-align: center;

        &.text-right {
            text-align: center;
            width: 231px;
            line-height: 20px;
        }
    }
}

@media screen and(min-width: 720px) {
    .body-content {
        font-size: 14px;
        line-height: 14px;
        padding: 10px 0 16px 0;
        &.text-right {
            text-align: right;
            width: 250px;
        }
    }
}

@media screen and(min-width: 920px) {
    .body-content {
        font-size: 16px;
        line-height: 16px;
        padding: 12px 0 18px 0;
        &.text-right {
            text-align: right;
            width: 340px;
        }
    }
}

@media screen and(min-width: 1080px) {
    .body-content {
        font-size: 18px;
        line-height: 18px;
        padding: 14px 0 20px 0;
        &.text-right {
            text-align: right;
            width: 430px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .body-content {
        font-size: 20px;
        line-height: 20px;
        padding: 14px 0 20px 0;
        &.text-right {
            text-align: right;
            width: 511px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .body-content {
        font-size: 22px;
        line-height: 22px;
        padding: 16px 0 22px 0;
        &.text-right {
            text-align: right;
            width: 611px;
        }
    }
}
</style>
