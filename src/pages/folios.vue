<template>
    <v-row align="center" justify="center" class="mb-10">
        <h1>Folios of manuscript {{ this.manuscript }} from tradition {{ this.tradition }}</h1>
    </v-row>
    <v-row align="center" justify="center" class="mb-10">
        <AddNewFolio :tradition='$route.params.tradition' :manuscript='$route.params.manuscript' />
    </v-row>
    <v-row align="center" justify="center">
        <FolioCard class="mx-2" v-for="folio in folios" :key="folio.name" :name="folio.name" :image="folio.image_url"
            :createdAt="folio.created_at" :user="folio.created_by" :manuscriptName="manuscript"
            :traditionName="tradition" />
    </v-row>
</template>

<script>
import FolioCard from '../components/FolioCard.vue';
import AddNewFolio from '../components/AddNewFolio.vue';


export default {
    name: 'Folios',
    data() {
        return {
            folios: [],
            tradition: this.$route.params.tradition,
            manuscript: this.$route.params.manuscript,
        }
    },
    created() {
        this.axios
            .get('/traditions/' + this.tradition + '/' + this.manuscript)
            .then(response => (this.folios = response.data))
    }
}
</script>