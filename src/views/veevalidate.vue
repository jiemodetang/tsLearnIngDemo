<template>
    <div class="home">
        <ValidationProvider :bails="false" :rules="required" v-slot="{ errors }">
            <input type="text" v-model="value" />
            <ul>
                <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
        </ValidationProvider>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

import Fontmin from 'fontmin'
@Component({
    components: {
        ValidationProvider,
        Fontmin
    }
})
export default class veevalidate extends Vue {
    @Prop({ type: String, required: true })
    private a: string

    private errors: any = []

    @Prop({ type: String, default: null })
    private rules!: string

    private value: string


 
         
}
</script>
