const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const askQuestion = async (question) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // Use 'gpt-3.5-turbo' or 'gpt-4' if you have access
      prompt: question,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error asking question:', error);
    return 'Sorry, I could not process your request at this moment.';
  }
};

module.exports = { askQuestion };
