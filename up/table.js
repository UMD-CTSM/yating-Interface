d3.csv("https://raw.githubusercontent.com/zhyating/Interface/main/UP.csv", function(d) {
    return {
      lon : d["LONGITUDE"],
      lat : d["LATITUDE"],
      ef : d["EFFICIENCY"],
      ec : d["ECCENTRICITY"],
  };
}, function(data) {
      var ef_min = d3.min(data, function(d) { return d.ef; });
      ef_min = Number(ef_min).toFixed(6);
      var ef_max = d3.max(data, function(d) { return d.ef; });
      ef_max = Number(ef_max).toFixed(6);
      var ef_mean = d3.mean(data, function(d) { return d.ef; });
      ef_mean = Number(ef_mean).toFixed(6);
      var ef_median = d3.median(data, function(d) { return d.ef; });
      ef_median = Number(ef_median).toFixed(6);
      var ef_sd = d3.deviation(data, function(d) { return d.ef; });
      ef_sd = Number(ef_sd).toFixed(6);

      var ec_mean = d3.mean(data, function(d) { return d.ec; });
      ec_mean = Number(ec_mean).toFixed(1);
      var ec_median = d3.median(data, function(d) { return d.ec; });
      var ec_sd = d3.deviation(data, function(d) { return d.ec; });
      ec_sd = Number(ec_sd).toFixed(1);
      var ec_min = d3.min(data, function(d) { return d.ec; });
      var ec_max = d3.max(data, function(d) { return d.ec; });

      var values = [['Effeciency','Eccentricity'],
                    [ef_mean, ec_mean],
                    [ef_median, ec_median],
                    [ef_sd, ec_sd],
                    [ef_max, 1495],
                    [ef_min, 846]];
      var headerColor = "grey";
      var rowEvenColor = "lightgrey";
      var rowOddColor = "white";

      var data = [{
        type: 'table',
        header: {
          values: [[""], ["Mean"],["Median"],
               ["Standard deviation"],["Maximum"], ["Minimum"]],
          align: "center",
          line: {width: 1, color: 'black'},
          fill: {color: headerColor},
          font: {family: "Arial", size: 14, color: "white"}
        },
        cells: {
          values: values,
          align: "center",
          line: {color: "black", width: 1},
          fill: {color: [[rowOddColor,rowEvenColor]]},
          font: {family: "Arial", size: 12, color: "black"}
        }
      }];

      var layout = {
          autosize: false,
          height: 300,
          width: 1620,
          margin: {l: 350}
        }

      Plotly.newPlot('table', data, layout);
});
