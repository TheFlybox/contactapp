import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ContactModel from 'src/app/models/ContactModel';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  @Input()
  isActive!: boolean;

  @Input()
  contact: ContactModel = new ContactModel()

  toggleActive(){
    this.isActive = !this.isActive;
  }

  confirmDelete(){
    this.contactsService.deleteContact(this.contact);
    location.reload();
  }
  
  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
  }

}
