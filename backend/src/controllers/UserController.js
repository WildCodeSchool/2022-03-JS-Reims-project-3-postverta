const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readCards = (req, res) => {
    models.card
      .findByUser(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static editCard = (req, res) => {
    const { userId, cardId } = req.params;

    const { active } = req.body;

    // TODO validations (length, format...)

    models.card_user
      .updateCard(cardId, userId, active)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    models.user
      .insert(user)
      .then(([result]) => {
        user.id = result.insertId;

        models.card_user
          .enableStarterSet(user)
          .then(() => {
            res.status(201).send(user);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addCard = (req, res) => {
    const userId = req.params.id;
    const { cardId } = req.body;

    // TODO validations (length, format...)

    models.card_user
      .insertCard(cardId, userId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static deleteCard = (req, res) => {
    const { cardId, userId } = req.params;
    models.card_user
      .deleteCard(cardId, userId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
