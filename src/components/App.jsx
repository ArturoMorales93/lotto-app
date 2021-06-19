import '../styles/styles.scss'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AppRoutes from './AppRoutes'

const App = () => (
  <Provider store={store}>
      <AppRoutes />
  </Provider>
)

export default App;