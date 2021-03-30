import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import ContactModel from 'src/app/models/ContactModel';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  allContacts: ContactModel[] = [];
  deleteActive: boolean = false;
  selectedContact: ContactModel = new ContactModel();

  keyword: string = "";
  filteredContacts(){
    if(this.keyword === "") return this.allContacts;
    return this.allContacts.filter(x => x.firstName.includes(this.keyword));
  }

  textChanged(e: Event){
    let input = e.target as any;
    this.keyword = input.value;
  }

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.allContacts = this.contactsService.getContacts();
  }
}
