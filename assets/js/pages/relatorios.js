Highcharts.chart('postagem_dia', {

    title: {
        text: 'Postagem por dia'
    },

    subtitle: {
        text: 'Quantidade de postagens feitas por dia'
    },

    yAxis: {
        title: {
            text: 'Quantidade'
        }
    },

    xAxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },

    credits:{
      enabled: false
    },

    legend:{
      enabled: false
    },

    series: [{
        name: 'Postagens',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }]

});

Highcharts.chart('curtidas_dia', {

    title: {
        text: 'Curtidas por dia'
    },

    subtitle: {
        text: 'Curtidas total de todas as páginas por dia'
    },

    yAxis: {
        title: {
            text: 'Quantidade'
        }
    },

    xAxis: {
      categories: ['01/03/2017', '02/03/2017', '03/03/2017', '04/03/2017', '05/03/2017', '06/03/2017', '07/03/2017', '08/03/2017']
    },

    credits:{
      enabled: false
    },

    legend:{
      enabled: false
    },

    series: [{
        name: 'Curtidas',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }]

});