import { TpAngular2Page } from './app.po';

describe('tp-angular2 App', () => {
  let page: TpAngular2Page;

  beforeEach(() => {
    page = new TpAngular2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
