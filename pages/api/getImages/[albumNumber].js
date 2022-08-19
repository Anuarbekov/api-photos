import axios from "axios";
export default async function getImages(request, response) {
  const { albumNumber } = request.query;
  try {
    const answer = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${albumNumber}/photos`
    );
    response.send(answer.data);
  } catch (e) {
    response.send(e);
  }
}
