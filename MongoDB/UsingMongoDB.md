# Using MongoDB

### `Create a database called 'my_first_db'`
### `Create students collection`
## Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

## In Terminal 

--> use my_first_db
--> db.createCollection("students")
### Create 5 students with the appropriate info.
db.students.insert({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
STUDENT1: db.students.insert({name: "Rahaf", home_state: "Ramallah", lucky_number: 8, birthday: {month: 8, day: 26, year: 1995}})
WriteResult({ "nInserted" : 1 })
STUDENT2: db.students.insert({name: "Jeries", home_state: "Ramallah", lucky_number: 26, birthday: {month: 5, day: 26, year: 1998}})
WriteResult({ "nInserted" : 1 })
STUDENT3: db.students.insert({name: "Mariana", home_state: "Ramallah", lucky_number: 7, birthday: {month: 1, day: 7, year: 1992}})
WriteResult({ "nInserted" : 1 })
STUDENT4: db.students.insert({name: "Yousef", home_state: "Jerusalem", lucky_number: 9, birthday: {month: 9, day: 23, year: 1996}})
WriteResult({ "nInserted" : 1 })
STUDENT5: db.students.insert({name: "Lamis", home_state: "Birzeit", 
lucky_number: 8, birthday: {month: 8, day: 5, year: 1969}})
WriteResult({ "nInserted" : 1 })

### Get all students.
db.students.find().pretty()

### Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo). (All Students from Washington or Ramallah)
 db.students.find({$or: [ {home_state: "Washington"}, {home_state: "Ramallah"} ]})

### Get all students whose lucky number is greater than 3
db.students.find({lucky_number: {$gt: 3}})

### Get all students whose lucky number is less than or equal to 10
db.student.find({lucky_number: {$lte: 10}}).pretty()

### Get all students whose lucky number is between 1 and 9 (inclusive)
db.students.find({$and: [ {lucky_number: {$gt: 1}}, {lucky_number: {$lte: 9}} ]}).pretty()

### Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({}, {$push: {interests: "coding"}})
db.students.updateMany({}, {$push: {interests: 'brunch'}})
db.students.updateMany({}, {$push: {interests: 'MongoDB'}})

### Add some unique interests for each particular student into each of their interest arrays.
db.students.updateMany({name: "Rahaf"}, {$addToSet: {interests: "Baking"}})
db.students.updateMany({name: "Jeries"}, {$addToSet: {interests: "Eating"}})
db.students.updateMany({name: "Mariana"}, {$addToSet: {interests: "Drawing"}})
db.students.updateMany({name: "Lamis"}, {$addToSet: {interests: "Cooking"}})
db.students.updateMany({name: "Yousef"}, {$addToSet: {interests: "Dancing"}})

### Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Yousef"}, {$addToSet: {interests: "taxes"}})

### Remove the 'taxes' interest you just added.
db.students.update({name: "Yousef"}, {$pull: {interests: "taxes"}})

### Remove all students who are from California.(Remove all students from Birzeit)
db.students.remove({home_state: "Birzeit"}, false)

### Remove a student by name.
db.students.remove({name: "Yousef"}, false)

### Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}}, true)
WriteResult({ "nRemoved" : 1 })

### Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {number_of_belts: 0}})

### Increment this field by 1 for all students in Washington (Seattle Dojo).(In Ramallah)
 db.students.updateMany({home_state: "Ramallah"}, {$set: {number_of_belts: 1}})

### Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, {$rename: { "number_of_belts": "belts_earned" } })

### Remove the 'lucky_number' field.
db.students.updateMany({}, { $unset: {"lucky_number" : ""}})

### Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, {$currentDate: {updated_on: true }})
