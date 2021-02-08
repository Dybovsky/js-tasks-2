let my_data = '{"name":"Shany", "country":"Israel", "age":31}';

function display_info(string) {
  let person = JSON.parse(string);

  let name = document.getElementById("name");
  let country = document.getElementById("country");
  let age = document.getElementById("age");

  name.innerText = `name: ${person.name}`;
  country.innerText = `country: ${person.country}`;
  age.innerText = `age: ${person.age}`;
}

display_info(my_data);
