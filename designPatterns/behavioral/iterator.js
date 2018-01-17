"use strict";
class RadioStation {

    constructor(frequency) {
        this.frequency = frequency;
    }

    getFrequency() {return this.frequency;}

}

const stationList = new Set();

const rs89 = new RadioStation(89);
const rs101 = new RadioStation(101);
const rs102 = new RadioStation(102);
const rs103p2 = new RadioStation(103.2);

stationList.add(rs89);
stationList.add(rs101);
stationList.add(rs102);
stationList.add(rs103p2);

// Iterator
const stationsIterator = stationList.values();

for (let i = 0; i < stationList.size; i++) {
    const station = stationsIterator.next().value;
    console.log(station.getFrequency());
}

stationList.delete(rs89);