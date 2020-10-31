import axios from 'axios';

 class Api {
    getSettings() {
        return new Promise(resolve => {
            axios("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
                .then((res) => resolve(res.data))
        })
    }

    getWinners() {
        return new Promise(resolve => {
            axios("https://starnavi-frontend-test-task.herokuapp.com/winners")
                .then((res) => resolve(res.data))
        })
    }

    sendWiner(data) {
        return new Promise(resolve => {
            axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', data)
                .then((res) => resolve(res.data))
        })

    }


}

export default new Api()

