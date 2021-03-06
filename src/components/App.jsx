import '../styles/styles.scss'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AppRoutes from './AppRoutes'
import { getCantNumbersList, getTopNumbersList } from '../redux/actionCreators'

store.dispatch(getTopNumbersList())
store.dispatch(getCantNumbersList())

const App = () => (
  <Provider store={store}>
      <AppRoutes />
  </Provider>
)

export default App;