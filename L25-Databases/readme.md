<!-- 1. Insert customers data -->
1. Start mongodb server if already started ignore
    - mongod --dbpath=data
2. Open compass
3. Create collection customers -> GUI
4. insert data
[
  {
    "_id": { "$oid": "661d6fe5f3e325e3b65e3101" },
    "name": "Kartik",
    "email": "kartik@cb.com"
  },
  {
    "_id": { "$oid": "661d6fe5f3e325e3b65e3102" },
    "name": "Kanak",
    "email": "kanak@cb.com"
  },
  {
    "_id": { "$oid": "661d6fe5f3e325e3b65e3103" },
    "name": "Abhishek",
    "email": "abhishek@cb.com"
  },
  {
    "_id": { "$oid": "661d6fe5f3e325e3b65e3104" },
    "name": "Monu",
    "email": "monu@cb.com"
  },
  {
    "_id": { "$oid": "661d6fe5f3e325e3b65e3105" },
    "name": "Aayush",
    "email": "aayush@cb.com"
  }
]

5.Insert 'orders' collection data
[
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4101" },
    "item": "Laptop",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3101" }
  },
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4102" },
    "item": "Mouse",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3102" }
  },
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4103" },
    "item": "Keyboard",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3102" }
  },
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4104" },
    "item": "Monitor",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3102" }
  },
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4105" },
    "item": "USB Cable",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3103" }
  },
  {
    "_id": { "$oid": "661d7fe5f3e325e3b65e4106" },
    "item": "Charger",
    "customerId": { "$oid": "661d6fe5f3e325e3b65e3103" }
  }
]

6. Open mongosh
    - mongosh
7. Left Outer join
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
]);
8. Right Outer Join
db.customers.aggregate([
    {
        $lookup:{
            from :'orders',
            localField: '_id',
            foreignField: 'customerId',
            as: "orderDetails"
        }
    }
])

9. Inner join -> only the intersection 
db.customers.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "customerId",
      as: "orderDetails"
    }
  },
  { $unwind: "$orderDetails" }
]);

Question answers:
`Q) Show only the courses taught by Kartik, Kanak, and Abhishek`
db.mentors.find({
    mentor : {
        $in: ['Kartik','Kanak','Abhishek']
    }
})

db.mentors.aggregate([
    {
        $match:{
            mentor : {
                $in: ['Kartik','Kanak','Abhishek']
            }
        }
    },
    {
        $project : {
            name: 1,
            duration: 1
        }
    },
    {
        $addFields: {
            company: "Coding blocks"
        }
    }
])