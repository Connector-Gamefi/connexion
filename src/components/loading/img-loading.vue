<template>
    <div :class="['img-loading', loading ? 'loading' : '']"
         :style="{'width': width, 'height': height}">
        <svg viewBox="0 0 120 120"
             v-if="loading"
             class="__loading_svg"
             style="width: 64px; height: 64px;">
            <circle class="loading--inner-circle" cx="60" cy="60" r="30"></circle>
            <circle class="loading--outer-circle" cx="60" cy="60" r="50"></circle>
        </svg>
        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: "img-loading",
    props: {
        loading: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        width: {
            type: String,
            default: () => {
                return 'auto'
            }
        },
        height: {
            type: String,
            default: () => {
                return '100%'
            }
        }
    },
}
</script>

<style scoped lang="less">
.img-loading {
    &.loading {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


}
</style>
