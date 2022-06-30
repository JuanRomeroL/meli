class Product {
  constructor(dataAccess) {
    this.dataAccess = dataAccess;
  }

  getProducts = async (req, res) => {
    const dataProducts = await this.dataAccess.getProducts({ ...req.query });

    const { results, available_filters: filters } = dataProducts;

    const categoryFilter = filters.find((filter) => filter.id === "category");
    const categories = categoryFilter.values.map((category) => category.name);
    const items = results.map((item) => {
      const {
        id,
        title,
        price: amount,
        currency_id: currency,
        thumbnail: picture,
        condition,
        shipping: { free_shipping },
      } = item;

      return {
        id,
        title,
        price: { currency, amount, decimals: amount },
        picture,
        condition,
        free_shipping,
      };
    });

    const response = {
      author: {
        name: "Juan Pablo",
        lastname: "Romero Londoño",
      },
      categories,
      items,
    };

    res.status(200).json(response);
  };

  getProduct = async (req, res) => {
    const [attributes, description] = await this.dataAccess.getProduct({
      ...req.params,
    });

    const {
      id,
      title,
      currency_id,
      price,
      sold_quantity,
      condition,
      secure_thumbnail,
      shipping: { free_shipping },
    } = attributes;

    const { plain_text } = description;

    const response = {
      author: {
        name: "Juan Pablo",
        lastname: "Romero Londoño",
      },
      item: {
        id,
        title,
        price: { currency: currency_id, amount: price, decimals: price },
        picture: secure_thumbnail,
        condition,
        free_shipping,
        sold_quantity,
        description: plain_text,
      },
    };

    res.status(200).json(response);
  };
}

module.exports = Product;
