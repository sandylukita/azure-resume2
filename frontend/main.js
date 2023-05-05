window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
} )

const functionApiUrl = 'https://getresumecountersl.azurewebsites.net/api/GetResumeCounter?code=fkHvDb8kkeaLD391lkjoZYpAVPmLEN5DAarwegiiAyD0AzFuyu8iFw=='
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
