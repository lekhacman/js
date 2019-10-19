'use strict';
class JobPost {
  constructor(title) {
    this.title = title;
  }
}

class JobSeeker {
  constructor(name) {
    this.name = name;
  }

  onJobPosted(job) {
    if (!(job instanceof JobPost)) {
      throw new TypeError();
    }

    console.log(`Hi ${this.name}! New job posted: ${job.title}`);
  }
}

class JobPostings {
  constructor() {
    this.observers = new Set();
  }

  notify(jobPosting) {
    if (!(jobPosting instanceof JobPost)) {
      throw new TypeError();
    }

    this.observers.forEach(observer => {
      observer.onJobPosted(jobPosting);
    });
  }

  attach(observer) {
    if (!(observer instanceof JobSeeker)) {
      throw new TypeError();
    }

    this.observers.add(observer);
  }

  addJob(jobPosting) {
    if (!(jobPosting instanceof JobPost)) {
      throw new TypeError();
    }

    this.notify(jobPosting);
  }
}

const john = new JobSeeker('John Doe');
const mary = new JobSeeker('Mary Lou');

const jobPostings = new JobPostings();
jobPostings.attach(john);
jobPostings.attach(mary);

jobPostings.addJob(new JobPost('Software Engineer'));
