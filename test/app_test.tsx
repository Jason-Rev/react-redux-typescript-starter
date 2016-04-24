/* tslint:disable:no-unused-variable */
import React = require('react');
/* tslint:enable:no-unused-variable */
import * as enzyme from 'enzyme';
import {expect} from 'chai';
import jsdomGlobal = require('jsdom-global');
import {App} from '../src/components/App';

jsdomGlobal();
document.body.innerHTML = `<div id="app"></div>`;
import {AppRoot} from '../src/app';


describe('Top Level Application Test', () => {

    it('shows how to shallow render the app', () => {
        const wrapper = enzyme.shallow(
            <AppRoot />
        );
        expect(wrapper.find(App)).to.have.length(1);
    });
});
