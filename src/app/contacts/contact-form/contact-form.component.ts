import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { nanoid } from 'nanoid';
import ContactModel from 'src/app/models/ContactModel';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact!: ContactModel;

  @Input()
  isCreate!: boolean;

  phoneList: Array<String> = [];

  constructor(
    private contactsService: ContactsService, 
    private router: Router, 
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  contactForm!: FormGroup

  ngOnInit(): void {
    if(!this.isCreate){
      this.route.params.subscribe(x => {
        let row = this.contactsService.getContactById(x["id"]) as ContactModel;
        this.contact = row;
        this.contactForm = this.fb.group({
          firstName: row.firstName,
          lastName: row.lastName,
          sex: row.sex,
          category: row.category
        });
        this.phoneList.push(...row.phones.split(","));
      });
    }
  }

  onSubmit(event: Event){
    event.preventDefault();
    if(this.isCreate){
      let c = new ContactModel();
      c.id = nanoid();
      c.firstName = this.contactForm.get("firstName")?.value;
      c.lastName = this.contactForm.get("firstName")?.value;
      c.sex = this.contactForm.get("firstName")?.value;
      c.category = this.contactForm.get("firstName")?.value;
      c.phones = this.phoneList.toString();
      this.contactsService.createContact(c);
    }else{
      this.contact.firstName = this.contactForm.get("firstName")?.value;
      this.contact.lastName = this.contactForm.get("lastName")?.value;
      this.contact.sex = this.contactForm.get("sex")?.value;
      this.contact.category = this.contactForm.get("category")?.value;
      this.contact.phones = this.phoneList.toString();
      this.contactsService.updateContact(this.contact);
    }
  }

  addPhone(phone: String){
    this.phoneList.push(phone);
  }
  removePhone(phone: String){
    this.phoneList.splice(this.phoneList.indexOf(phone), 1);
  }
  reset(){
    
  }

}
