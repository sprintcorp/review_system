<template>
  <v-snackbar
      v-model="status"
      :bottom="y === 'bottom'"
      :color="noty_color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
  >
    <slot></slot>
  </v-snackbar>
</template>

<script>
  export default {
    name:'Notification',
    props:['status','noty_color'],
    data () {
      return {
        mode: '',
        timeout: 5000,
        x: 'right',
        y: 'top',
      }
    },
  }
</script>