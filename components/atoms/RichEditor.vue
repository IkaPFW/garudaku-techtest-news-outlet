<template>
  <ckeditor :editor="editor" :value="value" :config="editorConfig" @input="event => $emit('input', event)"/>
</template>

<script>
let FullFreeBuildEditor
let CKEditor

if (process.client) {
  FullFreeBuildEditor = require('@ckeditor/ckeditor5-build-classic')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = {
    component: {
      template: '<div></div>'
    }
  }
}

export default {
    name: 'CkEditor',
    components: {
      ckeditor: CKEditor.component
    },
    props: {
      value: {
        type: String,
        required: false,
        default: null
      },
      config: {
       type: Object,
       required: false,
       default: function () {}
     }
    },
    data() {
      return {
        editor: FullFreeBuildEditor,
        editorConfig: {
          width: '80%',
          toolbar: [
            'undo',
            'redo',
            '|',
            'bold',
            'italic',
            '|',
            'numberedList',
            'bulletedList',
            '|',
            'link'
          ]
          // plugins: [
          //   'Bold',
          //   'Link',
          //   'List',
          //   'FontSize',
          // ],
        }
      }
    },
  }
</script>
