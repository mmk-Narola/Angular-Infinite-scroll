import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleFourComponent } from './example-four/example-four.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleOneComponent,
  },
  {
    path: 'example-one',
    component: ExampleOneComponent,
  },
  {
    path: 'exmple-two',
    component: ExampleTwoComponent,
  },
  {
    path: 'exmple-three',
    component: ExampleThreeComponent,
  },
  {
    path: 'exmple-four',
    component: ExampleFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
