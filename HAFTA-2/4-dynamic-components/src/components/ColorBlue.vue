<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text" />
</template>
<script>
export default {
    props: ["msg"],
    mounted(){
        console.log("BLUE mounted")
    },
    activated(){
        console.log("BLUE activated")
    },
    deactivated(){
        console.log("BLUE deactivated")
   
    }
}
</script>