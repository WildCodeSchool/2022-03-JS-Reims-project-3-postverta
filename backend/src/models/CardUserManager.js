const AbstractManager = require("./AbstractManager");

class CardUserManager extends AbstractManager {
  static table = "card_user";

  insertCard(cardId, userId) {
    return this.connection.query(
      `insert into card_user (user_id, card_id) values (?, ?)`,
      [userId, cardId]
    );
  }

  updateCard(cardId, userId, active) {
    return this.connection.query(
      `update card_user set active = ? where card_id = ? and user_id = ?`,
      [active, cardId, userId]
    );
  }

  deleteCard(cardId) {
    return this.connection.query(`delete from card_user where card_id = ?`, [
      cardId,
    ]);
  }
}

module.exports = CardUserManager;
