import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const AreaChart = () => {
    const {currentMode} = useStateContext()
    return (
      <ChartComponent
       id='area-chart'
       height='420px'
       primaryXAxis={areaPrimaryXAxis}
       primaryYAxis={areaPrimaryYAxis}
       tooltip={{enable:true}}
       chartArea={{border:{width:0}}}
       background={currentMode === 'Dark'?'#33373E' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item,index)=> <SeriesDirective key={index}{...item}/>)}
        </SeriesCollectionDirective>
  
      </ChartComponent>
    )
}

export default AreaChart