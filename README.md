### Class Endpoints:

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

## Classes Endpoints
POST - Create a new class
Expects an object:
```
{
    "class_name": "Zumba",
    "class_type": "Cardio",
    "class_duration": "90",
    "class_intensity": "Beginner",
    "class_location": "Gym A",
    "class_max": "30"
}
```