import { Server, Model } from "miragejs";
export function makeServer(): Server{
    const server = new Server({
        models:{
            students:Model
        },
        routes(): void {
            this.namespace = "/api";
            this.get("/getStudents", schema => {
                return schema.db.students;
            });
            this.post("/addStudents",(schema,request) => {
                const theStudent = JSON.parse(request.requestBody);
                return schema.db.student.insert(theStudent);
            });
            return;
        },
        seeds(server): void{
            server.db.loadData({
                students:[
                    { id:'0', firstName:'John', lastName: 'Doe', streetNumber:'1234 St. Name', city:'New York', phone:'+1 1234567890', gpa:'4.0', photoURL:'https://gravatar.com/avatar/4b74abd31f836d8a222665b22350bf30?s=400&d=robohash&r=x'},
                    { id:'1', firstName:'Another', lastName: 'Lastname', streetNumber:'1234 St. Name', city:'New York', phone:'+1 1234567890', gpa:'4.0', photoURL:'https://gravatar.com/avatar/4b74abd31f836d8a222665b22350bf30?s=400&d=robohash&r=x'},
                ]
              });
            return;
        }
    });
    return server;
}