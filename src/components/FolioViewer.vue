<template>
    <vue-zoomer>
        <img :src="image" alt="Folio image" width="500"/>
    </vue-zoomer>
</template>

<script>
import VueZoomer from 'vue-zoomer'


export default {
    name: 'FolioViewer',
    components: {
        VueZoomer: VueZoomer.Zoomer,
    },
    props: {
        image: String,
    },
}
</script>
