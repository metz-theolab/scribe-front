<template>

    <v-row align="center" justify="center" class="mb-10">
        <h1>Manuscripts of {{ $route.params.tradition }}</h1>
    </v-row>
    <v-row align="center" justify="center" class="mb-10">
        <AddNewManuscript :tradition='$route.params.tradition'/>
    </v-row>
    <v-row align="center" justify="center">
        <ManuscriptCard class="mx-2" v-for="manuscript in manuscripts" :tradition="$route.params.tradition" :key="manuscript.id" :name="manuscript.name" :description="manuscript.note" :createdAt="manuscript.created_at" :user="manuscript.created_by"/>
    </v-row>
</template>

<script>
import AddNewManuscript from '../components/AddNewManuscript.vue';
import ManuscriptCard from '../components/ManuscriptCard.vue';


export default {
    data() {
        return {
            manuscripts: []
        }
    },
    components: {
        AddNewManuscript,
        ManuscriptCard
    },
    created() {
        this.axios
            .get('/traditions/' + this.$route.params.tradition)
            .then(response => (this.manuscripts = response.data))
    }
}
</script>