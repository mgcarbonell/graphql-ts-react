# GraphQL & Sequelize Demo

## Getting the database set up

You will need Docker in order to install a containerized MySQL or
Postgres dev environment. After getting docker, run the following 
command anywhere.



```sh
docker run \
 -p 0.0.0.0:7999:3306 \
 --name gsd-db \
 -e MYSQL_ROOT_PASSWORD=password \
 -e MYSQL_USER=gsd-dev \
 -e MYSQL_DATABASE=gsd \
 -d mysql:5.7.20
```

This will create a Docker instance called `gsd-db`, running MySQL
v5.7.20, with the root password using `password`. It also creates
a database called `gsd-dev` (with password `password`), and assigns
that user full permissions onto the `gsd` database.

```sh
docker run -d \
 --name gsd-db \
 -p 5432:5432 \
 -e POSTGRES_PASSWORD=secret \
 -e PGDATA=/pgdata \
 -v /gsd-data:/gsd-data
 postgres
```