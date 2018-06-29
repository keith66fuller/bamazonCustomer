module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
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
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL,
      precision: 2,
      allowNull: false
    }
  }, {
      timestamps: false,
    });

  return Product;
};