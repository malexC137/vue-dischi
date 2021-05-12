new Vue({
    el: "#app",
    data: {
        albumsList: [],
        selectedGenre: 'All'
    },
    mounted() {
        const newAlbumsList = [];
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                this.albumsList = resp.data.response
                this.albumsList.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
            })
    },
    computed: {
        filteredGenres() {
            const genresArr = []
            this.albumsList.forEach((element) => { 
                if (genresArr.indexOf(element.genre) === -1) {
                    genresArr.push(element.genre)
                }
            });
            return genresArr;
        },

        filteredAlbums() {
            return this.albumsList.filter((element) => {

                if (this.selectedGenre === 'All') {
                    return true
                } else {
                    return element.genre === this.selectedGenre
                }
            });
        },
    },
    methods: {

    }
})