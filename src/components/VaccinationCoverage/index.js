// Write your code here

import {BarChart, XAxis, YAxis, Bar, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {vaccinationCoverageDetails} = props

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        data={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            fontSize: 13,
            fontFamily: 'Roboto',
            strokeWidth: 1,
            stroke: '6c757d',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            fontSize: 13,
            fontFamily: 'Roboto',
            stroke: '#6c757d',
            strokeWidth: 0.5,
          }}
        />
        <Bar
          dataKey="dose1"
          name="dose1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="dose2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
