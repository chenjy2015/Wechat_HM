export default {
    props: {
        title: {
            default: 'title',
        },
        showObject: {},
    },
    data: {
        showObj: false,
    },
    childClicked() {
        this.$emit('eventType1', {
            text: '收到子组件参数'
        });
        this.showObj = !this.showObj;
    },
}