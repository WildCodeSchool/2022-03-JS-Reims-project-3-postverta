const AbstractManager = require("./AbstractManager");

class CardUserManager extends AbstractManager {
  static table = "carduser";

  insertCard(userId, cardId) {
    return this.connection.query(
      `insert into card_user (user_id, card_id) values (?, ?)`,
      [userId, cardId]
    );
  }
}

module.exports = CardUserManager;
