const names = document.querySelector(".names-list");

const userURL = "http://localhost:5000/names";

const getUsers = async () => {
  try {
    const response = await fetch(userURL);
    const dataFeed = await response.json();
    dataFeed.forEach((person) => {
      const peeps = `
      <h3>${person.name}</h3>
    
      
      
      `;
      names.innerHTML += peeps;
    });
    console.log(dataFeed);
  } catch (error) {
    console.log("DATAFEED-ERROR!", error);
  }
};
getUsers();
