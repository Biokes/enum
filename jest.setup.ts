import '@testing-library/jest-dom';
import fetch, { RequestInfo, RequestInit } from 'node-fetch';
import 'whatwg-fetch';


global.fetch = (fetch as unknown) as (input: globalThis.RequestInfo | URL, init?: globalThis.RequestInit) => Promise<globalThis.Response>;