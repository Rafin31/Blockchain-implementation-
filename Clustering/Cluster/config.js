function chartData() {
    return {
        dataset:
            [
                {
                    label: 'Data Chart',
                    data: dataSet().map((dataPoint) => {
                        return {
                            x: dataPoint.WGB, y: dataPoint.RGB
                        }
                    }),

                    pointStyle: dataSet().map(dataPoint => 'circle'),
                    pointRadius: dataSet().map(dataPoint => 5, 5),
                    pointBackgroundColor: [],
                    showLine: false,
                    backgroundColor: 'aqua',

                }
            ]
    }
}