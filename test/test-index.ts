import * as assert from 'power-assert';
import * as nock from 'nock';
import * as FS from 'fs';
import { Backlog, ActivityType, Order } from '../src/index';
import * as dotenv from 'dotenv';
dotenv.config();

require('isomorphic-fetch');

const toBlob = (data) => {

  data.body.pipe(FS.createWriteStream("aaaa.png"));


  const writable = require('stream').Writable();
  let buffer;

  writable._write = (chunk, enc, next) => {
    buffer += chunk;
    next();
  };
  console.log("aaaa");
  return new Promise((resolve, reject) => {
    console.log(data.body.pipe);
    data.body.pipe(writable).on('end', () => {
      console.log("aaaaaaaaaaaaaaaaaaaaa");
      resolve(buffer)
    });
  });

}


describe("main", () => {

  let backlog: Backlog;

  beforeEach(() => {
    const spaceId = <string>process.env.BACKLOG_SPACE_ID;
    const apiKey = <string>process.env.BACKLOG_API_KEY;
    backlog = new Backlog({ spaceId, apiKey });
  });

  afterEach(() => {
    backlog = null;
  })

  it('can be get space', (done) => {
    backlog.getSpace().then((data) => {
      done();
    }).catch((err) => {
      throw err;
    });
  });

  it('can be get space icon', (done) => {
    backlog.getSpaceIcon()
      .then((data) => {
        data.body.pipe(FS.createWriteStream(`./${data.filename}`));
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
  });

  it('can be get projects', (done) => {
    backlog.getProjects().then((data) => {
      done();
    }).catch((err) => {
      throw err;
    });
  });

  it('can be get space activities', (done) => {
    backlog.getSpaceActivities({
      activityTypeId: [ActivityType.IssueCreated],
      minId: 1,
      maxId: 10,
      count: 5,
      order: "desc"
    }).then((data) => {
      done();
    }).catch((err) => {
      throw err;
    });
  });

  it('can be get space notification', (done) => {
    backlog.getSpaceNotification().then((data) => {
      done();
    }).catch((err) => {
      throw err;
    });
  });





});
