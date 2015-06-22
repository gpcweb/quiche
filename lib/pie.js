
// http://code.google.com/apis/chart/image/docs/gallery/pie_charts.html

var util = require('util');

var Chart = require('./chart');

var Pie = function() {
  this.initialize();
};

util.inherits(Pie, Chart);

Pie.prototype.initialize = function() {
  Pie.super_.prototype.initialize.call(this);

  this.type = 'pie';
  this.moreDs = false;
  this.setAutoScaling();
  this.labels = [];
};

Pie.prototype.set3D = function() {
  this.moreDs = true;
};

Pie.prototype.setLabels = function(data) {
  this.labels = data;
};

Pie.prototype.getLabels = function() {
  return this.labels;
};

Pie.prototype.is3D = function() {
  return this.moreDs;
}

module.exports = Pie;
