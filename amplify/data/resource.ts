import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: `
    type Note @model {
      id: ID!
      content: String!
    }
  `,
});
