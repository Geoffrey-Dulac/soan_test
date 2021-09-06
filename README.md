# CRUD API

For Petal-Health i realized a test. I had to create a basic API for doing basic CRUD actions on a Pokemon list.
<br>
<br>
Meet me @ : 
- https://petaltest.herokuapp.com/api/v1/pokemons (index : GET request)
- https://petaltest.herokuapp.com/api/v1/pokemons (create : POST request) => <b>Params expected</b> {name: '', type_1: '', type_2: '', total: 1, hp: 1, attack: 1, defense: 1, sp_atk: 1, sp_def: 1, speed: 1, generation: 1, legendary: true}
- https://petaltest.herokuapp.com/api/v1/pokemons/:id (update : PUT/PATCH request) => Pass the params you want to change like for create POST request above
- https://petaltest.herokuapp.com/api/v1/pokemons/:id (destroy : DELETE request)
- https://petaltest.herokuapp.com/api/v1/paginated_list (paginated_list : POST request) => <b>Params expected</b> {per_page: '', page: ''}


### Unit tests
I used Rspec to realize unit tests and make those routes safer (factory_bot_rails gem was added to fake data).
To run test, just run 'rspec' in your terminal.
<br>
<br>
<i>September 2021</i>
  

