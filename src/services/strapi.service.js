const API_URL = process.env.VUE_APP_STRAPI_URL || "/";

class StrapiAPI {
    constructor() {
    }

    async getDefaultInformation() {
        return {
            // Tech Stack
            techstack: await this.getData('techstacks')
        }
    }

    async getData(table) {
        return fetch(API_URL + table + '?populate=*')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return data;
            });
    }
}

export default new StrapiAPI();