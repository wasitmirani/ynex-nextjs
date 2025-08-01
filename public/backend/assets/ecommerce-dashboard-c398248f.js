var e = document.getElementById("earnings");
if (e !== null) {
    e.innerHTML = "";
    var a = {
        series: [{
            name: "Total Orders",
            data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34]
        }],
        chart: {
            type: "bar",
            height: 200
        },
        grid: {
            borderColor: "#f2f6f7"
        },
        colors: ["rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
        plotOptions: {
            bar: {
                columnWidth: "25%",
                distributed: !0,
                borderRadius: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: !1
        },
        yaxis: {
            title: {
                style: {
                    color: "#adb5be",
                    fontSize: "12px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    cssClass: "apexcharts-yaxis-label"
                }
            },
            labels: {
                formatter: function(r) {
                    return r.toFixed(0) + ""
                }
            }
        },
        xaxis: {
            type: "month",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"],
            axisBorder: {
                show: !0,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: !0,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    }
      , t = new ApexCharts(document.querySelector("#earnings"),a);
    t.render()
}
