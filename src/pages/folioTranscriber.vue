<template>
    <v-row align="center" justify="center" class="mb-10">
        <h1>Folio {{ this.folio }} of manuscript {{ this.manuscript }} from tradition {{ this.tradition }}</h1>
    </v-row>

    <v-row align="center" justify="center" class="mb-10">
        <v-col align="center" justify="center">
            <FolioViewer :image="getImageUrl(this.folioData.image_url)" />
        </v-col>
        <v-col>
            <v-checkbox v-model="currentlyEdited" class='mx-auto'>Edit</v-checkbox>
            <v-row align="center" justify="center" class="mb-1">
                <AddNewColumn :tradition="tradition" :manuscript="manuscript" :folio="folio"></AddNewColumn>
                <RemoveNewColumn :tradition="tradition" :manuscript="manuscript" :folio="folio" :name="tab">
                </RemoveNewColumn>
                <v-btn icon="mdi-file" class="mx-auto" @click="Save"></v-btn>
                <v-btn icon="mdi-export" class="mx-auto"></v-btn>
            </v-row>
            <v-card>
                <v-row class="mt-4">
                    <v-tabs v-model="tab" bg-color="primary" v-for="content_ in transcription.readings">
                        <v-tab :value="content_.column">Col. {{ content_.column }}</v-tab>
                    </v-tabs>
                </v-row>
                <v-card-text>
                    <v-window v-model="tab" v-for="(content_, index) in transcription.readings">
                        <v-window-item :value="content_.column">
                            <v-row>
                                <v-col>
                                    <h3>Transcribe</h3>
                                    <TextTranscriber :image="getImageUrl(this.folioData.image_url)" :text="content_"
                                        :currentlyEdited="currentlyEdited" />
                                </v-col>
                                <v-col>
                                    <h3>Notes</h3>
                                    <TextTranscriber :image="getImageUrl(this.folioData.image_url)"
                                        :text="transcription.notes[index]" :currentlyEdited="currentlyEdited" />
                                </v-col>
                                <v-col>
                                    <h3>Translate</h3>
                                    <!-- <TextTranscriber :image="getImageUrl(this.folioData.image_url)"
                                        :text="transcription.notes[index]" :currentlyEdited="currentlyEdited" /> -->
                                </v-col>
                            </v-row>
                        </v-window-item>

                    </v-window>
                </v-card-text>
            </v-card>
        </v-col>


    </v-row>
</template>

<script>
import TextTranscriber from '../components/TextTranscriber.vue';
import AddNewColumn from '../components/AddNewColumn.vue';
import RemoveNewColumn from '../components/RemoveNewColumn.vue';
import FolioViewer from '../components/FolioViewer.vue';


export default {
    name: 'FolioTranscriber',
    data() {
        return {
            tradition: this.$route.params.tradition,
            manuscript: this.$route.params.manuscript,
            folio: this.$route.params.folio,
            folioData: {},
            currentlyEdited: false,
            columns: [{ "value": 3, "text": "test" }],
            tab: 1,
            transcription: {
                "readings": [
                    {
                        "column": 1,
                        "content": ""
                    },
                ],
                "notes": [
                    {
                        "column": 1,
                        "content": ""
                    },
                ],
                "translations": {}
            }
        }
    },
    methods: {
        getImageUrl(image) {
            return 'http://localhost:8000/static/' + image;
        },
        addColumn() {
            this.axios
                .post('/' + this.tradition + '/' + this.manuscript + '/' + this.folio + '/' + this.createdcolumn,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then();
            transcription.push({ "column": this.createdcolumn, "content": "\n" });
        },
        Save() {
            this.axios
                .post('/' + this.tradition + '/' + this.manuscript + '/' + this.folio + '/content/',
                    {
                        readings: this.transcription.readings,
                        notes: this.transcription.notes,
                    }
                )
                .then(response => this.response.status == 200 ? alert("Successfully saved content") : alert("Error saving content"));
        },
    },
    created() {
        this.axios
            .get('/traditions/' + this.tradition + '/' + this.manuscript + '/' + this.folio)
            .then(response => (this.folioData = response.data));

        this.columns = [];
        this.axios
            .get('/traditions/' + this.tradition + '/' + this.manuscript + '/' + this.folio + '/columns/')
            .then(response => (response.data.forEach((element, index, array) => {
                this.columns.push({ "value": element.position_in_folio, "text": element.position_in_folio })
            })));

        this.axios
            .get('/traditions/' + this.tradition + '/' + this.manuscript + '/' + this.folio + '/content')
            .then(response => (
                this.transcription = response.data
            ));

        window.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                // Prevent the Save dialog to open
                e.preventDefault();
                // Place your code here
                this.Save();
                alert("Saved content")
            }
        })
    }
}
</script>
