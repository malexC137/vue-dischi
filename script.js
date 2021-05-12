new Vue({
    el: "#app",
    data: {
        albumsList: []
    },
    mounted() {
        const newAlbumsList = [];
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {

                this.albumsList.push(resp.data.response)
                // return this.albumsList
            })

    }
})