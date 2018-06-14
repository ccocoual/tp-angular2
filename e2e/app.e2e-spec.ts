import { TpAngularPage } from './app.po';

describe('tp-angular App', () => {
  let page: TpAngularPage;

  beforeEach(() => {
    page = new TpAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
