
import Vscodesidebar from './components/Vscodesidebar'
import { mockData } from './utils/mock'

const App = () => {
  return (
    <div>
      <Vscodesidebar data={mockData}/>
    </div>
  )
}

export default App