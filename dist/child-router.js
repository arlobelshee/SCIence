System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
  var inject, Router, _classCallCheck, _createClass, ChildRouter;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ChildRouter = (function () {
        function ChildRouter(router) {
          _classCallCheck(this, _ChildRouter);

          this.heading = 'Child Router';

          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', moduleId: './flickr', nav: true }, { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);
          });
        }

        var _ChildRouter = ChildRouter;

        _createClass(_ChildRouter, [{
          key: 'heading',
          value: undefined,
          enumerable: true
        }]);

        ChildRouter = inject(Router)(ChildRouter) || ChildRouter;
        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FEQUlhLFdBQVc7Ozs7aUNBSmhCLE1BQU07OzhCQUNOLE1BQU07Ozs7Ozs7OztBQUdELGlCQUFXO0FBR1gsaUJBSEEsV0FBVyxDQUdWLE1BQU0sRUFBQzs7O2VBRm5CLE9BQU8sR0FBRyxjQUFjOztBQUd0QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxXQUFXLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ2xGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsVUFBVSxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDakUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDeEYsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7OzJCQVpVLFdBQVc7Ozs7Ozs7O0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNGLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=