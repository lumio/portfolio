// Mock fetch
import * as fetch from 'jest-fetch-mock';
global.fetch = fetch;

// Set up enzyme
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );
