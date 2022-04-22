import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService
{
    activeUsers=['ram','sita'];
    inactiveUsers=['radha','krishna'];

    constructor(private counterService: CounterService)
    {}
    setToActive(id:number)
    {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id , 1);
        this.counterService.incrementInactiveToActive();
    }
    setToInactive(id:number)
    {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id , 1);
        this.counterService.incrementActiveToInactive();
    }
}