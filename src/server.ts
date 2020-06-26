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
            this.post("/addStudent",(schema, request) => {
                const theStudent = JSON.parse(request.requestBody);
                return schema.db.students.insert(theStudent);
            });
            this.del("/students/:id");

            return;
        },
        seeds(server): void{
            server.db.loadData({
                students:[
                    { id:Math.random().toString(36).substr(2, 9), firstName:'John', lastName: 'Doe', streetNumber:'1234 St. Name', city:'New York', phone:'+1 1234567890', gpa:'4.0', photoURL:'https://gravatar.com/avatar/4b74abd31f836d8a222665b22350bf30?s=400&d=robohash&r=x'},
                    { id:Math.random().toString(36).substr(2, 9), firstName:'Ray', lastName: 'Luther', streetNumber:'423 St. Name', city:'California', phone:'+1 1234567890', gpa:'2.0', photoURL:'https://avatars.dicebear.com/v2/avataaars/d743a9cc62665a9cadff121ff48cb405.svg'},
                ]
              });
            return;
        }
    });
    return server;
}