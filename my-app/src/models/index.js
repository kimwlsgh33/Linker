// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Terms, Post, User } = initSchema(schema);

export {
  Terms,
  Post,
  User
};