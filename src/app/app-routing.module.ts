import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {
    path: "contacts",
    loadChildren: ()=> import("./contacts/contacts.module").then(x => x.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
