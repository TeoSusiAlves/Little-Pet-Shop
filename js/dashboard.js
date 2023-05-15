//PETS MAIS ATENDIDOS INÍCIO

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(pizza);

function pizza() {

    let data = google.visualization.arrayToDataTable([
        ['Animais', 'Atendimentos'],
        ['Cachorro', Math.random() * 100],
        ['Gato', Math.random() * 100],
        ['Pássaros', Math.random() * 100],
        ['Peixes', Math.random() * 100],
        ['Outros', Math.random() * 100]
    ]);

    var options = {
        colors: ['#901ecc', '#5605c9', '#5705b2', '#5e1385', '#562078',],
        title: '',
        legend: 'bottom'
    };

    var chart = new google.visualization.PieChart(document.getElementById('pets'));

    chart.draw(data, options);
}

//PETS MAIS ATENDIDOS FIM

//AGENDAMENTOS SEMANAIS INÍCIO

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(linha);

function linha() {
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Agendamentos'],
        ['Janeiro', Math.random() * 20],
        ['Fevereiro', Math.random() * 12],
        ['Março', Math.random() * 15],
        ['Abril', Math.random() * 14],
        ['Maio', Math.random() * 20],
        ['Junho', Math.random() * 12],
        ['Julho', Math.random() * 16],
        ['Agosto', Math.random() * 21],
        ['Setembro', Math.random() * 12],
        ['Outubro', Math.random() * 13],
        ['Novembro', Math.random() * 17],
        ['Dezembro', Math.random() * 21]

    ]);

    var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['#901ecc', '#5605c9', '#5705b2', '#5e1385', '#562078',]
    };



    var chart = new google.visualization.LineChart(document.getElementById('agend'));

    chart.draw(data, options);
}

//AGENDAMENTOS SEMANAIS FIM

//SERVIÇOS MAIS POPULARES INÍCIO

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(popular);
function popular() {
    var data = google.visualization.arrayToDataTable([
        ["Serviço", "Serviços", { role: "style" }],
        ["Banho e tosa", Math.random() * 90 > 50 ? Math.random() * 70 : 20.000, "#901ecc"],
        ["Day-care", Math.random() * 90 > 50 ? Math.random() * 70 : 100.000, "#5605c9"],
        ["Adestramento", Math.random() * 90 > 50 ? Math.random() * 70 : 70.000, "#5705b2"],
        ["Castração", Math.random() * 90 > 50 ? Math.random() * 70 : 45.000, "#5e1385"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "",
        bar: { groupWidth: "75%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("popular"));
    chart.draw(view, options);
}

//SERVIÇOS MAIS POPULARES FIM

//PRODUTOS POPULARES INÍCIO

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(produto);
function produto() {
    var data = google.visualization.arrayToDataTable([
        ["Produto", "Vendas", { role: "style" }],
        ["Ração Golden Fórmula para Cães Senior", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 19.000, "#901ecc"],
        ["Ração Golden para Gatos Sênior ", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 67.000, "#5605c9"],
        ["Luminária Interna Boyu para Lagos e Fontes", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 70.000, "#5705b2"],
        ["Brinquedo Macaco para cães", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 78.000, "#5e1385"],
        ["Ração Golden para Gatos Adultos", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 23.000, "#901ecc"],
        ["Ração Úmida Royal Canin Intense", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 65.000, "#5605c9"],
        ["Ração Sempre Vita Calopsitas e Agapornis", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 45.000, "#5705b2"],
        ["Ração Golden Special para Cães Adultos", Math.random() * 90 > 50 ? Math.random().toFixed(2) * 70 : 74.000, "#5e1385"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "",
        bar: { groupWidth: "75%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("produto"));
    chart.draw(view, options);
}

//PRODUTOS MAIS POPULARES FIM