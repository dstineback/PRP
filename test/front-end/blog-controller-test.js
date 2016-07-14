'use strict';

const angular = require('angular');
require('angular-mocks');
require('../../app/js/client.js');

describe('Controller Tests', () => {

  describe('blogController Test', () => {
    let bc;
    let $httpBackend;

    beforeEach(() => {
      angular.mock.module('BucketListApp');
      angular.mock.inject(function($controller, _$httpBackend_) {
        bc = new $controller('BlogController');
        $httpBackend = _$httpBackend_;
      });
    });

    afterEach(() => {
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should have entries array', () => {
      expect(Array.isArray(bc.entries)).toBe(true);
    });

    it('should have a property editing', () => {
      expect(bc.editing).toBe(false);
    });

    it('should allow a user to update a blog entry', () => {
      let testEntry = {body: 'test entry', title: 'test title', content: 'test content',}
      $httpBackend.expectPUT('http://localhost:8080/blog')
        .respond(200, {message})
      expect()
    })

    it('should allow a user to delete a blog entry', () => {
      let testEntry = {body: 'test entry', title: 'test title', content: 'test content', _id: 1};
      $httpBackend.expectDELETE('http://localhost:8080/blog/1')
        .respond(200, {message: 'deleted'});

      bc.entries.push(testEntry);
      bc.deleteEntry(testEntry);
      $httpBackend.flush();

      expect(bc.entries.length).toBe(1);
    });
  });
});
