
new Vue({
    el: "#app",
    data: {
        wordCount: 0,
        textCount: ""
    },
    methods: {
        hoge(){
            const target = document.getElementsByClassName("mem-name")
            console.log(target);
        }
    },
    mounted(){
        this.hoge()
    }
})
