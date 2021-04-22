import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cluster } from '../model/cluster';
import { ClusterService } from './../services/cluster.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cluster-card',
  templateUrl: './cluster-card.component.html',
  styleUrls: ['./cluster-card.component.css']
})
export class ClusterCardComponent implements OnInit {

  @Input()
  cluster: Cluster;

  clusterForm: FormGroup;
  isSubmitted = false;
  constructor(public clusterService: ClusterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.cluster);
    this.clusterForm = this.formBuilder.group({
      name: ['', Validators.required],
      description:[''],
      reportDate:['']
    });
    this.clusterForm.get("name").setValue(this.cluster.name);
    this.clusterForm.get("description").setValue(this.cluster.description);
    this.clusterForm.get("reportDate").setValue(this.cluster.reportDate);
  }
  get formControls(){
    return this.clusterForm.controls;
  }
  submitCluster(): void {
    this.isSubmitted = true;
    if(this.clusterForm.invalid){
      return;
    }
    
    this.cluster.name = this.clusterForm.value.name;
    this.cluster.description = this.clusterForm.value.description;
    this.cluster.reportDate = this.clusterForm.value.reportDate;
    
    this.clusterService.editCluster(this.cluster).subscribe (cluster =>{
      console.log(cluster);
    });
  
  }
}
