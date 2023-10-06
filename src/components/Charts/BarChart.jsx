import React from 'react'
import {  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const BarChart = () => {
    const {currentMode} = useStateContext()
    return (
      <ChartComponent
       id='bar-chart'
       height='420px'
       primaryXAxis={barPrimaryXAxis}
       primaryYAxis={barPrimaryYAxis}
       tooltip={{enable:true}}
       chartArea={{border:{width:0}}}
       background={currentMode === 'Dark'?'#33373E' : '#fff'}
       legendSettings={{background:'white'}}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=> <SeriesDirective key={index}{...item}/>)}
        </SeriesCollectionDirective>
  
      </ChartComponent>
    )
}

export default BarChart