import axios from 'axios';

async function fetchJoke() {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    console.log(response.status);
    const body = response.data;
    if (body.type === 'twopart') {
      console.log(body.setup);
      console.log(body.delivery);
    } else if (body.type === 'single') {
      console.log(body.joke);
    }
  } catch (err) {
    console.error(err.message);
  }
}

fetchJoke();
