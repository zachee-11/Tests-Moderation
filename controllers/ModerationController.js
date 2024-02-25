const axios = require('axios');

class ModerationController {

    /**
   * Obtient une prédiction de modération basée sur le contenu textuel via une requête GET.
   * @param {Object} req - L'objet de requête Express.
   * @param {Object} res - L'objet de réponse Express.
   */
  static async getPrediction(req, res) {
    try {
      const { text, language } = req.query;
      const prediction = await axios.get('https://moderation.logora.fr/predict', {
        params: { text, language }
      });
      res.json(prediction.data);
    } catch (error) {
        console.log('Erreur lors de la récupération  de la prédiction par GET : ', error.message);
      res.status(500).json({ error: 'Erreur interne du serveur', raison : error.message });
    }
  }

 /**
   * Obtient un score de qualité basé sur le contenu textuel et les votes via une requête GET.
   * @param {Object} req - L'objet de requête Express.
   * @param {Object} res - L'objet de réponse Express.
   */
  static async getScore(req, res) {
    try {
      const { text, language } = req.query;
      const score = await axios.get('https://moderation.logora.fr/score', {
        params: { text, language }
      });
      res.json(score.data);
    } catch (error) {
        console.log('Erreur lors de la récupération  du score par GET : ', error.message);
      res.status(500).json({ error: 'Erreur interne du serveur', raison : error.message });
    }
  }
/**
   * Obtient une prédiction de modération basée sur le contenu textuel via une requête POST.
   * @param {Object} req - L'objet de requête Express.
   * @param {Object} res - L'objet de réponse Express.
   */
  static async postPrediction(req, res) {
    try {
        const { text, language } = req.query;
      const prediction = await axios.post('https://moderation.logora.fr/predict', {
        params: { text, language }
      });
      res.json(prediction.data);
    } catch (error) {
        console.log('Erreur lors de la récupération  de la prédiction par POST : ', error.message);
      res.status(500).json({ error: 'Erreur interne du serveur', raison : error.message });
    }
  }

 /**
   * Obtient un score de qualité basé sur le contenu textuel et les votes via une requête POST.
   * @param {Object} req - L'objet de requête Express.
   * @param {Object} res - L'objet de réponse Express.
   */
  static async postScore(req, res) {
    try {
        const { text, language } = req.query;
      const score = await axios.post('https://moderation.logora.fr/score', {
        params: { text, language }
      });
      res.json(score.data);
    } catch (error) {
      console.log('Erreur lors de la récupération  du score POST : ', error.message);
      res.status(500).json({ error: 'Erreur interne du serveur', raison : error.message });
    }
  }
}

module.exports = ModerationController;
