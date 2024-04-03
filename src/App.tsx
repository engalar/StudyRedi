import { connectDependencies } from '@wendellhu/redi/react-bindings'
import './App.css'
import { ISatellite, MapComponent } from './components/MapComponent'
import GPSSatellite from './components/GPSSatellite'
import BeidouSatellite from './components/BeidouSatellite'

const WrapMap = connectDependencies(MapComponent, [[ISatellite, { useClass: GPSSatellite }], [ISatellite, { useValue: new BeidouSatellite }]])

function App() {

  return (
    <WrapMap></WrapMap>
  )
}

export default App
