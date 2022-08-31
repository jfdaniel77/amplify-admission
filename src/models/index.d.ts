import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Address {
  readonly id: string;
  readonly city?: string | null;
  readonly country: string;
  readonly personalID: string;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Contact {
  readonly id: string;
  readonly mobile?: string | null;
  readonly home?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}

export declare class Personal {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly addresses?: (Address | null)[] | null;
  readonly contacts?: Contact | null;
  readonly birthday: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly personalContactsId?: string | null;
  constructor(init: ModelInit<Personal, PersonalMetaData>);
  static copyOf(source: Personal, mutator: (draft: MutableModel<Personal, PersonalMetaData>) => MutableModel<Personal, PersonalMetaData> | void): Personal;
}