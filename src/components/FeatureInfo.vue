<template lang="pug">
#FeatureInfo(v-if="feature")
    h3 {{ p.Name }} 
    p.text--gray {{ p['More Information'] }}
    p.tc.ml3(v-if="p.URL")
        a.br-pill.pa2.ph3(:href="p.URL" target="_blank").no-underline Learn more
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

a {
    /* background: hsl(210, 5%, 24%);
    color: hsl(325, 97%, 46%); */
    background: hsl(325, 97%, 46%);
    color: white;
}

</style>