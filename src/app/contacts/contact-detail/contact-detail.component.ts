import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ContactModel from 'src/app/models/ContactModel';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact!: ContactModel;

  phoneList: Array<String> = [];

  deleteActive!: boolean;

  constructor(private contactsService: ContactsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.contact = this.contactsService.getContactById(params['id']) as ContactModel;
      this.phoneList = this.contact.phones.split(",");
   });
  }

}
