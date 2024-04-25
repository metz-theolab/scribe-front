<template>
    <v-col>
        <v-textarea v-model="text.content" :disabled="!currentlyEdited"></v-textarea>
    </v-col>
</template>

<script>
export default {
    name: 'TextTranscriber',
    props: {
        text: Object,
        image: String,
        currentlyEdited: Boolean,
    },
}

</script>