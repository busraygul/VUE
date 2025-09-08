<template>
    <h3 class="bg-green text-white">Green Component</h3>
</template>
<script>
export default {
    props: ["msg"],
    mounted(){
        console.log("GREEN mounted")
    }
}
</script>