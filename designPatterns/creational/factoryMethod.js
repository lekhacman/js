"use strict";

/**
 * Real world example:
 * Consider the case of a hiring manager. It is impossible for one person to interview
 * for each of the positions. Based on the job opening, she has to decide and delegate
 * the interview steps to different people.
 *
 * It provides a way to delegate the instantiation logic to child classes.
 *
 * In class-based programming, the factory method pattern is a creational pattern that
 * uses factory methods to deal with the problem of creating objects without having to
 * specify the exact class of the object that will be created. This is done by creating
 * objects by calling a factory method—either specified in an interface and implemented
 * by child classes, or implemented in a base class and optionally overridden by derived
 * classes—rather than by calling a constructor.
 *
 * When to use?
 * Useful when there is some generic processing in a class but the required sub-class is
 * dynamically decided at runtime. Or putting it in other words, when the client doesn't
 * know what exact sub-class it might need.
 */

function Interviewer() {
}
Interviewer.prototype.askQuestions = function () {
    console.log("I'm an interviewer");
};

function Developer() {
}
Developer.prototype = Object.create(Interviewer.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.askQuestions = function () {
    console.log("Asking about design patterns.");
};

function CommunityExecutive() {
}
CommunityExecutive.prototype = Object.create(Interviewer.prototype);
CommunityExecutive.prototype.askQuestions = function () {
    console.log("Asking about community building.");
};

function HiringManager() {
    // Factory method
    function makeInterviewer() {
        return new Interviewer();
    }
    this.interviewer = makeInterviewer();
}
HiringManager.prototype.takeInterview = function () {
    this.interviewer.askQuestions();
};

function DevelopmentManager() {
    function makeInterviewer() {
        return new Developer();
    }
    this.interviewer = makeInterviewer();
}
DevelopmentManager.prototype = Object.create(HiringManager.prototype);
DevelopmentManager.prototype.constructor = DevelopmentManager;

function MarketingManager() {
    function makeInterviewer() {
        return new CommunityExecutive();
    }
    this.interviewer = makeInterviewer();
}
MarketingManager.prototype = Object.create(HiringManager.prototype);
MarketingManager.prototype.constructor = MarketingManager;

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
// const test = marketingManager.makeInterviewer();
// console.log(test.askQuestions());