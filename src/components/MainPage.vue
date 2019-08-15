<template>
    <div class="main-content">
        <Aside></Aside>
        <Main></Main>
        <div class="container"></div>
        <router-view></router-view>
    </div>
</template>

<script>
import Aside from '@/components/common/Aside'
import Main from '@/components/common/Main'
export default {
    data() {
        return {
        }
    },
    components: {
        Aside,
        Main
    }
}
</script>

<style scoped>
.main-content{
    width: 100%;
    height: 100%;
    box-sizing: border-box;

}
Main{
    margin-left: 243px;
    height: 70px;
}
.container{
    width: 80%;
    height: 100%;
    padding-top: 62px;
    margin-left: 243px;
}
</style>
