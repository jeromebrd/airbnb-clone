export const getExploreData = async () => {
  try {
    const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
    if (!res.ok) {
      throw new Error(`Error fetch getExploreData ! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCardsData = async () => {
  try {
    const res = await fetch('https://www.jsonkeeper.com/b/VHHT');
    if (!res.ok) {
      throw new Error(`Error fetch getCardsData ! status: ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
