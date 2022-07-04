const DataAccess = require("../interfaces/dataAccess");
const axios = require("axios").default;

class MeliApi extends DataAccess {
  baseUrl = process.env.MELI_BASE_API_URL;

  async getProducts(params) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/sites/MLA/search?q=${params.q}`
      );

      return { status: true, data: response.data };
    } catch (error) {
      return { status: false, error };
    }
  }

  async getProduct(params) {
    try {
      const [res1, res2] = await Promise.all([
        axios.get(`${this.baseUrl}/items/${params.id}`),
        axios.get(`${this.baseUrl}/items/${params.id}/description`),
      ]);

      return {
        status: true,
        data: { ...res1.data, ...res2.data },
      };
    } catch (error) {
      return { status: false, error };
    }
  }
}

module.exports = MeliApi;
