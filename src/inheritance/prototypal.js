"use strict";

function ResourceBaseService() {
	this.name = "ResourceBaseService";
	this.data = {
		email: "khacmanle@gmail.com"
	};
}

ResourceBaseService.prototype.hello = function () {
	console.log(`Hello, my name is ${this.name}`);
};

ResourceBaseService.prototype.printData = function () {
	console.log(`Data: ${JSON.stringify(this.data)}`);
};

const resourceService = new ResourceBaseService();
resourceService.hello();

function QuotationService() {
	this.data = {email: "quotation"};
}

QuotationService.prototype = Object.create(ResourceBaseService.prototype);

const quotationService = new QuotationService();
quotationService.hello();

function ApplicationService() {
	this.data = {name: "application"};
}

ApplicationService.prototype = Object.create(ResourceBaseService.prototype);

