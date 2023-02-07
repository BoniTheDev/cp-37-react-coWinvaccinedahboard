// Write your code here

import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="vaccine-by-gender-container">
      <h1 className="vaccine-by-gender-heading">Vaccination By Gender</h1>
      <PieChart width={900} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 15, fontFamily: 'Bree Serif'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
