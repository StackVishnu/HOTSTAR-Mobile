export interface Movie {
  id: number;
  title: string;
  posterURL: string;
}

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("https://api.sampleapis.com/movies/animation");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
