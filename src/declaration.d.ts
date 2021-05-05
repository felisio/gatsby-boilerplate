declare module '*.otf';
declare module '*.svg';
declare module '*.ttf';
declare module '*.png';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    namespace jest {
        interface Matchers<R> {
            toHaveStyleRule: import('jest-styled-components').jest.Matchers<R>['toHaveStyleRule'];
        }
    }
}
