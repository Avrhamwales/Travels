
orderTravel=[    ];

try {
    debugger
    console.log('criete the first table travels' );
    myTravels=[
        {id:1, name:'london', prise:300},
        {id:2, name:'yarden', prise:180},
        {id:3, name:'ostralya', prise:3200},
        {id:4, name:'amerika', prise:1800},
        {id:5, name:'italya', prise:380},
        {id:6, name:'israel', prise:180},
        {id:7, name:'hungarya', prise:250}
    ];
    console.log('create the line to html');
    rumOfTable = '<tr><td>code</td><td>name</td><td>price</td></tr>';
    docsToHTNL='';
    myTravels.forEach(tableTravelsElements => {
        docsToHTNL+=rumOfTable.replace('code',tableTravelsElements.id).replace('name',tableTravelsElements.name).replace('price',tableTravelsElements.prise)        
    });
    document.getElementById('tableTravels').innerHTML+=docsToHTNL;
    
} catch (error) {
    console.error('error in table travels', error);
}

function sendact(){
    try {
        console.log('start punction to send');

        let newOrder={
            name:document.getElementById('nname').value,
            id:document.getElementById('nid').value,
            idTravel:document.getElementById('nidTravel').value,
            numPass:document.getElementById('nNumPass').value
            };

        console.log('check id of this travel'); 
        numOfTravels=null;
        myTravels.forEach(element => {
            if(newOrder.idTravel==element.id){
                numOfTravels=myTravels.indexOf(element);
            }
        });

        orderTravel.push(newOrder);
        rumToOrdersTB='<tr><td>Numbering</td><td>name</td><td>id</td><td>travel<br>name</td><td>num<br>Pass</td><td>total prise</td></tr>';
        htmlToOrdersTB=rumToOrdersTB.
            replace('Numbering', orderTravel.length).
            replace('name',newOrder.name).
            replace('id',newOrder.id).
            replace('travel<br>name',myTravels[numOfTravels].name).
            replace('num<br>Pass',newOrder.numPass).
            replace('total prise',newOrder.numPass*(myTravels[numOfTravels].prise));
            document.getElementById('tbOrders').innerHTML+=htmlToOrdersTB;

    } catch (error) {
        console.error('error by punction to send',error);
    }
}
function alr(){
    alert("gdgdrgtr");
}

