import { APIBase, APIInit, APIBuilder } from './api';
import config from './config'
import { NullPromiseConstructorError, UnresolvedIdentityError } from './exceptions'
import { isAPIResponse, isAPIResponseStatus } from './predicate';
import request from './request';


export default {
    APIBase,
    APIBuilder,
    APIInit,
    NullPromiseConstructorError,
    UnresolvedIdentityError,
    config,
    isAPIResponse,
    isAPIResponseStatus,
    request,
};
