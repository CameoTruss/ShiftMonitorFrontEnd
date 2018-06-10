const express = require('express');
const bodyParser = require('body-parser');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { find, filter } = require('lodash')
var books_data = require('./books_mock_data.json');
var jobs_data = require('./jobs_mock_data.json');


/** local Apollo server:
 * follow steps here to start mock server:
 * https://www.apollographql.com/docs/apollo-server/example.html
 * Mutation example:
 * https://www.apollographql.com/docs/graphql-tools/generate-schema.html
 * chrome must be started to allow CORS:
 * https://stackoverflow.com/a/3177718
 * 
 */

// Some fake data
const books = books_data;
const jobs = jobs_data;

// The GraphQL schema in string form
const typeDefs = `
  type Query { 
    books: [Book]
    jobs: [Job]
  }
  # this schema allows the following mutation:
  type Mutation {
    addJobToShift (
      jobId: String!
    ): Job
  }
  type Book { 
    title: String, 
    author: String 
  }
  type Job {
    JobId: String,
    JobNumber: String,
    CustomerId: String,
    Added: Boolean
  }
`;

// The resolvers
const resolvers = {
  Query: { 
    books: () => books,
    jobs: () => jobs,
    
  },
  // https://www.apollographql.com/docs/graphql-tools/generate-schema.html
  Mutation: {
    addJobToShift: (_, { jobId }) => {
      const job = find(jobs, { JobId: jobId });
      if (!job) {
        throw new Error(`Couldn't find job with JobId ${jobId}`);
      }
      job.Added = !job.Added;
      return job;
    },
  },
};

/*
goto: server page: http://localhost:3000/graphiql
try these graph ql examples:

query GetJob {
  jobs {
    JobId
    Added
  }
}
mutation AddJob($jobId_var: String!) {
  addJobToShift(jobId: $jobId_var) {
    JobId
    Added
  }
}

// query variables
{
  "jobId_var": "J02-guid"
}
*/

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});