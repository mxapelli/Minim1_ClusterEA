import { Component, OnInit } from '@angular/core';
import { Cluster } from '../model/cluster';
import { Router } from '@angular/router';
import { ClusterService } from './../services/cluster.service';
@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {
  clusters: Cluster[];
  constructor(public clusterService: ClusterService, private router: Router) { }

  ngOnInit(): void {
    this.clusterService.getClusters().subscribe (clusters =>{
      this.clusters = clusters;
      console.log(clusters);
    })
  }

  addCluster(){
    this.router.navigateByUrl('/newCluster');
  }

 
}
