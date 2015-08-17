import { APIBase, APIInit, APIBuilder } from './api';
import config from './config'
import { PromiseNullError, UnresolvedIdentityError } from './exceptions'
import { isAPIResponse, isAPIResponseStatus } from './predicate';
import request from './request';


export default {
    APIBase,
    APIBuilder,
    APIInit,
    PromiseNullError,
    UnresolvedIdentityError,
    config,
    isAPIResponse,
    isAPIResponseStatus,
    request,
};
