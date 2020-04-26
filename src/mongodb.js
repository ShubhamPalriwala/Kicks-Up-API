const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='kicksup'

MongoClient.connect(connectionURL,
  {
  useNewUrlParser:true
},(error,client)=>
{
  if(error)
  {
    return console.log('Unable to connect')
  }

  const db=client.db(databaseName)

  db.collection('users').insertOne(
    {
    name:'Shubham',
    age:18
  })
})
