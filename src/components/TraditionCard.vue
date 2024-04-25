<template>
    <v-card width="400">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
            <v-row class="my-1">
                <v-chip color="warning">{{ user }}</v-chip>
                <v-chip v-if="isPublic" color="warning">Public</v-chip>
                <v-chip color="warning">{{ createdAt }}</v-chip>
            </v-row>
            <v-row  class="my-1" align="center" justify="center">
                {{ description }}
            </v-row>
            <v-row class="mt-4 mb-4 mx-auto" align="center" justify="center">
                <v-btn color="primary" :to="{path: '/traditions/' + name}">Explore</v-btn>
            </v-row>
            <v-row class="mt-4 mb-4" align="center" justify="center">
                <v-btn class="mx-2" @click="editTradition" icon="mdi-wrench"></v-btn>
                <v-btn  class="mx-2" @click="deleteTradition" icon="mdi-delete"></v-btn>
                <v-btn  class="mx-2" @click="shareTradition" icon="mdi-share"></v-btn>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'TraditionCard',
    props: {
        name: String,
        user: String,
        description: String,
        isPublic: Boolean,
        createdAt: String
    },
    methods: {
        editTradition() {
            console.log("Edit tradition");
        },
        deleteTradition() {
            this.axios
                .delete('/' + this.name)
                .then(response => console.log("Successfully deleted tradition"));
            window.location.reload();
        },
        shareTradition() {
            console.log("Share tradition");
        }
    }
}
</script>