<template>

    <v-template>
        <v-dialog max-width="500">

            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant" variant="flat" icon="mdi-minus" />
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Add a new column">
                    <v-card-text>
                        Deletion of column {{ name }}
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                        <v-btn text="Confirm deletion" @click="deleteColumn"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

    </v-template>

</template>

<script>
export default {
    name: 'AddNewColumn',
    props: {
        tradition: String,
        manuscript: String,
        folio: String,
        name: String
    },
    methods: {
        deleteColumn() {
            this.axios
                .delete('/' + this.tradition + '/' + this.manuscript + '/' + this.folio + '/' + this.name,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then();
            window.location.reload();
        }
    }
}

</script>