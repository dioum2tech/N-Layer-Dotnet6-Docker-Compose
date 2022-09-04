<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent :max-width="maxWidth">
      <v-card>
        <v-card-title>
          <span class="headline">
            <slot name="title"></slot>
          </span>
        </v-card-title>
        <v-card-text class="pb-2">
          <slot name="content"></slot>
        </v-card-text>
        <v-card-actions>
          <slot name="actions"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" src="./Modal.ts"></script>