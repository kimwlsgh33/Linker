// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Terms, User, Post } = initSchema(schema);

export {
  Terms,
  User,
  Post
};