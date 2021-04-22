import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cluster } from '../model/cluster';
import { ClusterService } from './../services/cluster.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cluster-new',
  templateUrl: './cluster-new.component.html',
  styleUrls: ['./cluster-new.component.css']
})
export class ClusterNewComponent implements OnInit {

  
  clusterForm: FormGroup;
  isSubmitted = false;
  constructor(public clusterService: ClusterService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("Created new Cluster!!")
    this.clusterForm = this.formBuilder.group({
      name: ['', Validators.required],
      description:[''],
      reportDate:['']
    });
  }
  get formControls(){
    return this.clusterForm.controls;
  }
  submitCluster(): void {
    this.isSubmitted = true;
    if(this.clusterForm.invalid){
      return;
    }
    
    let cluster = {'_id':"",'name':this.clusterForm.value.name, 'description':this.clusterForm.value.description,'reportDate':this.clusterForm.value.reportDate};
    console.log("New: ");
    console.log(cluster);
    this.clusterService.newCluster(cluster).subscribe ((cluster: Cluster) =>{
      //Return to Main Cluster Page
      this.router.navigateByUrl('/clusters');
    });
  
  }
}
