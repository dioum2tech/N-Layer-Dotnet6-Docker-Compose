import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name: 'modal'
})
export default class Modal extends Vue {
    @Prop({ default: false })
    dialog!: boolean;

    
    @Prop({ default: "600px" })
    readonly maxWidth!: string
    
    close(): void {
        this.$emit("close");
    }
}