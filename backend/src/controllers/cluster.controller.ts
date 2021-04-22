import e, {Request, Response} from 'express';
import Cluster from '../models/cluster';

const getClusters = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Cluster.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getCluster = async (req: Request, res: Response) => {
    try{
        const results = await Cluster.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}
function newCluster (req: Request, res: Response): void {
    let cluster = new Cluster({
        "name" : req.body.name,
        "description" : req.body.description,
        "reportDate" : req.body.reportDate
    });
    cluster.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) =>{
        console.log(err);
        return res.status(500).json(err);
    })
}
const editCluster = async (req: Request, res: Response) => {

    let cluster = new Cluster({
        "_id": req.body._id,
        "name" : req.body.name,
        "description" : req.body.description,
        "reportDate" : req.body.reportDate
    });
    var query = {'_id': cluster.id};
    delete cluster._id; 
    //Non-null assertion operator ! or ?
    await Cluster.update(query, cluster, { multi: false }, function(err,result) {
        if(result.nModified ==1){
            //Found and Updated
            return res.status(200).json(cluster);
        }else if(result.nModified==0){
            //Not Found
            return res.status(400).json();
        }
        if (err) {
            return res.status(500).json();
          }
    });
}
export default {getClusters, getCluster, newCluster,editCluster};