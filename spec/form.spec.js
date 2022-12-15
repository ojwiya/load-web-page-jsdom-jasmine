// Jasmine Specification Suite

// Imports
const { serverListening } = require('server-listening');
const { JSDOM } = require('jsdom');

// Setup
const url = 'file:///home/projects/github-rcyqjx/index.html';
const jsdomOptions = { resources: 'usable', runScripts: 'dangerously' };
let dom;
const loadWebPage = () =>
  JSDOM.fromFile('index.html', jsdomOptions)
    .then(serverListening.jsdomOnLoad)
    .then((jsdom) => (dom = jsdom));
const closeWebPage = () => serverListening.jsdomCloseWindow(dom);

////////////////////////////////////////////////////////////////////////////////
describe('The web page', () => {
  beforeAll(loadWebPage);
  afterAll(closeWebPage);

  it('has the correct URL -> ' + url, () => {
    const actual = { url: dom.window.location.href };
    const expected = { url: url };
    expect(actual).toEqual(expected);
  });

  it('has exactly one header', () => {
    const $ = dom.window.$;
    const actual = {
      header: $(':header').length,
    };
    const expected = { header: 1 };
    expect(actual).toEqual(expected);
  });
});

////////////////////////////////////////////////////////////////////////////////
describe('The document content', () => {
  beforeAll(loadWebPage);
  afterAll(closeWebPage);

  it('has a first name input', () => {
    const html = dom.window.document.documentElement.outerHTML;
    const $ = dom.window.$;
    const actual = $('#fname').val();

    const expected = 'John';

    expect(actual).toEqual(expected);
  });
});
