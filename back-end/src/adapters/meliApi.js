const DataAccess = require("../interfaces/dataAccess");
const axios = require("axios").default;

class MeliApi extends DataAccess {
  baseUrl = "https://api.mercadolibre.com";

  async getProducts(params) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/sites/MLA/search?q=${params.q}`
      );

      return response.data;
    } catch (error) {
      return false;
    }
  }

  async getProduct(params) {
    try {
      const [response1, response2] = await Promise.all([
        axios.get(`${this.baseUrl}/items/${params.id}`),
        axios.get(`${this.baseUrl}/items/${params.id}/description`),
      ]);

      return [response1.data, response2.data];
    } catch (error) {
      return false;
    }
  }
}

module.exports = MeliApi;
