<template>
    <v-template>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant" variant="flat">
                    Add a new folio</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Add a new tradition">
                    <v-card-text>
                        <v-text-field v-model="name" label="Name"></v-text-field>
                        <v-text-field label="Position in folio" v-model="positionInManuscript"></v-text-field>
                        <v-file-input label="File input" v-model="folioImage"></v-file-input>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                        <v-btn text="Add a new folio" @click="createFolio"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-template>
</template>

<script>
export default {
    name: 'AddNewFolio',
    props: {
        tradition: String,
        manuscript: String
    },
    data: () => ({
        name: '',
        folioImage: null,
        positionInManuscript: ''
    }),
    methods: {
        createFolio() {
            let formData = new FormData();
            if (this.folioImage != null)
                formData.append('image', this.folioImage[0]);
            formData.append('position_in_manuscript', this.positionInManuscript);
            this.axios
                .post('/' + this.tradition + '/' + this.manuscript + '/' + this.name,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(response => console.log("Successfully created folio"));
            window.location.reload();
        },
    }
}

</script>