import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClustersComponent } from './clusters/clusters.component';
import { ClusterNewComponent } from './cluster-new/cluster-new.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clusters'},
  { path: 'clusters', component: ClustersComponent},
  { path: 'newCluster', component: ClusterNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
