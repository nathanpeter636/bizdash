// function generateData(count, start, growth) {
//     //empty array
//     const data = [];

// }
//     //for loop over the count 
//     for (let i = 0; i < count; i++) {
//         // push random number into the array
//         data.push(Math.floor(start + Math.random() * i * growth));
//     }

//     //return array
//     return data;
// }


// export const ChartData = [

//     {
//         name: 'Phones',
//         data: generateData(12, 30, 5),
//         color: '#149947',
//     },

//     {
//         name: 'Services',
//         data: generateData(12, 10, 0.2),
//         color: '#1DDA65',
//     },

//     {
//         name: 'Laptops',
//         data: generateData(12, 6, 0.3),
//         color: '#5CF396',
//     },

//     {
//         name: 'Tablets',
//         data: generateData(12, 5, 0.5),
//         color: '#C1FAD7',
//     },


// ];

// const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];

// export const tableRows = months.map((month, i)) => ({
//     month,
//     phones: chartData[0].data[i],
//     services: chartData[1].data[i],
//     laptops: chartData[2].data[i],
//     tablets: chartData[3].data[i]
// }));

// console.log(tableRows)