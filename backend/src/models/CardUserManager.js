const AbstractManager = require("./AbstractManager");

class CardUserManager extends AbstractManager {
  static table = "card_user";

  insertCard(cardId, userId) {
    return this.connection.query(
      `insert into card_user (user_id, card_id) values (?, ?)`,
      [userId, cardId]
    );
  }

  enableStarterSet(user) {
    const sql = `insert into card_user (user_id, card_id, active) values
      (:userId, 5, 1),
      (:userId, 6, 1),
      (:userId, 9, 1),
      (:userId, 13, 1),
      (:userId, 14, 1),
      (:userId, 15, 1),
      (:userId, 16, 1),
      (:userId, 17, 1),
      (:userId, 18, 1),
      (:userId, 19, 1),
      (:userId, 20, 1),
      (:userId, 21, 1),
      (:userId, 24, 1),
      (:userId, 27, 1),
      (:userId, 29, 1),
      (:userId, 31, 1),
      (:userId, 35, 1)`;

    return this.connection.query(sql, { userId: user.id });
  }

  updateCard(cardId, userId, active) {
    return this.connection.query(
      `update card_user set active = ? where card_id = ? and user_id = ?`,
      [active, cardId, userId]
    );
  }

  deleteCard(cardId, userId) {
    return this.connection.query(
      `delete from card_user where card_id = ? and user_id = ?`,
      [cardId, userId]
    );
  }
}

module.exports = CardUserManager;
