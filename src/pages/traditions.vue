<template>
    <v-row align="center" justify="center" class="mb-10">
        <h1>Existing traditions</h1>
    </v-row>
    <v-row align="center" justify="center" class="mb-10">
        <AddNewTradition />
    </v-row>

    <v-row align="center" justify="center">
            <TraditionCard class="mx-2" v-for="tradition in traditions" :key="tradition.id" :name="tradition.name" :user="tradition.created_by" :description="tradition.note"
                :isPublic="tradition.is_public" :createdAt="tradition.created_at" />
    </v-row>
</template>

<script>
import AddNew from '../components/AddNewTradition.vue';
import TraditionCard from '../components/TraditionCard.vue';

export default {
    data() {
        return {
            traditions: []
        }
    },
    components: {
        AddNew,
        TraditionCard
    },
    created() {
        this.axios
            .get('/traditions')
            .then(response => (this.traditions = response.data))
    }
}


</script>