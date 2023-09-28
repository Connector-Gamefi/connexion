<template>
    <el-carousel :interval="1114000" type="card" height="600px" width="1000">
        <el-carousel-item :key="0">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-users.png">

        </el-carousel-item>
        <el-carousel-item :key="1">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/separate-permissions.png">

        </el-carousel-item>
        <el-carousel-item :key="2">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-assets.png">

        </el-carousel-item>
        <el-carousel-item :key="3">
            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/data-visualization.png">

        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "carousel-wrap"
}
</script>

<style scoped lang="less">

</style>
