<template>
    <div class="loader loader--flipDelay loader--3d">
        <span class="loader-item">1</span>
        <span class="loader-item">2</span>
        <span class="loader-item">3</span>
        <span class="loader-item">4</span>
        <span class="loader-item">5</span>
        <span class="loader-item">6</span>
    </div>
</template>

<script>
export default {
    name: "loader-flipDelay"
}
</script>

<style scoped lang="less">
.loader--3d {
    transform-style: preserve-3d;
    perspective: 800px;
}

.loader {
    display: block;
    overflow: hidden;
    margin-bottom: 15%;
    font-size: 0;
}

.loader--flipDelay .loader-item {
    animation-name: flipDelay;
}

.loader-item:nth-child(1) {
    animation-delay: 100ms;
}

.loader-item:nth-child(2) {
    animation-delay: 200ms;
}

.loader-item:nth-child(3) {
    animation-delay: 300ms;
}

.loader-item:nth-child(4) {
    animation-delay: 400ms;
}

.loader-item:nth-child(5) {
    animation-delay: 500ms;
}

.loader-item:nth-child(6) {
    animation-delay: 600ms;
}

.loader-item {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 2px;
    background-color: var(--col-static-color);
    color: rgba(61, 92, 126, 0.7);
    animation-duration: 2000ms;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-iteration-count: infinite;
}

@keyframes flipDelay  {
    0% {
        transform: rotateX(
            0deg
        );
        transform-origin: 0 0 0;
        opacity: 1;
    }
    30% {
        transform: rotateX(
            90deg
        );
        transform-origin: 0 0 0;
        opacity: 0;
    }
    40% {
        transform-origin: 0 0 0;
    }
    60% {
        transform: rotateX(
            90deg
        );
        opacity: 0;
        transform-origin: 0 100% 0;
    }
    90% {
        transform: rotateX(
            0deg
        );
        opacity: 1;
        transform-origin: 0 100% 0;
    }
}
</style>
