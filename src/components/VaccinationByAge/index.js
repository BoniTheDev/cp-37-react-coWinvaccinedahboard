// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  console.log(vaccinationByAgeDetails)

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
      <PieChart width={1000} height={500}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="60%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          wrapperStyle={{fontSize: 15, fontFamily: 'Robotto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
