
const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
  
    try {
      const raw = await fetch(url);
      const data = await raw.json();
      console.log(data.slice(0, 20));
    } catch (e) {
      console.log(e);
    }
  };
  
  getData();