function showEducation() {
    const bacHold = document.querySelector('#bac_hold') ; 
    const bacYear = document.createElement('h3') ; 
    bacYear.textContent =  '2013-2014' ; 
    bacYear.setAttribute('style' , 'color: grey') ;
    const bacUniv = document.createElement('h2') ; 
    bacUniv.textContent = 'Bachelor degree in Mathematics' ; 
    
    bacHold.appendChild(bacYear);
    bacHold.appendChild(bacUniv) ; 
    

    const licenceHold = document.querySelector('#licence') ; 
    const licenceYear = document.createElement('h3') ; 
    licenceYear.textContent =  '2014-2017' ; 
    licenceYear.setAttribute('style' , 'color: grey') ;
    const LicenceUniv = document.createElement('h2') ; 
    LicenceUniv.textContent = 'Licence degree in physics : Faculty of Sciences Bizerte-Tunisia (FSB) ' ; 

    licenceHold.appendChild(licenceYear);
    licenceHold.appendChild(LicenceUniv) ; 


    const mastereHold = document.querySelector('#mastere') ; 
    const mastereYear = document.createElement('h3') ; 
    mastereYear.textContent =  '2017-2019' ; 
    mastereYear.setAttribute('style' , 'color: grey') ;
    const mastereUniv = document.createElement('h2') ; 
    mastereUniv.textContent = 'Mastere degree in physics: Faculty of Sciences Bizerte-Tunisia (FSB)  ' ; 

    mastereHold.appendChild(mastereYear);
    mastereHold.appendChild(mastereUniv) ;
    
    
    
    const currentHold = document.querySelector('#current') ; 
    const currentYear = document.createElement('h3') ; 
    currentYear.textContent =  '2023- NOW' ; 
    currentYear.setAttribute('style' , 'color: grey') ; 

    const CurrentUniv = document.createElement('h2') ; 
    CurrentUniv.textContent = 'Software engineering Student : The Private Higher School of Engineering and Technology ESPRIT -Tunisia ' ; 

    currentHold.appendChild(currentYear);
    currentHold.appendChild(CurrentUniv) ;



    document.querySelector('#downRow').removeAttribute('onclick');
    document.querySelector('.Education').removeAttribute('onclick');

}