import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash, faPencilAlt, faUndo, faRedo, faEraser, faCircle, faFont, faUpload, faPaintBrush, faSquare, faExclamationTriangle, faSlash } from '@fortawesome/free-solid-svg-icons'

library.add({ faTrash, faPencilAlt, faUndo, faRedo, faEraser, faCircle, faFont, faUpload, faPaintBrush, faSquare, faExclamationTriangle, faSlash })

Vue.component('font-awesome-icon', FontAwesomeIcon)
