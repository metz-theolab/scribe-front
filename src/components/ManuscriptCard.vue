<template>
    <v-card width="400">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
            <v-row class="my-1">
                <v-chip color="warning">{{ user }}</v-chip>
                <v-chip color="warning">{{ createdAt }}</v-chip>
            </v-row>
            <v-row align="center" justify="center">
                {{ description }}
            </v-row>
            <v-row class="mt-4 mb-4 mx-auto" align="center" justify="center">
                <v-btn color="primary" :to="{path: '/traditions/' + tradition + '/' + name}">Explore</v-btn>
            </v-row>
            <v-row class="mt-4 mb-4" align="center" justify="center">
                <v-btn class="mx-2" @click="editManuscript" icon="mdi-wrench"></v-btn>
                <v-btn class="mx-2" @click="deleteManuscript" icon="mdi-delete"></v-btn>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ManuscriptCard',
    props: {
        tradition: String,
        name: String,
        user: String,
        description: String,
        isPublic: Boolean,
        createdAt: String
    },
    methods: {
        editManuscript() {
            console.log("Edit Manuscript");
        },
        deleteManuscript() {
            this.axios
                .delete('/' + this.tradition + '/' + this.name)
                .then(response => console.log("Successfully deleted manuscript"));
            window.location.reload();
        },
        shareManuscript() {
            console.log("Share Manuscript");
        }
    }
}
</script>