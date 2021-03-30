import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {
    path: "list",
    component: ContactListComponent
  },
  {
    path: "",
    component: ContactListComponent
  },
  {
    path: "create",
    component: ContactCreateComponent
  },
  {
    path: "detail/:id",
    component: ContactDetailComponent
  },
  {
    path: "edit/:id",
    component: ContactEditComponent
  },
  {
    path: "delete/:id",
    component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
