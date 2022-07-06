const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  static table = "card";

  findByUser(userId, active) {
    let sql = `select * from  ${CardManager.table} inner join card_user on card.id = card_user.card_id where user_id = ?`;
    const sqlValues = [userId];

    if (active !== "both") {
      sql += " and active = ?";
      sqlValues.push(active);
    }

    return this.connection.query(sql, sqlValues);
  }

  insert(card) {
    return this.connection.query(
      `insert into ${CardManager.table} (name) values (?)`,
      [card.name]
    );
  }

  update(card) {
    return this.connection.query(
      `update ${CardManager.table} set name = ? where id = ?`,
      [card.name, card.id]
    );
  }
}

module.exports = CardManager;
