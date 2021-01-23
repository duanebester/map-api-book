# Design and Build API

One of the biggest problems with software today is that people do not spend enough time in the "design" phase. It has become easier to iterate and change code, but if we spend some extra time up front and think through our system, we will mitigate a lot of potential changes.

Why are we using two different databases?

For the purpose of this course, it's to show you how to setup two different kinds of databases. In reality, we could use either one for Users and Data with GPS coordinates. Mongo is more freeform and has a nice way to query and aggregate with GPS. Postgres is relational and suites models that are connected to eachother. For example, if we have a User, and that user has a few addresses, we have a One To Many relationship. We could get Mongo to play well with relationships, and we can make Postgres aggregate based on latitude/longitude, but we will learn a bit about both and leverage their strengths.

My advice for a real world application: If you don't know how your data will be structured and connected, prototype with a NoSQL database such as Mongo. If you have well-defined models that have structured relationships go with Postgres. 

So right now our system might be something like this:

![System One](../assets/system_one.png)
