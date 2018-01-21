document.getElementById('newCross').addEventListener('submit', addCross);
document.getElementsByTagName('a')[0].addEventListener('click',toggleFunc);



function delRow(e) {
    var cross = e.target;
    var i = cross.parentNode.parentNode;
    i.parentNode.removeChild(i);
}

function toggleFunc(){
    var chevron = document.getElementById('toggle').getAttribute('class');
    var Active = 'glyphicon glyphicon-chevron-up'; 
    var inActive = 'glyphicon glyphicon-chevron-down';

   if (chevron == inActive) {
        document.getElementById('toggle').setAttribute('class',Active) 
   } else if (chevron == Active) {
        document.getElementById('toggle').setAttribute('class',inActive) 
   }
}

function getCross(){

    var crosses = [];
    crosses.push(JSON.parse(localStorage.getItem('cross')));
    var crossList = document.getElementById('viewCross');
    console.log(crosses[0].crossAdv);
    

    

    for (var i = 0 ;i < crosses.length; i++){

        var listDate = crosses[i].crossDateValue;
        var listCoverage = crosses[i].crossCoverage;
        var listAdv = crosses[i].crossAdv;
        var listUsd = crosses[i].crossUsd;

        var listRow = document.createElement('tr');

        var listDateCell = document.createElement('td') ;
        var listCoverageCell = document.createElement('td');
        var listAdvCell = document.createElement('td');
        var listUsdCell = document.createElement('td');
        var listDelCell = document.createElement('td');

        listDateCell.textContent = listDate;
        listCoverageCell.textContent = listCoverage;
        listAdvCell.textContent = listAdv;
        listUsdCell.textContent = listUsd;
        listDelCell.innerHTML = '<span class="glyphicon glyphicon-remove"></span>';
        
        listRow.appendChild(listDateCell)
        listRow.appendChild(listCoverageCell)
        listRow.appendChild(listAdvCell)
        listRow.appendChild(listUsdCell)
        listRow.appendChild(listDelCell)

        crossList.appendChild(listRow);
    }

    var i = document.getElementsByClassName('glyphicon glyphicon-remove');
    for (let j = 0; j < i.length ; j++){
        i[j].addEventListener('click',delRow);
    }
}

function addCross(e){

    var dateValue = document.getElementById('date').value;
    var coverage = document.getElementById('coverage').value;
    var adv = document.getElementById('adv').value;
    var usd = document.getElementById('usd').value;

    var cross = {
        crossDateValue : dateValue,
        crossCoverage : coverage,
        crossAdv : adv,
        crossUsd : usd
        }
        
    localStorage.setItem("cross",JSON.stringify(cross))
    
    
    
    document.getElementById('newCross').reset();

    getCross();
    e.preventDefault(); 
    }

