import { isHTML } from '../../../src/helpers/domHelper';

describe('isHTML', () => {
    [
        {
            name: 'an empty string',
            input: '',
            output: { isHtml: false, isWrapped: false }
        },
        {
            name: 'a simple string',
            input: 'panda',
            output: { isHtml: false, isWrapped: false }
        },
        {
            name: 'a string with <',
            input: 'panda < tiger',
            output: { isHtml: false, isWrapped: false }
        },
        {
            name: 'a string with end block',
            input: 'panda </div>',
            output: { isHtml: false, isWrapped: false }
        },
        {
            name: 'a string with start block',
            input: 'panda <div> tiger',
            output: { isHtml: true, isWrapped: false }
        },
        {
            name: 'a wrapped string',
            input: '<div>panda</div>',
            output: { isHtml: true, isWrapped: true }
        },
        {
            name: 'a string with link',
            input: 'panda <a>link</a>',
            output: { isHtml: true, isWrapped: false }
        }
    ].forEach(({ input, output, name }) => {
        it(`should ${output ? '' : 'not '}detect HTML content in ${name}`, () => {
            expect(isHTML(input)).toEqual(output);
        });
    });
});
