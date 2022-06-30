class Product {
  constructor(dataAccess) {
    this.dataAccess = dataAccess;
  }

  getProducts = async (req, res) => {
    const products = await this.dataAccess.getProducts({ ...req.query });

    const { results, available_filters } = products;
    const items = [];

    const categories = available_filters.find(
      (filter) => filter.id === "category"
    );

    results.forEach((product) => {
      const {
        id,
        title,
        installments: { currency_id, amount },
        thumbnail: picture,
        condition,
        shipping: { free_shipping },
      } = product;

      items.push({
        id,
        title,
        price: { currency: currency_id, amount, decimals: amount },
        picture,
        condition,
        free_shipping,
      });
    });

    const respuesta = {
      author: {
        name: "Juan Pablo",
        lastname: "Romero Londoño",
      },
      categories: categories.values.map((category) => category.name),
      items,
    };

    res.status(200).json(respuesta);
  };

  getProduct = async (req, res) => {
    const [product, description] = await this.dataAccess.getProduct({
      ...req.params,
    });

    const { id, title, currency_id, price, pictures } = product;
    const { plain_text } = description;

    const respuesta = {
      author: {
        name: "Juan Pablo",
        lastname: "Romero Londoño",
      },
      item: {
        id,
        title,
        price: { currency: currency_id, amount: price, decimals: price },
        pictures,
        description: plain_text,
      },
    };

    res.status(200).json(respuesta);
  };
}

module.exports = Product;
