"use strict";

/**
 * Consider you have a website with different pages and you are supposed
 * to allow the user to change the theme. What would you do? Create multiple
 * copies of each of the pages for each of the themes or would you just
 * create separate theme and load them based on the user's preferences?
 * Bridge pattern allows you to do the second i.e.
 *
 * Bridge pattern is about preferring composition over inheritance. Implementation
 * details are pushed from a hierarchy to another object with a separate hierarchy.
 *
 * The bridge pattern is a design pattern used in software engineering that is meant
 * to "decouple an abstraction from its implementation so that the two can vary independently"
 */

class Webpage {
    constructor(theme) {}
    getContent() {}
}
class About extends Webpage {
    constructor(theme) {
        super();
        this.theme = theme;
    }
    getContent() {
        return `About page in ${this.theme.getColor()}`;
    }
}

class Careers extends Webpage {
    constructor(theme) {
        super();
        this.theme = theme;
    }
    getContent() {
        return `Careers page in ${this.theme.getColor()}`;
    }
}

class Theme {
    getColor() {}
}
class DarkTheme extends Theme {
    getColor() { return "Dark black";}
}
class LightTheme extends Theme {
    getColor() {return "Off white";}
}
class AquaTheme extends Theme {
    getColor() {return "Light blue";}
}

const darkTheme = new DarkTheme();
const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());