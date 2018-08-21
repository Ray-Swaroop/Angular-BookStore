import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from '../book-form/book-form.component';
const routes: Routes = [
{path: 'api/book', component: BookFormComponent},
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BookRoutingModule { }