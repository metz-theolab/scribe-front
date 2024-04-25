<template>
  <v-row align="center" justify="center" class="mb-10">
    <h1>Next-gen textual criticism</h1>
  </v-row>

  <v-row align="center" justify="center">
    <v-card width="400" class="mx-2">
      <v-card-item>
        <v-card-title>Transcribe</v-card-title>

        <v-card-subtitle>Transcribe a new tradition</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-btn color="primary" to="/traditions">Go</v-btn>
      </v-card-text>
    </v-card>
    <v-card width="400">
      <v-card-item>
        <v-card-title>Visualize</v-card-title>

        <v-card-subtitle>Visualize existing traditions</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-btn color="primary" to="/visualize">Go</v-btn>
      </v-card-text>
    </v-card>
  </v-row>

</template>

<script setup>
//
</script>
