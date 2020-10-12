
new Vue({
    el: "#app",
    data: {
    wordCount: 0
    },
    methods: {
        sayHello(){
        this.wordCount = 1
        }
    },
    mounted(){
        this.sayHello()

    }
})
