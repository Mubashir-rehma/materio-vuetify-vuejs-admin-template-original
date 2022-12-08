# Database Connection

Following are some database connection possibilities. It's not mandatory to use one of them but given for demo purpose.

::: tip NOTE
We have not given any migrations with the template as it's a Vue Integration only and all the data shown are using fake-db inside `resources/{ts/js}` folder
:::

## For SQLite

```sh
#create database
touch database/database.sqlite
```

Copy file **".env.example"**, and change its name to **".env"**. Then in file **".env"** replace this database configuration:

```properties
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

To this:

```properties
DB_CONNECTION=sqlite
DB_DATABASE=/path_to_your_project/database/database.sqlite
```

## For PostgreSQL

**Step 1:** Install PostgreSQL

**Step 2:** Create user

```bash
$ sudo -u postgres createuser --interactive
enter name of role to add: laravel
shall the new role be a superuser (y/n) n
shall the new role be allowed to create database (y/n) n
shall the new role be allowed to create more new roles (y/n) n
```

**Step 3:** Set user password

```bash
$ sudo -u postgres psql
postgres= ALTER USER laravel WITH ENCRYPTED PASSWORD 'password';
postgres= \q
```

**Step 4:** Create database

```bash
sudo -u postgres createdb laravel
```

**Step 5:** Copy file ".env.example", and change its name to ".env". Then in file ".env" replace this database configuration:

```properties
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

To this:

```properties
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=password
```

## For MySQL

Copy file ".env.example", and change its name to ".env". Then in file ".env" complete this database configuration:

```properties
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
