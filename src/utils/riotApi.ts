export const getChampionRotation = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/rotation");

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
