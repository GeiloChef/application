const API_URL = process.env.VUE_APP_STRAPI_URL || "/";

class StrapiAPI {
    constructor() {
    }
    async getData(table) {
        return fetch(API_URL + table + '?populate=*')
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
}

export default new StrapiAPI();