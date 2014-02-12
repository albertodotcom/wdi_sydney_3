// Generated by CoffeeScript 1.7.1
(function() {
  var Mta;

  Mta = (function() {
    var mta;

    function Mta() {
      this._lines = ["n", "l", "6"];
      this._stations = {
        n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        l: ["8th", "6th", "Union Square", "3rd", "1st"],
        6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
      };
      this._conjunctions = {
        "Union Square": ["n", "l", "6"]
      };
    }

    Mta.prototype.getStationsInBetween = function(startIndex, endIndex, currentLineStops) {
      var arr;
      arr = [];
      if (startIndex < endIndex) {
        while (startIndex < endIndex) {
          arr.push(currentLineStops[startIndex + 1]);
          startIndex += 1;
        }
      } else if (startIndex > endIndex) {
        while (startIndex > endIndex) {
          arr.push(currentLineStops[startIndex - 1]);
          startIndex -= 1;
        }
      } else {
        return arr;
      }
      arr.shift;
      return arr;
    };

    Mta.prototype.stationsConjunctions = function(line1, line2) {
      var conjunction, stops, _ref;
      _ref = this._conjunctions;
      for (conjunction in _ref) {
        stops = _ref[conjunction];
        if (stops.indexOf(line1) !== -1 && stops.indexOf(line2) !== -1) {
          return conjunction;
        }
      }
      return null;
    };

    Mta.prototype.calculateTravel = function(startLine, startStation, endLine, endStation) {
      var arr, change_index_end_line, change_index_start_line, change_station, currentLineStops, end_index, end_line_stations, start_index, start_line_stations;
      arr = [];
      if (startLine === endLine) {
        currentLineStops = this._stations[startLine];
        start_index = currentLineStops.indexOf(startStation);
        end_index = currentLineStops.indexOf(endStation);
        arr = this.getStationsInBetween(start_index, end_index, currentLineStops);
      } else {
        start_line_stations = this._stations[startLine];
        end_line_stations = this._stations[endLine];
        change_station = this.stationsConjunctions(startLine, endLine);
        if (change_station === null) {
          return;
        }
        change_index_start_line = start_line_stations.indexOf(change_station);
        change_index_end_line = end_line_stations.indexOf(change_station);
        start_index = start_line_stations.indexOf(startStation);
        end_index = end_line_stations.indexOf(endStation);
        arr = this.getStationsInBetween(start_index, change_index_start_line, start_line_stations);
        arr = arr.concat(this.getStationsInBetween(change_index_end_line, end_index, end_line_stations));
      }
      arr.unshift();
      return console.log(arr);
    };

    mta = new Mta;

    mta.calculateTravel('n', '34th', 'n', '8th');

    mta.calculateTravel('n', '34th', 'l', '3rd');

    mta.calculateTravel('6', 'Grand Central', 'l', '3rd');

    mta.calculateTravel('6', 'Grand Central', 'l', '8th');

    mta.calculateTravel('6', 'Grand Central', 'l', '1st');

    return Mta;

  })();

}).call(this);