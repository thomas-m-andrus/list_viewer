// employees.js
var faker = require('faker')
//json-server employees.js
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    var image = faker.image.avatar()
    var favoriteAnimal = faker.image.animals()
    var job = faker.name.jobTitle()
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "profile_pic": image,
      "favorite_animal": favoriteAnimal,
      "occupation": job
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees