import {v4 as uuidV4} from "uuid";

class Movie {
    id: string;
    title: string;
    overview: string;
    category: string ;
    //actors: [];
    releaseDate: Date;
    time: number;
    directedBy: string;
    
    constructor() {
        if(this.id) {
            this.id = uuidV4();
        }
    }

}

export { Movie};