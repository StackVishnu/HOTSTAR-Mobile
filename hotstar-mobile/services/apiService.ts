export interface Movie {
  id: number;
  title: string;
  posterURL: string;
}

export const fetchMovies = async (genre: string): Promise<Movie[]> => {
  console.log(genre);
  try {
    const response = await fetch(
      `https://api.sampleapis.com/movies/${genre.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
