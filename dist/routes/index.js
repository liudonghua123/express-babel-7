"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _package = require("../../package.json");

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  res.json({
    name: _package.name,
    version: _package.version
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIm5hbWUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDNUJBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQ1BDLElBQUFBLElBQUksRUFBRUEsYUFEQztBQUVQQyxJQUFBQSxPQUFPLEVBQUVBO0FBRkYsR0FBVDtBQUlELENBTEQ7ZUFPZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5qc29uKHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHZlcnNpb246IHZlcnNpb25cbiAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl19