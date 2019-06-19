$(document).ready(function() {
    // initialize materialize tabs

    $('.tabs').tabs();

    // send request for realtime price of companies

    axios.get('https://financialmodelingprep.com/api/v3/company/stock/list').then(response => {
        const responseArray = response.data.symbolsList;

        let stockData = ``;

        // sort response into table
        responseArray.forEach(oneresponse => {
            const symbol = oneresponse.symbol;
            const name = oneresponse.name;
            const price = oneresponse.price;

            const tableRow = `<tr><td>${symbol}</td><td>${name}</td><td>${price}</td></tr>`;

            stockData = stockData + tableRow;
        });
        document.getElementById('stockPrice').innerHTML = stockData;
    }).catch(err => {
        console.log(err);
    })

    // send request for most actively trading companies

    axios.get('https://financialmodelingprep.com/api/v3/stock/actives').then(response => {
        const responseArray = response.data.mostActiveStock;

        let activityData = ``;

        // sort response into table

        responseArray.forEach(oneresponse => {
            const companyName = oneresponse.companyName;
            const price = oneresponse.price;
            const changes = oneresponse.changes;
            const changesPercentage = oneresponse.changesPercentage;

            const tableRow =  `<tr><td>${companyName}</td><td>${price}</td><td>${changes}</td><td>${changesPercentage}</td></tr>`;

            activityData = activityData + tableRow;
        })

        document.getElementById('activityList').innerHTML = activityData;
    }).catch(err => {
        console.log(err);
    });

    // send request for most gaining companies in the last 24 hours

    axios.get('https://financialmodelingprep.com/api/v3/stock/gainers').then(response => {
        const responseArray = response.data.mostGainerStock;

        let gainersData = ``;

        // sort response into table

        responseArray.forEach(oneresponse => {
            const companyName = oneresponse.companyName;
            const price = oneresponse.price;
            const changes = oneresponse.changes;
            const changesPercentage = oneresponse.changesPercentage;

            const tableRow =  `<tr><td>${companyName}</td><td>${price}</td><td>${changes}</td><td>${changesPercentage}</td></tr>`;

            gainersData = gainersData + tableRow;
        })

        document.getElementById('gaining-list').innerHTML = gainersData;
    }).catch(err => {
        console.log(err);
    })

    // send request for most losing companies in the last 24 hours

    axios.get('https://financialmodelingprep.com/api/v3/stock/losers').then(response => {
        const responseArray = response.data.mostLoserStock;

        let losersData = ``;

        // sort response into table

        responseArray.forEach(oneresponse => {
            const companyName = oneresponse.companyName;
            const price = oneresponse.price;
            const changes = oneresponse.changes;
            const changesPercentage = oneresponse.changesPercentage;

            const tableRow =  `<tr><td>${companyName}</td><td>${price}</td><td>${changes}</td><td>${changesPercentage}</td></tr>`;

            losersData = losersData + tableRow;
        })

        document.getElementById('losing-list').innerHTML = losersData;
    }).catch(err => {
        console.log(err);
    });
})


