const alternateRouteData = require('../data/alternateRoutes.json');
const data = require('../data/data.json');
const distanceData = require('../data/distance.json');

module.exports = function(){

    this.alternateRoutes = function(origin, destination){
        
        
        const result = [];
        var minDistance=100000;
        for(key in alternateRouteData.trains)
        {
            const betweenOriginandConnection = [];
            const betweenConnectionandDestination = [];
            var distanceOriginConnection;
            var distanceConnectionDestination;
            var totalDistance;
                for(train in data.trains[origin])
                {
                    
                    
                    if(alternateRouteData.trains[key][train] != null && key != origin && key != destination)
                    {
                        distanceOriginConnection = Math.abs(parseInt(distanceData.trains[train][key].distance)-
                        parseInt(distanceData.trains[train][origin].distance));
                        betweenOriginandConnection.push(train);
                    }
                }

                for(train in data.trains[destination])
                {
                    if(alternateRouteData.trains[key][train] != null && key != origin && key != destination)
                    {
                      
                        distanceConnectionDestination = Math.abs(parseInt(distanceData.trains[train][key].distance)-
                        parseInt(distanceData.trains[train][destination].distance));
                        betweenConnectionandDestination.push(train);
                    }
                }

                if(betweenConnectionandDestination.length != 0 && betweenOriginandConnection.length != 0)
                {
                    totalDistance = distanceOriginConnection+distanceConnectionDestination;
                    if(minDistance > totalDistance)
                    {
                        minDistance=totalDistance;
                    }
                    result.push({"connection": key,
                    "distance":totalDistance,
                     "origin-connection": betweenOriginandConnection, "connection-destination"
                    :betweenConnectionandDestination});
                }
                
        }
        
        return filterByDistance(result,minDistance);
    }

    this.filterByDistance = function(results, minDistance)
    {

        const result = [];
        for(key in results)
        {
            
            if(minDistance < 1000 && results[key].distance <= 1.2*minDistance)
            {result.push(results[key]);}
            if(minDistance > 1000 && results[key].distance <= 1.03*minDistance)
            {
                result.push(results[key]);
            }

        }
        return result;
    }


}