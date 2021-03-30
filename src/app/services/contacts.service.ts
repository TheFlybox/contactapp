import { Injectable } from '@angular/core';
import { StorageMap, JSONSchema  } from '@ngx-pwa/local-storage';
import ContactModel from '../models/ContactModel';
import { deserialize, serialize } from 'typescript-json-serializer';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private storage: StorageMap) { }

  private COLLECTION_KEY = "contactList";
  private contactJson = localStorage.getItem(this.COLLECTION_KEY);
  private contacts: ContactModel[] = this.contactJson ? JSON.parse(this.contactJson) : [];
  private updateCollection = ()=> localStorage.setItem(this.COLLECTION_KEY, JSON.stringify(this.contacts));

  getContacts(){
    return this.contacts.map(x => x);
  }
  getContactById(id: string){
    return this.contacts.find(x => x.id === id);
  }
  createContact(contact: ContactModel){
    this.contacts.push(contact);
    this.updateCollection();
  }
  updateContact(contact: ContactModel){
    let target = this.contacts.find(x => x.id === contact.id);
    Object.assign(target, contact);
    this.updateCollection();
  }
  deleteContact(contact: ContactModel){
    this.contacts = this.contacts.filter(x => x.id !== contact.id);
    this.updateCollection();
  }
}
