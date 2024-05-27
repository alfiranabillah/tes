async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

async function visualizeData() {
  const jsonData = await fetchData();

  // 1. Aggregate Sales by Month (combining XL and XXL)
  const monthlySales = {};
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  jsonData.forEach(order => {
      if (order.size === "XL" || order.size === "XXL") {
          const monthIndex = parseInt(order.date.split("/")[0], 10) - 1;
          const monthName = monthNames[monthIndex];
          const quantity = parseInt(order.quantity); 

          if (!monthlySales[monthName]) {
              monthlySales[monthName] = 0; 
          }
          monthlySales[monthName] += quantity; 
      }
  });

  // 2. Prepare Data for Chart.js
  const labels = Object.keys(monthlySales);

  const datasets = [{
      label: "XL & XXL",
      data: labels.map(monthName => monthlySales[monthName]),
      backgroundColor: 'rgba(54, 162, 235, 0.5)', 
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
  }];

  // 3. Create Horizontal Bar Chart
      // 3. Create Horizontal Bar Chart
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
          type: "bar",
          data: {
              labels: labels,
              datasets: datasets,
          },
          options: {
              indexAxis: 'y',
              maintainAspectRatio: false, // Izinkan perubahan ukuran canvas
              plugins: {
                  title: {
                      display: true,
                      text: "Total Penjualan Pizza XL & XXL Per Bulan (Quantity)"
                  },
                  legend: {
                      display: false, // Sembunyikan legend jika tidak diperlukan
                  }
              },
              scales: {
                  x: {
                      beginAtZero: true, 
                  },
                  y: {
                      ticks: {
                          maxRotation: 45,
                          minRotation: 45,
                      },
                  },
              },
              layout: {
                  padding: {
                      left: 0,
                      top: 0, 
                  }
              }
          },
      });
  }

visualizeData(); 
