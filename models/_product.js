module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      precision: 5,
      scale: 2,
      allowNull: false
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      default: 0,
      allowNull: false
    }
  }, {
      timestamps: false,
    });

  return Product;
};