import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ContactModel from 'src/app/models/ContactModel';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact!: ContactModel;

  constructor(private router: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(x => {
      this.contact = this.contactsService.getContactById(x['id']) as ContactModel;
    })
  }

}
