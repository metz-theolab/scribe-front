<template>
    <v-template>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant"
                    variant="flat">
                Add a new manuscript</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Add a new tradition">
                    <v-card-text>
                        <v-text-field v-model="name" label="Name"></v-text-field>
                        <v-textarea v-model="description" label="Description"></v-textarea>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                        <v-btn text="Add a new manuscript" @click="createManuscript"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-template>
</template>

<script>
export default {
    name: 'AddNewManuscript',
    props: {
        tradition: String,
    },
    data: () => ({
        name: '',
        description: ''
    }),
    methods: {
        createManuscript() {
            this.axios
                .post('/' + this.tradition + '/' + this.name,
                    {
                        note: this.description,
                    }
                )
                .then(response => console.log("Successfully created manuscript"));
            window.location.reload();
        },
    }
}

</script>