<template lang="pug">
#FeatureInfo(v-if="feature")
    h3 {{ p.Name }} 
    p.text--gray {{ p['More Information'] }}
    p.ml3(v-if="p.URL")
        a(:href="p.URL" target="_blank").no-underline &rarr; Learn more
    //- table(v-if="feature").bg-white.b--gray.ba.helvetica.ma1
    //-     tr
    //-         th Link
    //-         td
    //-             a(:href="p.URL") Link
    //-     tr(v-for="(prop,value) in feature.properties")
    //-         td {{ value }}
    //-         th {{ prop }}
</template>

<script>
export default {
    name: "FeatureInfo",
    data: () => ({
        feature: undefined
    }), computed: {
        p() {
            return this.feature.properties;
        }
    },
    created() {
        window.FeatureInfo = this;
    }
}
</script>

<style scoped>

</style>