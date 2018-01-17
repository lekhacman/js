"use strict";
class RadioStation {

    constructor(frequency) {
        this.frequency = frequency;
    }

    getFrequency() {return this.frequency;}

}

function radioPlayer() {

    const stations = ["a", "b", "c"];

    function *stationList() {
        let index = 0;
        while (stations.length) {
            if (index < stations.length) {
                yield stations[index];
            } else {
                index = 0;
                yield stations[index];
            }
            index++;
        }
    }

    function addStation(frequency) {
        stations.push(new)
    }

    return {

    };
}

const stationList = radioPlayer();
console.log(stationList.next().value);