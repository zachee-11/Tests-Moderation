const request = require('supertest');
const app = require('../server');

describe('GET /api/moderation/predict', () => {
  test('responds with moderation prediction', async () => {
    const response = await request(app)
      .get('/api/moderation/predict')
      .query({ text: 'Je suis fan de la programmation informatique', language: 'fr' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('prediction');

    console.log('Prediction test 1 (GET):', response.body.prediction);
  });
});

describe('GET /api/moderation/score', () => {
  test('responds with moderation score', async () => {
    const response = await request(app)
      .get('/api/moderation/score')
      .query({ text: 'Le voisin de ma mère à assainé sa vache.', language: 'fr-FR' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('score');

    console.log('score test 1 (GET):', response.body.score);
  });
});

describe('POST /api/moderation/predict', () => {
  test('responds with moderation prediction', async () => {
    const response = await request(app)
      .post('/api/moderation/predict')
      .query({ text: 'Je suis fan de la programmation informatique', language: 'fr' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('prediction');

    console.log('Prediction test 2 (POST):', response.body.prediction);
  });
});

describe('POST /api/moderation/score', () => {
  test('responds with moderation score', async () => {
    const response = await request(app)
      .post('/api/moderation/score')
      .query({ text: 'Le voisin de ma mère à assainé sa vache.', language: 'fr-FR' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('score');

    console.log('Score test 2 (POST):', response.body.score);
  });
});
