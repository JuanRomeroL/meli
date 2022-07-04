class Product {
  constructor(dataAccess) {
    this.dataAccess = dataAccess;
  }

  getProducts = async (req, res, next) => {
    const { status, data, error } = await this.dataAccess.getProducts({
      ...req.query,
    });

    if (status) {
      const { results, available_filters: filters } = data;

      const categoryFilter = filters.find((filter) => filter.id === "category");
      const categories = categoryFilter
        ? categoryFilter.values.map((category) => category.name)
        : [];
      const items = results.map((item) => {
        const {
          id,
          title,
          price,
          currency_id: currency,
          thumbnail: picture,
          condition,
          shipping: { free_shipping },
        } = item;

        const [amount, decimals] = this.separate(price);

        return {
          id,
          title,
          price: { currency, amount, decimals },
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
    } else {
      res.status(500).json(error);
    }
  };

  getProduct = async (req, res) => {
    const { status, data, error } = await this.dataAccess.getProduct({
      ...req.params,
    });

    if (status) {
      const {
        id,
        title,
        currency_id,
        price,
        sold_quantity,
        condition,
        pictures: [, { secure_url }],
        shipping: { free_shipping },
        plain_text,
      } = data;

      const [amount, decimals] = this.separate(price);

      const response = {
        author: {
          name: "Juan Pablo",
          lastname: "Romero Londoño",
        },
        item: {
          id,
          title,
          price: {
            currency: currency_id,
            amount,
            decimals,
          },
          picture: secure_url,
          condition,
          free_shipping,
          sold_quantity,
          description: plain_text,
        },
      };

      res.status(200).json(response);
    } else {
      res.status(500).json(error);
    }
  };

  separate = (number) => {
    const [amount, decimals] = number.toFixed(2).toString().split(".");
    return [parseInt(amount), decimals];
  };
}

module.exports = Product;
