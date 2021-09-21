## Classes Endpoints
POST - Create a new class
https://bwanywherefitness.herokuapp.com/api/classes/create
Expects an object:
```
{
    "class_name": "Free Fun",
    "class_type": "Cardio",
    "class_duration": "90",
    "class_intensity": "Beginner",
    "class_location": "Track",
    "class_max": "10" // NOTE THIS IS DIFFERENT
}
```
Will Return
```
{
    "class_id": 3,
    "class_name": "Free Fun",
    "class_type": "Cardio",
    "class_duration": "90",
    "class_intensity": "Beginner",
    "class_location": "Track",
    "class_max_attendees": "10"
}
```
GET - returns all classes
https://bwanywherefitness.herokuapp.com/api/classes

GET - returns class by id
https://bwanywherefitness.herokuapp.com/api/classes/:id

PUT - update the class
https://bwanywherefitness.herokuapp.com/api/classes/:id
```
{ // EXPECTS AN OBJECT
    "class_name": "Zumba",
    "class_type": "Cardio",
    "class_duration": "90",
    "class_intensity": "Beginner",
    "class_location": "Gym A",
    "class_max": "10"
}
```
POST - sign up for a class
```
{ // EXPECTS
    "class_id": 1, // CLASS USER IS SIGNING UP FOR
    "user_id":1 // USER ID OF THE ATTENDEE
}
```

GET - Get a list of all attendees for a certain class:
https://bwanywherefitness.herokuapp.com/api/class/:id

```
{
    "attendees": [
        "Ashley"
    ],
    "total_attendees": 1,
    "class_name": "Zumba"
}
```
