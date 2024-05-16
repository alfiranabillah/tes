// DOM
const ctx = document.getElementById("myChart");
const ctp = document.getElementById("pieChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["XL", "XXL"],
    datasets: [
      {
        label: 'quantity',
        data: [552, 28],
        borderWidth: 1,
      },
    ],
  },

  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        
      },
      y: {
        stacked: true,
        grid: {
            display: false
          }
      },
    },
  },
});

new Chart(ctp, {
    type: "pie",
    data: {
      labels: ["XL", "XXL"],
      datasets: [
        {
          label: "# of Votes",
          data: [93.3, 6.7],
          borderWidth: 1,
        },
      ],
    },
  });

  const stackedBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["the_greek_XL", "the_greek_XXL"],
        datasets: [
          {
            label: 'quantity',
            data: [552, 28],
            borderWidth: 1,
          },
        ],
      },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});
