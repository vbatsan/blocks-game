import axios from 'axios';

 class Api {
    getSettings() {
        return axios("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
                .then((res) => res.data)
    }

    getWinners() {
        return axios("https://starnavi-frontend-test-task.herokuapp.com/winners")
                .then((res) => res.data)

    }

    sendWinner(data) {
        return axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', data)
                .then((res) => res.data)
    }

}

export default new Api()

