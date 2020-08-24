function generateData(count, start, growth){

    //create an emoty array 
    const data = [];

     //loop over the count
    for (let i = 0; i < count; i ++ ){
          //pushing random number onto the array
        data.push(Math.floor(start + (Math.random() * i) * growth)) ;
    }
   
    //return the array
    return data;

}




export const ChartData = [
    {
    name: 'Xanax',
    data: generateData(12, 30, 5),
    color: '#008f70'
}, {
    name: 'Oxycontin',
    data: generateData(12, 10, 0.2),

    color: '#00CCA0'
}, 
{
  name: 'Valium',
  data: generateData(12, 6, 0.3),
  color: '#02DED3'
},

{
  name: 'Zopoclone',
  data: generateData(12, 5, 0.5),
  color: '#47FFD7'
},

]

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];


function format(num){
  return `$${num} Million`
} 

export const tableRows = months.map((month, i) => ({
  month,
  Xanax: format(ChartData[0].data[i]),
  Oxycontin: format(ChartData[1].data[i]),
  Valium: format(ChartData[2].data[i]),
  Zopoclone: format(ChartData[3].data[i]),
  

}));

console.log(tableRows)

export const tableColumns = [


  {
    width: 240,
    label: 'Month',
    dataKey: 'month',
  },

{
  width: 240,
  label: 'Xanax',
  dataKey: 'Xanax',
},
{
  width: 240,
  label: 'Oxycontin',
  dataKey: 'Oxycontin',
},
{
  width: 240,
  label: 'Valium',
  dataKey: 'Valium',
},
{
  width: 240,
  label: 'Zopoclone',
  dataKey: 'Zopoclone',
},


]