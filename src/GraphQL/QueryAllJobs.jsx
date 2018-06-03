

import gql from "graphql-tag";

export default gql(`
  query getJobs {
    jobs {
      id,
      customerName
  }
}
`)