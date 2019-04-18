# Cost Per View display

This Node.js/React app allows users to view cost per view (CPV) by the following two dimensions:

  - CPV by creative
  - CPV by rotation by day


# Assumptions

I assume that in a real-world scenario there may be a cron job that would handle such a conversion from .csv to .json - thereby making a .json file available for subsequent requests (such as api calls) to make use of...rather than those requests triggering the conversion 

I also made the assumption that the front-end required essentially no user-friendly information, navigation or custom styling...as the meat of this project is more technical in nature

# Technical Overview

### Backend
The backend is responsible for rielding `GET` requests to `/api/spots` and `api/rotations`

Once a request is received, the system reads either `spots.csv` or `rotations.csv`, respectively, and responds with the data in JSON format

### Front

The frontend is a React app that makes use of:

- [React Redux](https://redux.js.org/basics/usage-with-react)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [Reselect](https://github.com/reduxjs/reselect)

While a bit overkill for an app of this size, the above libraries were used with the idea of scalability in mind...both in terms of file/folder structure and component re-use, and the use of memoized selectors to assist with caching

# Ideas for future development/refactoring
- As the size of the .csv data grows, we want to limit the amount of memory that is used to store the data. Some ideas to deal with this are to: 
  - Read the .csv, convert to json and keep it in memory one time and allow multiple requests to `/api/spots` to access the same JSON representation of `spots.csv`

   - Read the `.csv`, convert to a `.json` file and store this on the file system.  Respond to `GET /api/spots` with this `spots.json` file (look into caching for this as well)

- Add tests for our action creators, sagas, and components on the frontend
- add tests for our endpoints on the backend
- add tests for the .csv to .json conversion on the backend

# Getting Started

These instructions will get you a copy of the project up and running on your local machine


## Prerequisites

None

## Installing

Clone the repo and navigate into the folder:

```
cd cpv_analytics
```

Install the dependencies for the project by running the following command from the project's root:

```
npm install
```

This will install all necessary dependencies.  


At this point, you should be ready to run!


## Development

From the project root, go ahead and start the app:

```
npm start
```


## Build

From the project root, go ahead and run 

```
npm run build-client
```


## Running a production build

From the project root, go ahead and run the following command which creates a client build, starts the back-end server and runs the client build.

```
npm run start-prod

```
