<template>
    <v-template>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant"
                    variant="flat">
                Add a new tradition</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Add a new tradition">
                    <v-card-text>
                        <v-text-field v-model="traditionName" label="Name"></v-text-field>
                        <v-textarea v-model="description" label="Description"></v-textarea>
                        <v-checkbox v-model="isPublic" label="Make public"></v-checkbox>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                        <v-btn text="Add a new tradition" @click="createTradition"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-template>
</template>

<script>
export default {
    name: 'AddNewTradition',
    data: () => ({
        traditionName: '',
        isPublic: false,
        description: ''
    }),
    methods: {
        createTradition() {
            this.axios
                .post('/' + this.traditionName,
                    {
                        note: this.traditionName,
                        is_public: this.isPublic,
                        note: this.description
                    }
                )
                .then(response => console.log("Successfully posted tradition"));
            window.location.reload();
        },
    }
}

</script>