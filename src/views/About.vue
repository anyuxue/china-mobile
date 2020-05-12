<template>
    <div class="about">
        <HelloWorld msg="This is an 404 page"/>
    </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "About",
    components: {
        HelloWorld
    }
};
</script>