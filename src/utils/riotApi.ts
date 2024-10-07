export const getChampionRotation = async () => {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();

  return data;
};
