import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cluster } from '../model/cluster';
@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(private http:HttpClient) { }

  getClusters(){
    return this.http.get<Cluster[]>(environment.apiURL + '/cluster/all');
  }

  newCluster(newCluster: Cluster) {
    return this.http.post(environment.apiURL + '/cluster/new', newCluster);
  }

  editCluster(editCluster: Cluster) {
    return this.http.post(environment.apiURL + '/cluster/edit' ,editCluster);
  }
}
