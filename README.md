# .env variables

PORT=8080
C_USERNAME=leao
C_PASSWORD=password143
DATABSE=app
TESTDB=test
BCRYPT_PASSWORD=dealapp
SALT_ROUNDS=10
TOKEN_SECRET=67ff21375f44242b0580e28f7a18043786bc5a6831e8c61549f0b1aaf7405aee856217c162560f6eb6c0cb223fbb84c0f4c58ad9eda49863b24adea93fd243c7
ADMIN_SECRET=ed3a333f0b622ca7636701c5f3237b111555b65870c698155ca19595bd34b9da8e09299ee0736ce86414ca82988aa3eca5d3e0c63f5164dacafd7b0ec6ea0eca

# project structure

index.js is the file were our application starts and the we have router
using app.use(/ or /api ,router) if you use / or /api it while deliver you to the router
router while go to indexroute which is responsible for routing api into different routes such as adminRoute , userRoute
& postRoute,

# endpoints

## localhost:8080/api/admin/statistics

for admin statistics and returns all required fields
and response.body={
"totalPendingPosts": 30,
"totalApprovedPosts": 13,
"totalRejctedPosts": 0,
"totalPosts": 43,
"totalCommentsOnPosts": 0,
"totalInteractionsOnPosts": 6,
"totalInteractionsOnComments": 0,
"totalIntractions": 6
}

## localhost:8080/api/user/login

for authentication and authorization return a jwt token consisting of secret which is crypted 64 random bytes and different token for admin and password is bcrypted using 'dealapp'as secret
and request.body={
"email":"admin@deal.com",
"password":"password"

    }

response.body={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UzNjQ5NTBhN2M3NTQyNjQ4NGFmMiIsInVzZXJuYW1lIjoiYWRtaW5AZGVhbC5jb20iLCJpYXQiOjE2NjkyMTYxNzJ9.CCBaJWkoOYsFH0aenWlty3ghi-e8AQ3335B1yO5El-o"}

## localhost:8080/api/post/1

get all posts which is designed to help user and admin with returning approved posts and other data for normal user and return all posts with other data for admin 1 in the url represents page number.

as for the required tasks for this items i did it all but i couldn't group the interactions together so the api preforms the asked job but without grouping the interactions together
and here is an example of admin return results:

[
{
"data": [
{
"\_id": "637e04c1b1c53c8ff83387f0",
"title": "post title",
"body": "post body",
"status": "APPROVED",
"**v": 0,
"interactions": [
{
"\_id": "637e6ccac53f6093fa5ca1e3",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
},
{
"\_id": "637e6cedf180883f8d9cc984",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
},
{
"\_id": "637e6cf5f180883f8d9cc985",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
},
{
"\_id": "637e6cfaf180883f8d9cc986",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
},
{
"\_id": "637e6cfef180883f8d9cc987",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
},
{
"\_id": "637e6d02f180883f8d9cc988",
"type": "SAD",
"post": "637e04c1b1c53c8ff83387f0",
"comment": "",
"createdBy": {
"\_id": "1234",
"email": "user@example.com",
"role": "user"
},
"**v": 0
}
]
},
{
"\_id": "637e067f52883125672c10c2",
"title": "post title",
"body": "post body",
"status": "PENDING",
"**v": 0,
"interactions": []
},
{},
{},
{},
{},
{},
{},
{},
{}
],
"total": [
{
"total": 49
}
],
"page": "1",
"limit": 10,
"totalpages": 5,
"hasNextPage": true,
"hasPrevPage": false
}
]

## localhost:8080/api/post/ which is a post api responsable for creating a post that will automaticly recieve a pending status and creator user info will be assigned to the createdBy field it just takes title and body

req.body={
"title":"post title",
"body":"post body"
}

# schemes

## user

\_id  
username
password
role

## post

\_id
title
body
createdBy

## comment

\_id
body
post(post_id)
createdBy

## interaction

\_id
body
post(post_id) its either a post or a comment one of them will be assigned as empty string
comment (comment_id)
createdBy
