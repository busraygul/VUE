<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto.</p>

    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(e){
            //this.$router.push(`/detay/${e.target.value}`) //url e ekledik

            this.$router.push({
                name : "DetailsPage",
                params : {
                    userID : e.target.value
                },
                query: {
                    type: "DetailAuth",
                    user: "busraygul"
                }
            });
        }
    }
}
</script>