# Models

A User, to us, might need properties such as:

* First Name
* Last Name
* Email

But what about on the backend? We'd probably also need:

* ID
* Password
* Date Created
* Date Updated

And perhaps we'd like to support User sessions?

* Session ID

And tracking the User's last login?

* Last Login Date

And supporting forgot password flows?

* Phone Number
* Email Verified
* Verification Code

The list goes on and on... For now, let's start simple:

### User

* ID
* Email
* Password
* Date Created

### Customer

* ID
* Name
* Customer Address
* Sensors
* Date Created

### Customer Address

* ID
* Address One
* Address Two
* Zip Code
* Phone
* Email
* Date Created

### Sensor

* ID
* Name
* Customer ID
* Date Created

### SensorEntry

* ID
* Sensor ID
* Customer ID
* Temperature
* Date Created
* Location
    * Latitude
    * Longitude