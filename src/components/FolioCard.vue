<template>
    <v-card width="400" class="mx-2">
        <v-card-title>{{ name }}</v-card-title>
        <v-img height="200px" :src=getImageUrl(image) cover></v-img>
        <v-card-text>
            <v-row class="my-1">
                <v-chip color="warning">{{ user }}</v-chip>
                <v-chip color="warning">{{ createdAt }}</v-chip>
            </v-row>
            <v-row class="mt-4 mb-4" align="center" justify="center">
                <v-btn color="primary" :to="{path: '/traditions/' + traditionName + '/' + manuscriptName + '/' + name }">Explore</v-btn>
            </v-row>
            <v-row class="mt-4 mb-4" align="center" justify="center">
                <v-btn class="mx-2" @click="editFolio" icon="mdi-wrench"></v-btn>
                <v-btn class="mx-2" @click="deleteFolio" icon="mdi-delete"></v-btn>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'FolioCard',
    props: {
        name: String,
        image: String,
        user: String,
        createdAt: String,
        manuscriptName: String,
        traditionName: String
    },
    methods: {
        getImageUrl(image) {
            return 'http://localhost:8000/static/' + image;
        },
        deleteFolio() {
            this.axios
                .delete('/' + this.traditionName + '/' + this.manuscriptName + '/' + this.name)
                .then(response => console.log("Successfully deleted folio"));
            window.location.reload();
        },
    }
}
</script>