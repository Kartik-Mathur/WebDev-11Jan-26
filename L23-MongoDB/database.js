// 1. Start the server
// mongod --dbpath=data

// 2. Connect to db via mongosh
// Type : mongosh in terminal

// 3. Check databases
// show dbs;

// 4. Create database
// use myDB
// This will create myDB, agar myDB already hua toh usse use krega

// 5. Create a collection
db.createCollection('students')

// 6. Check collections
show collections;

// 7. Insert into students collection
db.students.insertOne({
    name:"Aadeep",
    college: "DTU"
})

// 8. Insert multiple documents into collection
db.students.insertMany([
    {name: "Aarav", college: "MAIT"},
    {name: "Hiya", college: "NSUT"},
    {name: "Jiya", college: "IIIT-D"},
])

// 9. Insert students but with different fiels
db.students.insertMany([
    {name: "Seerat", age: 18},
    {name: "Arjan", age: 20},
    {name: "Piyush", college: "IIIT-D", age: 21},
])

// 10. Read the data from collections
db.students.find({}); // find returns an iterator -> Will provide only top 20 data

// 11. Delete the collection
db.students.drop(); 

// 12. Search with filter
db.students.find({
    age: 18
})
// This will return an array
[
  {
    _id: ObjectId('69e4c36d64d4c207def85ae4'),
    name: 'Seerat',
    age: 18
  }
]

// 13. To search a single document
db.students.findOne({
    age: 18
})
// It returns single document
{ _id: ObjectId('69e4c36d64d4c207def85ae4'), name: 'Seerat', age: 18 }

// 14. Delete a document
db.students.deleteOne({
    age: 18
})