import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const clusterSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    reportDate: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface ICluster extends Document {
    name: string;
    description: string;
    reportDate:String
}

//Exportamos modelo para poder usarlo 
//Mongoose#model(name, [schema], [collection], [skipInit])
export default mongoose.model<ICluster>('Cluster', clusterSchema,'Clusters');