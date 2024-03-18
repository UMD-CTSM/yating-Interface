d3.csv('https://raw.githubusercontent.com/zhyating/Interface/main/UP.csv',
function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var button_layer_1_height = 1.25
    var button_layer_2_height = 1.15
    var annotation_offset = 0.04

    var data = [{
        type:'scattermapbox',
        name: 'ID',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        hovertemplate: 'Loation: %{lat},%{lon};  ID: %{text} ',
        text:  unpack(rows, 'FRANODEID'),
        mode: 'markers',
        marker: {
            size: 6,
            opacity: 0.5,
            reversescale: true,
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: 'Rainbow',
            color: unpack(rows, 'FRANODEID'),
            colorbar: {
                x: 0.9,
                len: 0.8,
                thickness: 10,
                title: 'ID'
            }
        }
    },
    {
        type:'scattermapbox',
        name: 'Effeciency',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        hovertemplate: 'Loation: %{lat},%{lon};  Efficiency: %{text:.5f} ',
        text:  unpack(rows, 'EFFICIENCY'),
        mode: 'markers',
        marker: {
            size: 6,
            opacity: 0.5,
            reversescale: true,
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: 'Rainbow',
            color: unpack(rows, 'EFFICIENCY'),
            colorbar: {
                x: 0.9,
                len: 0.8,
                thickness: 10,
                title: 'Efficiency'
            }
        }
    },
    {
        type:'scattermapbox',
        name: 'Eccentricity',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        hovertemplate: 'Loation: %{lat},%{lon};  Eccentricity: %{text:.5f} ',
        text:  unpack(rows, 'ECCENTRICITY'),
        mode: 'markers',
        marker: {
            size: 6,
            opacity: 0.5,
            reversescale: true,
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: 'Rainbow',
            color: unpack(rows, 'ECCENTRICITY'),
            colorbar: {
                x: 0.9,
                len: 0.8,
                thickness: 10,
                title: 'Eccentricity'
            }
        }
    }];

    var updatemenus=[
      {
          buttons: [
            {
            method: 'restyle',
            args: ['visible', [true, false, false]],
            label: 'ID'
            },
            {
            method: 'restyle',
            args: ['visible', [false, true, false]],
            label: 'Effeciency'
            },
            {
            method: 'restyle',
            args: ['visible', [false, false, true]],
            label: 'Eccentricity'
            }],
          direction: 'left',
          pad: {'r': 10, 't': 10},
          showactive: true,
          type: 'buttons',
          x: 0.2,
          xanchor: 'left',
          y: button_layer_1_height,
          yanchor: 'top'
      },

      {
          buttons: [
              {
                  args: ['marker.colorscale', 'Rainbow'],
                  label: 'Rainbow',
                  method: 'restyle'
              },
              {
                  args: ['marker.colorscale', 'Hot'],
                  label:'Heat',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Viridis'],
                  label:'Rain',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Greys'],
                  label:'Greys',
                  method:'restyle'
              },
          ],
        direction: 'left',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 0.2,
        xanchor: 'left',
        y: button_layer_2_height,
        yanchor: 'top'
    }
  ];

    var annotations = [
      {
        text: 'Parameter',
        x: 0.1,
        y: button_layer_1_height - annotation_offset,
        yref: 'paper',
        align: 'left',
        showarrow: false
      },
      {
        text: 'Color scheme',
        x: 0.1,
        y: button_layer_2_height - annotation_offset,
        yref: 'paper',
        align: 'left',
        showarrow: false
      }
  ];

    var layout = {
        height: 600,
        showlegend: false,
        updatemenus: updatemenus,
        annotations: annotations,
        dragmode: "zoom",
        mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
        margin: {t: 0, b: 0, l: 350, r: 350},
    };

    Plotly.newPlot("efficiency", data, layout, {showLink: false});

});
