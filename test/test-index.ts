import * as assert from 'power-assert';
import * as nock from 'nock';
import { Backlog, ActivityType, Order } from '../src/index';
import * as dotenv from 'dotenv';
dotenv.config();

require('isomorphic-fetch');

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
