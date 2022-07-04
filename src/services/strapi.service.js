const API_URL = process.env.VUE_APP_STRAPI_URL || "/";

class StrapiAPI {
    constructor() {
    }
    async getData(table, populate = "=*") {
        return fetch(API_URL + table + '?populate' + populate)
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    async login(dataObject) {
        return fetch(API_URL + 'auth/local', {
            method: 'POST',
            body: new URLSearchParams(dataObject)
        }).then(response => response.json())
            .then(data => {
                return data;
            })
    }
}

export default new StrapiAPI();