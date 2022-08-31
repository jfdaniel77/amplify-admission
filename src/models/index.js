// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Address, Contact, Personal } = initSchema(schema);

export {
  Address,
  Contact,
  Personal
};