# Phonebook NodeJS API

## Table of Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [API Docs](#api_docs)

## Introduction <a name="introduction"></a>

This is an API developed with NodeJS using Express as a framework, it is basically a CRUD API for a Phonebook Application.

## Installation <a name="installation"></a>

1. Clone this repository
2. Run ```npm install```
3. Change file ```.example.env``` to ```.env```
4. Add your MongoDB URL to the ```.env``` file

## API Docs <a name="api_docs"></a>

1. **Create User**

Send POST request to the following URI:
```
http://localhost:3000/register
```

Inside the POST body, it should be a JSON object with the following structure:

```
{
    name: ------
    phone: -----
}
```

2. **Login**

In order to get access to the API endpoints, the users need to authenticate themselves with their credentials.

Send GET request with basic auth to:
```
http://localhost:3000/login
```
The response it should be a token that the user need in order to make all the requests.

3. **Create PhoneBook Entry**

In order to create a PhoneBook Entry, send a POST request with the token in the header inside the key name ```x-access-token``` to:

```
http://localhost:3000/phonebook
```

With the request, send inside the body the info that you want to save.

```
{
    name: --------,
    phone: --------
}
```

4. **Get a Phone**

You can get information about a Customer by using the customer name or the address.

In order to do this, make a GET request with the token in the header inside the key name ```x-access-token``` to:

```
http://localhost:3000/phonebook/<Phonebook_ID>
```

5. **Update Phonebook entry**

In order to Update a phonebook entry, send a PUT request with the token in the header inside the key name ```x-access-token``` to:

```
http://localhost:3000/phonebook/<Phonebook_ID>
```

With the request, send inside the body the changes that you want to make in JSON format.

```
{
    name: 'new name',
    phone: 'new phone'
}
```

6. **Delete Phonebook entry**

To delete a new order, send a DELETE request with the token in the header inside the key name ```x-access-token``` to:

```
http://localhost:3000/phonebook/<Phonebook_ID>
```

7. **Search PhoneBook**

In order to Search for different entries (by name or phone), send a GET request with the token in the header inside the key name ```x-access-token``` to:

```
http://localhost:3000/phonebook/search/<name or phone>?type=<name or phone>
```