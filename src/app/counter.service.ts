export class CounterService
{
    activeToInactiveCounter=0;
    inactiveToActiveCounter=0;

    incrementActiveToInactive()
    {
        this.activeToInactiveCounter++;
        console.log('Active To Inactive:'+this.activeToInactiveCounter);
    }
    incrementInactiveToActive()
    {
        this.inactiveToActiveCounter++;
        console.log('Inactive To Active:'+this.inactiveToActiveCounter);
    }
}